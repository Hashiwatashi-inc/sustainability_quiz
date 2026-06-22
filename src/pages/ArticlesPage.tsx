import { useState, useRef } from 'react'
import { articles, ARTICLE_CATEGORIES, getArticlesByCategory, type Article, type ArticleCategory, type ArticleSection } from '../data/articles'

export function ArticlesPage() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<ArticleCategory | 'すべて'>('すべて')

  const filteredArticles = selectedCategory === 'すべて'
    ? articles
    : getArticlesByCategory(selectedCategory)

  if (selectedArticle) {
    return (
      <ArticleDetail
        article={selectedArticle}
        onBack={() => setSelectedArticle(null)}
      />
    )
  }

  return (
    <div className="articles-page">
      {/* Header */}
      <div className="articles-header">
        <h1 className="articles-title">Articles</h1>
        <p className="articles-subtitle">SDGs・サステナビリティ・GXの最新情報</p>
      </div>

      {/* Category Filter */}
      <div className="articles-cat-scroll">
        {(['すべて', ...ARTICLE_CATEGORIES] as const).map(cat => (
          <button
            key={cat}
            className={`articles-cat-chip ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Article List */}
      <div className="articles-list">
        {filteredArticles.map(article => (
          <button
            key={article.id}
            className="article-card"
            onClick={() => setSelectedArticle(article)}
          >
            <div className="article-card-top">
              <span className="article-cat-badge">{article.category}</span>
              <span className="article-date">{article.publishedAt}</span>
            </div>
            <h2 className="article-card-title">{article.title}</h2>
            <p className="article-card-desc">{article.metaDescription}</p>
            <div className="article-card-footer">
              <span className="article-reading">📖 {article.readingMinutes}分で読める</span>
              <div className="article-tags">
                {article.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="article-tag">#{tag}</span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

// ===== 記事詳細ページ（スワイプで戻る対応） =====
function ArticleDetail({ article, onBack }: { article: Article; onBack: () => void }) {
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    const dy = Math.abs(e.changedTouches[0].clientY - touchStartY.current)
    // 右スワイプ（dx > 60）かつ縦方向の動きが小さい場合に戻る
    if (dx > 60 && dy < 40) {
      onBack()
    }
    touchStartX.current = null
    touchStartY.current = null
  }

  return (
    <div
      className="article-detail"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Header */}
      <div className="article-detail-header">
        <button className="article-back-btn" onClick={onBack}>
          ← 記事一覧
        </button>
        <span className="article-swipe-hint">← スワイプで戻る</span>
      </div>

      <div className="article-detail-body">
        {/* Meta */}
        <div className="article-detail-meta">
          <span className="article-cat-badge">{article.category}</span>
          <span className="article-date">{article.publishedAt}</span>
          <span className="article-reading">📖 {article.readingMinutes}分</span>
        </div>

        {/* Title */}
        <h1 className="article-detail-title">{article.title}</h1>

        {/* Tags */}
        <div className="article-detail-tags">
          {article.tags.map(tag => (
            <span key={tag} className="article-tag">#{tag}</span>
          ))}
        </div>

        {/* Content */}
        <div className="article-content">
          {article.content.map((section, i) => (
            <ArticleSectionRenderer key={i} section={section} />
          ))}
        </div>

        {/* References */}
        {article.references.length > 0 && (
          <div className="article-references">
            <h3 className="references-title">参考資料・出典</h3>
            <ol className="references-list">
              {article.references.map(ref => (
                <li key={ref.id} className="reference-item">
                  <a href={ref.url} target="_blank" rel="noopener noreferrer" className="reference-link">
                    {ref.title}
                  </a>
                  <span className="reference-publisher">（{ref.publisher}）</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Back button */}
        <button className="article-back-btn-bottom" onClick={onBack}>
          ← 記事一覧に戻る
        </button>
      </div>
    </div>
  )
}

function ArticleSectionRenderer({ section }: { section: ArticleSection }) {
  switch (section.type) {
    case 'paragraph':
      return <p className="article-paragraph">{section.text}</p>

    case 'heading2':
      return <h2 className="article-h2">{section.text}</h2>

    case 'heading3':
      return <h3 className="article-h3">{section.text}</h3>

    case 'list':
      return (
        <ul className="article-list">
          {section.items?.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      )

    case 'blockquote':
      return (
        <blockquote className="article-blockquote">
          <p>{section.text}</p>
          {section.source && (
            <footer>
              {section.sourceUrl
                ? <a href={section.sourceUrl} target="_blank" rel="noopener noreferrer">— {section.source}</a>
                : <span>— {section.source}</span>
              }
            </footer>
          )}
        </blockquote>
      )

    case 'highlight':
      return (
        <div className="article-highlight">
          <p>{section.text}</p>
        </div>
      )

    case 'table':
      return (
        <div className="article-table-wrap">
          <table className="article-table">
            {section.headers && (
              <thead>
                <tr>{section.headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
              </thead>
            )}
            <tbody>
              {section.rows?.map((row, i) => (
                <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      )

    default:
      return null
  }
}
