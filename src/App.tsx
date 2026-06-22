import { useState, useEffect } from 'react'
import { QuizPage } from './pages/QuizPage'
import { VocabPage } from './pages/VocabPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { TermsPage } from './pages/TermsPage'
import { ContactPage } from './pages/ContactPage'
import { ArticlesPage } from './pages/ArticlesPage'
import './App.css'

type Page = 'home' | 'quiz' | 'vocab' | 'articles' | 'privacy' | 'terms' | 'contact'

export default function App() {
  const [page, setPage] = useState<Page>('home')

  // ページ遷移時にトップへスクロール
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [page])

  const goHome = () => setPage('home')

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <button className="logo-btn" onClick={goHome}>
            <span className="logo-icon">🌱</span>
            <span className="logo-text">サステナUP</span>
          </button>
          <nav className="nav">
            <button className={`nav-btn ${page === 'quiz' ? 'active' : ''}`} onClick={() => setPage('quiz')}>
              🧠 クイズ
            </button>
            <button className={`nav-btn ${page === 'vocab' ? 'active' : ''}`} onClick={() => setPage('vocab')}>
              📖 単語集
            </button>
            <button className={`nav-btn ${page === 'articles' ? 'active' : ''}`} onClick={() => setPage('articles')}>
              📰 記事
            </button>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="main">
        {page === 'home'    && <HomePage onNavigate={setPage} />}
        {page === 'quiz'    && <QuizPage />}
        {page === 'vocab'   && <VocabPage />}
        {page === 'privacy' && <PrivacyPage onBack={goHome} />}
        {page === 'terms'   && <TermsPage onBack={goHome} />}
        {page === 'contact' && <ContactPage onBack={goHome} />}
        {page === 'articles' && <ArticlesPage />}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <button className="footer-link-btn" onClick={() => setPage('privacy')}>プライバシーポリシー</button>
          <span className="footer-sep">|</span>
          <button className="footer-link-btn" onClick={() => setPage('terms')}>利用規約</button>
          <span className="footer-sep">|</span>
          <button className="footer-link-btn" onClick={() => setPage('contact')}>お問い合わせ</button>
        </div>
        <p className="footer-copy">© 2026 合同会社はしわたし</p>
        <p className="footer-ad-note">※ 広告掲載あり。掲載内容は各サービスにてご確認ください。</p>
      </footer>
    </div>
  )
}

function HomePage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">サステナビリティ学習</div>
          <h1 className="hero-title">
            ESG・GX・脱炭素の<br />
            <span className="hero-accent">知識を身につけよう</span>
          </h1>
          <p className="hero-desc">
            サステナビリティ転職・キャリアアップを目指す方のための学習サイト。
            200問のクイズと110語の単語集で、スキマ時間に効率よく学べます。
          </p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => onNavigate('quiz')}>
              🧠 サステナクイズを始める
            </button>
            <button className="btn-secondary" onClick={() => onNavigate('vocab')}>
              📖 単語集を見る
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663281366109/GcMNrE6ZnKGZYmBQ8uge8M/v5-dragon-1-UYDuvEKVmbAEq74Wii4CQD.png"
            alt="サステナUP キャラクター"
            className="hero-egg"
          />
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <h2 className="section-title">主な機能</h2>
        <div className="features-grid">
          <div className="feature-card" onClick={() => onNavigate('quiz')}>
            <div className="feature-icon">🧠</div>
            <h3>サステナクイズ</h3>
            <p>GX検定ベーシックのシラバスに基づいた<strong>200問</strong>を収録。毎回30問がランダムで出題。解答後は詳しい解説付き。</p>
            <div className="feature-stats">
              <span className="stat-chip">200問収録</span>
              <span className="stat-chip">30問出題</span>
              <span className="stat-chip">4択形式</span>
            </div>
            <button className="feature-btn">クイズを始める →</button>
          </div>
          <div className="feature-card" onClick={() => onNavigate('vocab')}>
            <div className="feature-icon">📖</div>
            <h3>単語集・単語クイズ</h3>
            <p>カーボンニュートラル・Scope3・TCFD・SBTなど<strong>110語</strong>を7カテゴリで整理。単語クイズで理解度チェックも。</p>
            <div className="feature-stats">
              <span className="stat-chip">110語収録</span>
              <span className="stat-chip">7カテゴリ</span>
              <span className="stat-chip">単語クイズあり</span>
            </div>
            <button className="feature-btn">単語集を見る →</button>
          </div>
        </div>
      </section>

      {/* GX検定誘導バナー */}
      <section className="ad-section">
        <a
          href="https://green-transformation.jp/gx_certification/basic/"
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="gx-ad-banner"
          style={{ borderColor: '#90CAF9', backgroundColor: '#E3F2FD' }}
        >
          <span className="ad-label">広告</span>
          <span className="gx-ad-highlight">環境省認定資格</span>
          <span className="ad-emoji">📜</span>
          <div className="gx-ad-text">
            <span className="gx-ad-title" style={{ color: '#1565C0' }}>GX検定ベーシック｜公式試験で実力を証明</span>
            <span className="gx-ad-desc">転職・キャリアアップに直結する公式資格。オンライン受験対応。</span>
          </div>
          <span className="gx-ad-cta" style={{ backgroundColor: '#1565C0' }}>公式サイトを見る →</span>
        </a>
      </section>

      {/* Coverage */}
      <section className="coverage">
        <h2 className="section-title">出題範囲</h2>
        <div className="coverage-grid">
          {[
            { emoji: '🌡', title: '第1章', desc: '脱炭素化の背景とGXの概念' },
            { emoji: '📋', title: '第2章', desc: '脱炭素政策の枠組み' },
            { emoji: '🌍', title: '第3章', desc: '世界の動向' },
            { emoji: '🏛', title: '第4章', desc: '日本政府の動向' },
            { emoji: '🏢', title: '第5章', desc: '企業の取組' },
            { emoji: '⚡', title: '第6章', desc: '脱炭素技術とイノベーション' },
          ].map((item) => (
            <div key={item.title} className="coverage-item">
              <span className="coverage-emoji">{item.emoji}</span>
              <div>
                <div className="coverage-chapter">{item.title}</div>
                <div className="coverage-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 求人広告 */}
      <section className="ad-section">
        <h2 className="section-title">サステナビリティ転職</h2>
        <div className="job-ads-grid">
          {[
            { name: 'Green Work Japan', tag: 'ESG・GX転職', desc: '環境・GX・再エネ分野に特化した転職サイト。', url: 'https://www.green-work.jp', color: '#2E7D32', bg: '#E8F5E9', border: '#A5D6A7', emoji: '🌿' },
            { name: 'LinkedIn', tag: 'グローバル転職', desc: 'Sustainability職種のグローバル求人が充実。', url: 'https://www.linkedin.com/jobs/sustainability-jobs/', color: '#0077B5', bg: '#E3F2FD', border: '#90CAF9', emoji: '🌐' },
            { name: 'ビズリーチ', tag: 'ハイクラス転職', desc: 'ESG推進部長・GX戦略マネージャーなど幹部職。', url: 'https://www.bizreach.jp', color: '#6A1B9A', bg: '#F3E5F5', border: '#CE93D8', emoji: '⭐' },
          ].map(ad => (
            <a key={ad.name} href={ad.url} target="_blank" rel="noopener noreferrer sponsored"
              className="job-ad-item" style={{ borderColor: ad.border, backgroundColor: ad.bg }}>
              <div className="job-ad-top">
                <span className="ad-label">広告</span>
                <span className="ad-tag" style={{ backgroundColor: ad.color + '20', color: ad.color }}>{ad.tag}</span>
              </div>
              <div className="job-ad-body">
                <span style={{ fontSize: 22 }}>{ad.emoji}</span>
                <div>
                  <p className="job-ad-name" style={{ color: ad.color }}>{ad.name}</p>
                  <p className="job-ad-desc">{ad.desc}</p>
                </div>
              </div>
              <p className="job-ad-cta" style={{ color: ad.color }}>求人を見る →</p>
            </a>
          ))}
        </div>
      </section>

      {/* App Download */}
      <section className="app-section">
        <div className="app-card">
          <div className="app-card-content">
            <h2>スマホアプリも近日公開予定！</h2>
            <p>キャラクター育成・プッシュ通知・時事情報など、より多くの機能を搭載したiOS/Androidアプリを準備中です。</p>
            <div className="app-badges">
              <div className="app-badge-placeholder">🍎 App Store（準備中）</div>
              <div className="app-badge-placeholder">🤖 Google Play（準備中）</div>
            </div>
          </div>
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663281366109/GcMNrE6ZnKGZYmBQ8uge8M/v5-dragon-4-BFbbahD3C6h2wBvVwVW7Bj.png"
            alt="キャラクター" className="app-char"
          />
        </div>
      </section>
    </div>
  )
}
