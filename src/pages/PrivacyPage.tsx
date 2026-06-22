export function PrivacyPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="legal-page">
      <div className="legal-header">
        <button className="legal-back" onClick={onBack}>← 戻る</button>
        <h1 className="legal-title">プライバシーポリシー</h1>
      </div>

      <div className="legal-body">
        <p className="legal-updated">最終更新日：2025年6月22日</p>

        <p className="legal-lead">
          合同会社はしわたし（以下「当社」といいます）は、サステナUP（以下「本サービス」といいます）における
          ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシーを定めます。
        </p>

        <section className="legal-section">
          <h2>第1条（取得する情報）</h2>
          <p>当社は、本サービスの提供にあたり、以下の情報を取得する場合があります。</p>
          <ul>
            <li>お問い合わせ時にご入力いただいたメールアドレス・氏名またはニックネーム・お問い合わせ内容</li>
            <li>不具合報告時の端末機種名およびOS情報</li>
            <li>本サービス利用時のアクセスログ（IPアドレス、ブラウザ種別、参照元URL等）</li>
          </ul>
          <p>
            なお、本サービスのクイズ・学習データはすべてお客様の端末内（ローカルストレージ）に保存されており、
            当社のサーバーには送信・保存されません。
          </p>
        </section>

        <section className="legal-section">
          <h2>第2条（利用目的）</h2>
          <p>取得した個人情報は、以下の目的のみに利用します。</p>
          <ul>
            <li>お問い合わせへの回答および本人確認</li>
            <li>本サービスの不具合改善およびサービス向上のための分析</li>
            <li>利用規約違反行為の調査および対応</li>
            <li>重要なお知らせ等のご連絡</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>第3条（第三者提供）</h2>
          <p>
            当社は、以下の場合を除き、ユーザーの同意なく個人情報を第三者に提供することはありません。
          </p>
          <ul>
            <li>法令に基づき開示が必要な場合</li>
            <li>人の生命・身体・財産の保護のために必要な場合</li>
            <li>公衆衛生の向上または児童の健全育成のために必要な場合</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>第4条（広告について）</h2>
          <p>
            本サービスでは、第三者配信の広告サービスを利用しています。広告配信事業者は、
            ユーザーの興味に応じた広告を表示するためにCookieを使用することがあります。
            Cookieを無効にする設定はお使いのブラウザで行うことができます。
          </p>
          <p>
            掲載されている広告のリンク先サービスのご利用は、各サービスの利用規約・
            プライバシーポリシーに従うものとします。
          </p>
        </section>

        <section className="legal-section">
          <h2>第5条（アクセス解析）</h2>
          <p>
            本サービスでは、サービス改善のためにアクセス解析ツールを使用することがあります。
            アクセス解析ツールはCookieを使用してデータを収集しますが、個人を特定する情報は含みません。
          </p>
        </section>

        <section className="legal-section">
          <h2>第6条（安全管理）</h2>
          <p>
            当社は、取得した個人情報の漏洩・滅失・毀損の防止その他個人情報の安全管理のために、
            必要かつ適切な措置を講じます。
          </p>
        </section>

        <section className="legal-section">
          <h2>第7条（開示・訂正・削除）</h2>
          <p>
            ユーザーは、当社が保有する自己の個人情報について、開示・訂正・削除を求めることができます。
            ご要望の場合は、下記お問い合わせ窓口までご連絡ください。
            合理的な範囲で速やかに対応いたします。
          </p>
        </section>

        <section className="legal-section">
          <h2>第8条（プライバシーポリシーの変更）</h2>
          <p>
            本ポリシーは、法令の改正やサービス内容の変更等に伴い、予告なく変更することがあります。
            変更後のプライバシーポリシーは、本サービス上に掲載した時点から効力を生じるものとします。
          </p>
        </section>

        <section className="legal-section">
          <h2>第9条（お問い合わせ窓口）</h2>
          <p>本ポリシーに関するお問い合わせは、以下までご連絡ください。</p>
          <div className="legal-contact-box">
            <p><strong>合同会社はしわたし</strong></p>
            <p>「サステナUP」アプリ事務局</p>
            <p>
              お問い合わせフォーム：
              <a href="https://42jepo.share-na2.hsforms.com" target="_blank" rel="noopener noreferrer">
                https://42jepo.share-na2.hsforms.com
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
