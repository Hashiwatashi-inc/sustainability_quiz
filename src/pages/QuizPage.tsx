import { useState, useCallback } from 'react'
import { questions } from '../data/questions'
import { questionsExtra } from '../data/questions_extra'
import type { Question } from '../data/questions'

const ALL_QUESTIONS = [...questions, ...questionsExtra]
const QUIZ_COUNT = 30

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

type QuizState = 'start' | 'playing' | 'result' | 'review'

export function QuizPage() {
  const [state, setState] = useState<QuizState>('start')
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [answers, setAnswers] = useState<(number | null)[]>([])
  const [showFeedback, setShowFeedback] = useState(false)

  const startQuiz = useCallback(() => {
    const q = shuffle(ALL_QUESTIONS).slice(0, QUIZ_COUNT)
    setQuizQuestions(q)
    setAnswers(Array(QUIZ_COUNT).fill(null))
    setCurrentIndex(0)
    setSelectedIndex(null)
    setShowFeedback(false)
    setState('playing')
  }, [])

  const handleSelect = useCallback((idx: number) => {
    if (showFeedback) return
    setSelectedIndex(idx)
    setShowFeedback(true)
    const newAnswers = [...answers]
    newAnswers[currentIndex] = idx
    setAnswers(newAnswers)
  }, [showFeedback, answers, currentIndex])

  const handleNext = useCallback(() => {
    if (currentIndex < QUIZ_COUNT - 1) {
      setCurrentIndex(prev => prev + 1)
      setSelectedIndex(null)
      setShowFeedback(false)
    } else {
      setState('result')
    }
  }, [currentIndex])

  const correctCount = answers.filter((a, i) => a === quizQuestions[i]?.correctIndex).length
  const score = quizQuestions.length > 0 ? Math.round((correctCount / QUIZ_COUNT) * 100) : 0

  if (state === 'start') {
    return (
      <div className="quiz-start">
        <div className="quiz-start-card">
          <div className="quiz-start-icon">🧠</div>
          <h1>サステナクイズ</h1>
          <p className="quiz-start-desc">
            ESG・GX・脱炭素・エネルギー政策など、サステナビリティ分野の知識を問う4択クイズです。
          </p>
          <div className="quiz-info-grid">
            <div className="quiz-info-item">
              <span className="quiz-info-num">200</span>
              <span className="quiz-info-label">総問題数</span>
            </div>
            <div className="quiz-info-item">
              <span className="quiz-info-num">30</span>
              <span className="quiz-info-label">出題数</span>
            </div>
            <div className="quiz-info-item">
              <span className="quiz-info-num">4択</span>
              <span className="quiz-info-label">形式</span>
            </div>
            <div className="quiz-info-item">
              <span className="quiz-info-num">解説</span>
              <span className="quiz-info-label">付き</span>
            </div>
          </div>
          <button className="btn-primary btn-large" onClick={startQuiz}>
            クイズを始める
          </button>
          <div className="chapter-list">
            <p className="chapter-list-title">出題範囲</p>
            {['脱炭素化の背景とGXの概念', '脱炭素政策の枠組み', '世界の動向', '日本政府の動向', '企業の取組', '脱炭素技術とイノベーション'].map((c, i) => (
              <div key={i} className="chapter-item">
                <span className="chapter-num">第{i + 1}章</span>
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (state === 'result') {
    return (
      <div className="quiz-result">
        <div className="result-card">
          <h2>クイズ完了！</h2>
          <div className="score-display">
            <span className="score-num">{score}</span>
            <span className="score-pct">%</span>
          </div>
          <p className="score-detail">{QUIZ_COUNT}問中 <strong>{correctCount}問</strong> 正解</p>
          <p className="score-msg">
            {score >= 80 ? '🎉 素晴らしい！合格圏内です！' :
             score >= 60 ? '💪 もう少し！あと一息です' :
             '📚 復習して再チャレンジしましょう！'}
          </p>
          <div className="result-btns">
            <button className="btn-primary" onClick={() => setState('review')}>
              正誤表を見る
            </button>
            <button className="btn-secondary" onClick={startQuiz}>
              もう一度チャレンジ
            </button>
            <button className="btn-ghost" onClick={() => setState('start')}>
              トップに戻る
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (state === 'review') {
    return (
      <div className="quiz-review">
        <div className="review-header">
          <button className="back-btn" onClick={() => setState('result')}>← 結果に戻る</button>
          <h2>正誤表</h2>
          <span className="review-score">{score}%</span>
        </div>
        <div className="review-summary">
          {QUIZ_COUNT}問中 <strong>{correctCount}問</strong> 正解（正答率 <strong>{score}%</strong>）
        </div>
        <div className="review-list">
          {quizQuestions.map((q, i) => {
            const userAns = answers[i]
            const isCorrect = userAns === q.correctIndex
            return (
              <div key={q.id} className={`review-item ${isCorrect ? 'correct' : 'wrong'}`}>
                <div className="review-item-header">
                  <span className={`review-badge ${isCorrect ? 'badge-correct' : 'badge-wrong'}`}>
                    {isCorrect ? '○' : '✗'}
                  </span>
                  <span className="review-qnum">問題 {i + 1}</span>
                  <span className="review-chapter">第{q.chapter}章</span>
                </div>
                <p className="review-question">{q.question}</p>
                <div className="review-answers">
                  <div className="review-answer">
                    <span className="answer-label">あなたの回答：</span>
                    <span className={`answer-text ${isCorrect ? 'text-correct' : 'text-wrong'}`}>
                      {userAns !== null ? q.choices[userAns] : '未回答'}
                    </span>
                  </div>
                  {!isCorrect && (
                    <div className="review-answer">
                      <span className="answer-label">正解：</span>
                      <span className="answer-text text-correct">{q.choices[q.correctIndex]}</span>
                    </div>
                  )}
                </div>
                <div className="review-explanation">
                  <span className="explanation-label">解説</span>
                  <p>{q.explanation}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  // Playing state
  const current = quizQuestions[currentIndex]
  if (!current) return null

  return (
    <div className="quiz-playing">
      {/* Progress */}
      <div className="quiz-progress">
        <div className="progress-info">
          <span>{currentIndex + 1} / {QUIZ_COUNT}</span>
          <span className="correct-count">✓ {correctCount}</span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${((currentIndex + 1) / QUIZ_COUNT) * 100}%` }}
          />
        </div>
      </div>

      <div className="quiz-content">
        {/* Chapter badge */}
        <div className="chapter-badge">第{current.chapter}章 {current.chapterName}</div>

        {/* Question */}
        <div className="question-card">
          <p className="question-num">問題 {currentIndex + 1}</p>
          <p className="question-text">{current.question}</p>
        </div>

        {/* Choices */}
        <div className="choices">
          {current.choices.map((choice, idx) => {
            let cls = 'choice-btn'
            if (showFeedback) {
              if (idx === current.correctIndex) cls += ' choice-correct'
              else if (idx === selectedIndex) cls += ' choice-wrong'
              else cls += ' choice-dim'
            }
            return (
              <button
                key={idx}
                className={cls}
                onClick={() => handleSelect(idx)}
                disabled={showFeedback}
              >
                <span className="choice-label">{['A', 'B', 'C', 'D'][idx]}</span>
                <span className="choice-text">{choice}</span>
              </button>
            )
          })}
        </div>

        {/* Feedback */}
        {showFeedback && (
          <div className={`explanation-card ${selectedIndex === current.correctIndex ? 'exp-correct' : 'exp-wrong'}`}>
            <p className="exp-label">
              {selectedIndex === current.correctIndex ? '✓ 正解！' : '✗ 不正解'}
            </p>
            <p className="exp-text">{current.explanation}</p>
          </div>
        )}

        {showFeedback && (
          <button className="btn-primary btn-next" onClick={handleNext}>
            {currentIndex < QUIZ_COUNT - 1 ? '次の問題へ →' : '結果を見る'}
          </button>
        )}
      </div>
    </div>
  )
}
