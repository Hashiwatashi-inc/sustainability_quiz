/**
 * 広告バナーコンポーネント
 *
 * DSP（Demand-Side Platform）広告枠の実装。
 * 現在はプレースホルダーとして直接リンク広告を表示。
 *
 * 本番DSP導入時の手順：
 * 1. Google Ad Manager / Yahoo! DSP / MicroAd BLADE 等に登録
 * 2. 広告タグ（<script>）を取得
 * 3. このコンポーネントのプレースホルダー部分をDSPタグに置き換える
 * 4. 広告枠サイズ：728×90（レクタングル）/ 300×250（ミディアムレクタングル）
 */

import { useState, useEffect } from 'react'

// ===== 求人広告データ =====
const JOB_ADS = [
  {
    id: 'green-work',
    label: 'PR',
    title: 'サステナビリティ・ESG求人特集',
    body: '環境・GX・再エネ分野に特化した転職サイト。ESG推進・脱炭素コンサルなど注目ポジション多数掲載中。',
    cta: '求人を見る →',
    url: 'https://www.green-work.jp',
    color: '#2E7D32',
    bgColor: '#E8F5E9',
    borderColor: '#A5D6A7',
    emoji: '🌿',
    tag: 'ESG・GX転職',
  },
  {
    id: 'linkedin',
    label: 'PR',
    title: 'LinkedIn｜Sustainability職種を探す',
    body: 'グローバル企業のSustainability Manager・ESG Analyst・Carbon Specialist求人が充実。外資系転職に強い。',
    cta: 'LinkedIn求人を見る →',
    url: 'https://www.linkedin.com/jobs/sustainability-jobs/',
    color: '#0077B5',
    bgColor: '#E3F2FD',
    borderColor: '#90CAF9',
    emoji: '🌐',
    tag: 'グローバル転職',
  },
  {
    id: 'bizreach',
    label: 'PR',
    title: 'ビズリーチ｜ESG・GX幹部職特集',
    body: 'ESG推進部長・サステナビリティ責任者・GX戦略マネージャーなどハイクラス求人。年収500万円以上対象。',
    cta: 'ハイクラス求人を見る →',
    url: 'https://www.bizreach.jp',
    color: '#6A1B9A',
    bgColor: '#F3E5F5',
    borderColor: '#CE93D8',
    emoji: '⭐',
    tag: 'ハイクラス転職',
  },
]

// ===== GX検定広告データ =====
const GX_AD = {
  id: 'gx-kentei',
  label: 'PR',
  title: 'GX検定ベーシック｜公式試験で実力を証明',
  body: '環境省認定「脱炭素アドバイザー ベーシック」資格。転職・キャリアアップに直結する公式資格を取得しよう。',
  cta: '公式サイトで詳細を見る →',
  url: 'https://green-transformation.jp/gx_certification/basic/',
  color: '#1565C0',
  bgColor: '#E3F2FD',
  borderColor: '#90CAF9',
  emoji: '📜',
  tag: 'GX検定公式',
  highlight: '環境省認定資格',
}

// ===== バナー広告（横長・ヘッダー下など） =====
export function JobAdBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % JOB_ADS.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  const ad = JOB_ADS[currentIndex]

  return (
    <div className="ad-banner-wrap">
      <a
        href={ad.url}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="ad-banner-horizontal"
        style={{ borderColor: ad.borderColor, backgroundColor: ad.bgColor }}
      >
        <div className="ad-banner-left">
          <span className="ad-label">広告</span>
          <span className="ad-tag" style={{ backgroundColor: ad.color + '20', color: ad.color }}>{ad.tag}</span>
        </div>
        <div className="ad-banner-body">
          <span className="ad-emoji">{ad.emoji}</span>
          <div className="ad-text">
            <span className="ad-title" style={{ color: ad.color }}>{ad.title}</span>
            <span className="ad-desc">{ad.body}</span>
          </div>
        </div>
        <div className="ad-cta" style={{ color: ad.color }}>{ad.cta}</div>
      </a>
      <div className="ad-dots">
        {JOB_ADS.map((_, i) => (
          <button
            key={i}
            className={`ad-dot ${i === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(i)}
            aria-label={`広告${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

// ===== カード型求人広告（サイドバー・コンテンツ内） =====
export function JobAdCard() {
  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(Math.random() * JOB_ADS.length)
  )
  const ad = JOB_ADS[currentIndex]

  return (
    <div className="ad-card-wrap">
      <div className="ad-card-header">
        <span className="ad-label">広告</span>
        <span className="ad-card-title-small">サステナビリティ転職</span>
      </div>
      <a
        href={ad.url}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="ad-card"
        style={{ borderColor: ad.borderColor, backgroundColor: ad.bgColor }}
      >
        <div className="ad-card-top">
          <span className="ad-card-emoji">{ad.emoji}</span>
          <div className="ad-card-info">
            <span className="ad-card-name" style={{ color: ad.color }}>{ad.title}</span>
            <span className="ad-tag-sm" style={{ backgroundColor: ad.color + '20', color: ad.color }}>{ad.tag}</span>
          </div>
        </div>
        <p className="ad-card-body">{ad.body}</p>
        <div className="ad-card-cta" style={{ backgroundColor: ad.color }}>
          {ad.cta}
        </div>
      </a>
      <div className="ad-card-nav">
        {JOB_ADS.map((j, i) => (
          <button
            key={i}
            className={`ad-dot ${i === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(i)}
            aria-label={j.title}
          />
        ))}
      </div>
    </div>
  )
}

// ===== GX検定誘導広告 =====
export function GxKenteiAd({ variant = 'card' }: { variant?: 'card' | 'banner' }) {
  const ad = GX_AD

  if (variant === 'banner') {
    return (
      <a
        href={ad.url}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="gx-ad-banner"
        style={{ borderColor: ad.borderColor, backgroundColor: ad.bgColor }}
      >
        <span className="ad-label">広告</span>
        <span className="gx-ad-highlight">{ad.highlight}</span>
        <span className="ad-emoji">{ad.emoji}</span>
        <div className="gx-ad-text">
          <span className="gx-ad-title" style={{ color: ad.color }}>{ad.title}</span>
          <span className="gx-ad-desc">{ad.body}</span>
        </div>
        <span className="gx-ad-cta" style={{ backgroundColor: ad.color }}>{ad.cta}</span>
      </a>
    )
  }

  return (
    <div className="gx-ad-card-wrap">
      <div className="ad-card-header">
        <span className="ad-label">広告</span>
        <span className="ad-card-title-small">資格取得</span>
      </div>
      <a
        href={ad.url}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="gx-ad-card"
        style={{ borderColor: ad.borderColor, backgroundColor: ad.bgColor }}
      >
        <div className="gx-ad-badge" style={{ backgroundColor: ad.color }}>
          {ad.highlight}
        </div>
        <div className="gx-ad-card-top">
          <span className="gx-ad-emoji">{ad.emoji}</span>
          <span className="gx-ad-card-title" style={{ color: ad.color }}>{ad.title}</span>
        </div>
        <p className="gx-ad-card-body">{ad.body}</p>
        <div className="gx-ad-card-points">
          {['転職書類でアピール可能', '環境省認定の公式資格', 'オンライン受験対応'].map(p => (
            <div key={p} className="gx-point">
              <span className="gx-point-check" style={{ color: ad.color }}>✓</span>
              <span>{p}</span>
            </div>
          ))}
        </div>
        <div className="gx-ad-card-cta" style={{ backgroundColor: ad.color }}>
          {ad.cta}
        </div>
      </a>
    </div>
  )
}
