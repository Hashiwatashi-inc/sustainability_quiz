import { useState, useCallback } from 'react'
import { vocabulary, VOCAB_CATEGORIES } from '../data/vocabulary'
import type { VocabWord } from '../data/vocabulary'

type VocabTab = 'list' | 'quiz'

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const QUIZ_COUNT = 20

interface VocabQuestion {
  word: VocabWord
  choices: string[]
  correctIndex: number
}

function generateVocabQuestions(): VocabQuestion[] {
  const shuffled = shuffle(vocabulary).slice(0, QUIZ_COUNT)
  return shuffled.map(word => {
    const wrongs = shuffle(vocabulary.filter(v => v.id !== word.id)).slice(0, 3).map(v => v.definition)
    const allChoices = shuffle([word.definition, ...wrongs])
    return { word, choices: allChoices, correctIndex: allChoices.indexOf(word.definition) }
  })
}

const CAT_COLORS: Record<string, string> = {
  '気候変動・環境': '#2E7D32',
  'エネルギー': '#F57C00',
  '企業・経営': '#1565C0',
  '金融・投資': '#6A1B9A',
  '政策・制度': '#C62828',
  '技術・イノベーション': '#00838F',
  '国際・条約': '#558B2F',
}

export function VocabPage() {
  const [tab, setTab] = useState<VocabTab>('list')
  const [selectedCat, setSelectedCat] = useState('すべて')
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [search, setSearch] = useState('')

  // Quiz state
  const [quizState, setQuizState] = useState<'start' | 'playing' | 'result'>('start')
  const [quizQuestions, setQuizQuestions] = useState<VocabQuestion[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [answers, setAnswers] = useState<(number | null)[]>([])
  const [showFeedback, setShowFeedback] = useState(false)

  const filtered = vocabulary.filter(v => {
    const catMatch = selectedCat === 'すべて' || v.category === selectedCat
    const searchMatch = !search || v.word.toLowerCase().includes(search.toLowerCase()) ||
      (v.english?.toLowerCase().includes(search.toLowerCase())) ||
      v.definition.includes(search)
    return catMatch && searchMatch
  })

  const startVocabQuiz = useCallback(() => {
    const q = generateVocabQuestions()
    setQuizQuestions(q)
    setAnswers(Array(QUIZ_COUNT).fill(null))
    setCurrentIndex(0)
    setSelectedIndex(null)
    setShowFeedback(false)
    setQuizState('playing')
  }, [])

  const handleVocabSelect = useCallback((idx: number) => {
    if (showFeedback) return
    setSelectedIndex(idx)
    setShowFeedback(true)
    const newAnswers = [...answers]
    newAnswers[currentIndex] = idx
    setAnswers(newAnswers)
  }, [showFeedback, answers, currentIndex])

  const handleVocabNext = useCallback(() => {
    if (currentIndex < QUIZ_COUNT - 1) {
      setCurrentIndex(prev => prev + 1)
      setSelectedIndex(null)
      setShowFeedback(false)
    } else {
      setQuizState('result')
    }
  }, [currentIndex])

  const correctCount = answers.filter((a, i) => a === quizQuestions[i]?.correctIndex).length
  const score = quizQuestions.length > 0 ? Math.round((correctCount / QUIZ_COUNT) * 100) : 0

  return (
    <div className="vocab-page">
      {/* Tab Switch */}
      <div className="tab-bar">
        <button className={`tab-btn ${tab === 'list' ? 'active' : ''}`} onClick={() => setTab('list')}>
          📖 単語集
        </button>
        <button className={`tab-btn ${tab === 'quiz' ? 'active' : ''}`} onClick={() => setTab('quiz')}>
          🃏 単語クイズ
        </button>
      </div>

      {tab === 'list' ? (
        <div className="vocab-list-page">
          {/* Search + Filter */}
          <div className="vocab-controls">
            <input
              className="search-input"
              type="text"
              placeholder="🔍 単語を検索..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <div className="cat-filters">
              {['すべて', ...VOCAB_CATEGORIES].map(cat => (
                <button
                  key={cat}
                  className={`cat-chip ${selectedCat === cat ? 'active' : ''}`}
                  style={selectedCat === cat ? { backgroundColor: CAT_COLORS[cat] || '#2E7D32', color: '#fff', borderColor: 'transparent' } : {}}
                  onClick={() => setSelectedCat(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <p className="vocab-count">{filtered.length}語</p>
          </div>

          {/* Word List */}
          <div className="word-list">
            {filtered.map(word => {
              const isExpanded = expandedId === word.id
              const catColor = CAT_COLORS[word.category] || '#2E7D32'
              return (
                <div
                  key={word.id}
                  className={`word-item ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => setExpandedId(isExpanded ? null : word.id)}
                >
                  <div className="word-item-header">
                    <div className="word-cat-dot" style={{ backgroundColor: catColor }} />
                    <div className="word-main">
                      <span className="word-term">{word.word}</span>
                      {word.english && <span className="word-en">{word.english}</span>}
                    </div>
                    <span className="word-cat-badge" style={{ backgroundColor: catColor + '20', color: catColor }}>
                      {word.category}
                    </span>
                    <span className="expand-icon">{isExpanded ? '▲' : '▼'}</span>
                  </div>
                  {isExpanded && (
                    <div className="word-body">
                      <p className="word-def">{word.definition}</p>
                      {word.example && (
                        <div className="word-example">
                          <span className="example-label">例：</span>
                          <span>{word.example}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      ) : (
        /* Vocab Quiz */
        <div className="vocab-quiz-page">
          {quizState === 'start' && (
            <div className="vocab-quiz-start">
              <div className="quiz-start-card">
                <div className="quiz-start-icon">🃏</div>
                <h2>単語クイズ</h2>
                <p>110語の中からランダムに20問出題。単語の意味を4択で答えましょう。</p>
                <div className="quiz-info-grid">
                  <div className="quiz-info-item"><span className="quiz-info-num">110</span><span className="quiz-info-label">総単語数</span></div>
                  <div className="quiz-info-item"><span className="quiz-info-num">20</span><span className="quiz-info-label">出題数</span></div>
                  <div className="quiz-info-item"><span className="quiz-info-num">4択</span><span className="quiz-info-label">形式</span></div>
                </div>
                <button className="btn-teal btn-large" onClick={startVocabQuiz}>単語クイズを始める</button>

                <div className="cat-guide">
                  <p className="cat-guide-title">カテゴリ別単語数</p>
                  {VOCAB_CATEGORIES.map(cat => (
                    <div key={cat} className="cat-guide-row">
                      <div className="cat-guide-dot" style={{ backgroundColor: CAT_COLORS[cat] }} />
                      <span className="cat-guide-name">{cat}</span>
                      <span className="cat-guide-count">{vocabulary.filter(v => v.category === cat).length}語</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {quizState === 'result' && (
            <div className="quiz-result">
              <div className="result-card">
                <h2>単語クイズ完了！</h2>
                <div className="score-display">
                  <span className="score-num teal">{score}</span>
                  <span className="score-pct teal">%</span>
                </div>
                <p className="score-detail">{QUIZ_COUNT}問中 <strong>{correctCount}問</strong> 正解</p>
                <p className="score-msg">
                  {score >= 80 ? '🎉 単語マスターです！' : score >= 60 ? '💪 もう少し！復習してみよう' : '📖 単語集で復習しましょう！'}
                </p>
                <div className="result-btns">
                  <button className="btn-teal" onClick={startVocabQuiz}>もう一度チャレンジ</button>
                  <button className="btn-ghost" onClick={() => setQuizState('start')}>トップに戻る</button>
                </div>
              </div>
            </div>
          )}

          {quizState === 'playing' && quizQuestions[currentIndex] && (() => {
            const current = quizQuestions[currentIndex]
            return (
              <div className="quiz-playing">
                <div className="quiz-progress">
                  <div className="progress-info">
                    <span>{currentIndex + 1} / {QUIZ_COUNT}</span>
                    <span className="correct-count">✓ {correctCount}</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill teal" style={{ width: `${((currentIndex + 1) / QUIZ_COUNT) * 100}%` }} />
                  </div>
                </div>
                <div className="quiz-content">
                  <div className="chapter-badge teal-badge">{current.word.category}</div>
                  <div className="question-card">
                    <p className="question-num">この単語の意味は？</p>
                    <p className="question-text word-question">{current.word.word}</p>
                    {current.word.english && <p className="word-en-q">{current.word.english}</p>}
                  </div>
                  <div className="choices">
                    {current.choices.map((choice, idx) => {
                      let cls = 'choice-btn'
                      if (showFeedback) {
                        if (idx === current.correctIndex) cls += ' choice-correct'
                        else if (idx === selectedIndex) cls += ' choice-wrong'
                        else cls += ' choice-dim'
                      }
                      return (
                        <button key={idx} className={cls} onClick={() => handleVocabSelect(idx)} disabled={showFeedback}>
                          <span className="choice-label">{['A', 'B', 'C', 'D'][idx]}</span>
                          <span className="choice-text">{choice}</span>
                        </button>
                      )
                    })}
                  </div>
                  {showFeedback && (
                    <div className={`explanation-card ${selectedIndex === current.correctIndex ? 'exp-correct' : 'exp-wrong'}`}>
                      <p className="exp-label">{selectedIndex === current.correctIndex ? '✓ 正解！' : '✗ 不正解'}</p>
                      {current.word.example && <p className="exp-text">例：{current.word.example}</p>}
                    </div>
                  )}
                  {showFeedback && (
                    <button className="btn-teal btn-next" onClick={handleVocabNext}>
                      {currentIndex < QUIZ_COUNT - 1 ? '次の問題へ →' : '結果を見る'}
                    </button>
                  )}
                </div>
              </div>
            )
          })()}
        </div>
      )}
    </div>
  )
}
