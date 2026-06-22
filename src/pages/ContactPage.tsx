import { useState } from 'react'

type ContactCategory =
  | '問題・解説の誤りについて'
  | '単語・定義の誤りについて'
  | '機能・操作について'
  | '広告・掲載について'
  | 'その他'

const CATEGORIES: ContactCategory[] = [
  '問題・解説の誤りについて',
  '単語・定義の誤りについて',
  '機能・操作について',
  '広告・掲載について',
  'その他',
]

export function ContactPage({ onBack }: { onBack: () => void }) {
  const [sent, setSent] = useState(false)
  const [category, setCategory] = useState<ContactCategory | ''>('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (!category) e.category = 'お問い合わせ種別を選択してください'
    if (!name.trim()) e.name = 'お名前を入力してください'
    if (!email.trim()) e.email = 'メールアドレスを入力してください'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'メールアドレスの形式が正しくありません'
    if (!message.trim()) e.message = 'お問い合わせ内容を入力してください'
    else if (message.trim().length < 10) e.message = '10文字以上入力してください'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    // HubSpot フォームへリダイレクト（実際の送信先）
    const params = new URLSearchParams({
      subject: `[サステナUP] ${category}`,
      body: `お名前：${name}\nメール：${email}\n種別：${category}\n\n${message}`,
    })
    window.open(`https://42jepo.share-na2.hsforms.com?${params.toString()}`, '_blank')
    setSent(true)
  }

  if (sent) {
    return (
      <div className="legal-page">
        <div className="legal-header">
          <button className="legal-back" onClick={onBack}>← 戻る</button>
          <h1 className="legal-title">お問い合わせ</h1>
        </div>
        <div className="contact-sent">
          <div className="contact-sent-icon">✅</div>
          <h2>送信が完了しました</h2>
          <p>お問い合わせいただきありがとうございます。</p>
          <p>内容を確認のうえ、3〜5営業日以内にご登録のメールアドレスへご返信いたします。</p>
          <button className="btn-primary" onClick={onBack} style={{ marginTop: 24 }}>
            トップに戻る
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="legal-page">
      <div className="legal-header">
        <button className="legal-back" onClick={onBack}>← 戻る</button>
        <h1 className="legal-title">お問い合わせ</h1>
      </div>

      <div className="legal-body">
        <p className="legal-lead">
          サステナUPに関するご質問・ご意見・誤り報告などは、以下のフォームよりお送りください。
          3〜5営業日以内にご返信いたします。
        </p>

        {/* よくある質問 */}
        <section className="faq-section">
          <h2 className="faq-title">よくあるご質問</h2>
          <div className="faq-list">
            {[
              {
                q: '問題や解説に誤りを見つけました',
                a: '大変申し訳ございません。「問題・解説の誤りについて」を選択のうえ、問題番号と誤りの内容をお知らせください。確認後、速やかに修正いたします。',
              },
              {
                q: 'スマホアプリはいつ公開されますか？',
                a: 'iOS・Androidアプリを準備中です。公開時期が決まり次第、本サイトおよびSNSでお知らせいたします。',
              },
              {
                q: '学習データが消えてしまいました',
                a: '学習データはお使いのブラウザのローカルストレージに保存されています。ブラウザのキャッシュ削除やプライベートモードでのご利用により消去される場合があります。現時点ではデータのバックアップ機能はございません。',
              },
              {
                q: '広告掲載・タイアップについて',
                a: 'サステナビリティ・ESG・GX関連のサービスや求人広告の掲載をご希望の場合は、「広告・掲載について」よりお問い合わせください。',
              },
            ].map((item, i) => (
              <details key={i} className="faq-item">
                <summary className="faq-q">{item.q}</summary>
                <p className="faq-a">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* お問い合わせフォーム */}
        <section className="contact-form-section">
          <h2>お問い合わせフォーム</h2>
          <form className="contact-form" onSubmit={handleSubmit} noValidate>

            <div className="form-group">
              <label className="form-label">
                お問い合わせ種別 <span className="form-required">必須</span>
              </label>
              <select
                className={`form-select ${errors.category ? 'error' : ''}`}
                value={category}
                onChange={e => { setCategory(e.target.value as ContactCategory); setErrors(prev => ({ ...prev, category: '' })) }}
              >
                <option value="">選択してください</option>
                {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              {errors.category && <p className="form-error">{errors.category}</p>}
            </div>

            <div className="form-group">
              <label className="form-label">
                お名前 <span className="form-required">必須</span>
              </label>
              <input
                type="text"
                className={`form-input ${errors.name ? 'error' : ''}`}
                placeholder="山田 太郎"
                value={name}
                onChange={e => { setName(e.target.value); setErrors(prev => ({ ...prev, name: '' })) }}
              />
              {errors.name && <p className="form-error">{errors.name}</p>}
            </div>

            <div className="form-group">
              <label className="form-label">
                メールアドレス <span className="form-required">必須</span>
              </label>
              <input
                type="email"
                className={`form-input ${errors.email ? 'error' : ''}`}
                placeholder="example@email.com"
                value={email}
                onChange={e => { setEmail(e.target.value); setErrors(prev => ({ ...prev, email: '' })) }}
              />
              {errors.email && <p className="form-error">{errors.email}</p>}
            </div>

            <div className="form-group">
              <label className="form-label">
                お問い合わせ内容 <span className="form-required">必須</span>
              </label>
              <textarea
                className={`form-textarea ${errors.message ? 'error' : ''}`}
                placeholder="お問い合わせ内容をご記入ください。問題・解説の誤りの場合は、問題番号と誤りの内容をお知らせください。"
                rows={6}
                value={message}
                onChange={e => { setMessage(e.target.value); setErrors(prev => ({ ...prev, message: '' })) }}
              />
              <p className="form-hint">{message.length} 文字</p>
              {errors.message && <p className="form-error">{errors.message}</p>}
            </div>

            <div className="form-privacy-note">
              <p>
                送信いただいた情報は、お問い合わせへの対応のみに使用します。
                詳しくは<button type="button" className="link-btn" onClick={() => window.open('https://www.notion.so/35a4a94872a8804e9c07d4765b149c4e', '_blank')}>プライバシーポリシー</button>をご確認ください。
              </p>
            </div>

            <button type="submit" className="btn-primary btn-submit">
              送信する
            </button>
          </form>
        </section>

        {/* 直接連絡先 */}
        <div className="legal-contact-box">
          <p><strong>合同会社はしわたし</strong>　「サステナUP」アプリ事務局</p>
        </div>
      </div>
    </div>
  )
}
