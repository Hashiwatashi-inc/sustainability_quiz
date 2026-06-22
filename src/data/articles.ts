export interface Article {
  id: string;
  slug: string;
  title: string;
  metaDescription: string;
  category: ArticleCategory;
  tags: string[];
  publishedAt: string;
  readingMinutes: number;
  content: ArticleSection[];
  references: Reference[];
}

export interface ArticleSection {
  type: 'paragraph' | 'heading2' | 'heading3' | 'table' | 'list' | 'blockquote' | 'highlight';
  text?: string;
  items?: string[];
  headers?: string[];
  rows?: string[][];
  source?: string;
  sourceUrl?: string;
}

export interface Reference {
  id: number;
  title: string;
  url: string;
  publisher: string;
}

export type ArticleCategory =
  | 'SDGs基礎知識'
  | 'SDGs各目標'
  | '企業動向'
  | '転職・キャリア';

export const ARTICLE_CATEGORIES: ArticleCategory[] = [
  'SDGs基礎知識',
  'SDGs各目標',
  '企業動向',
  '転職・キャリア',
];

export const articles: Article[] = [
  // ===== 記事1：SDGsの成り立ち =====
  {
    id: 'sdgs-history',
    slug: 'sdgs-history',
    title: 'SDGsの成り立ちと歴史｜MDGsから2030アジェンダへの道のり',
    metaDescription: 'SDGs（持続可能な開発目標）が誕生した経緯を解説。2000年のMDGs採択から2015年の国連サミットでの採択まで、17目標・169ターゲットが生まれた歴史的背景を詳しく紹介します。',
    category: 'SDGs基礎知識',
    tags: ['SDGs', 'MDGs', '国連', '2030アジェンダ', '持続可能な開発'],
    publishedAt: '2026-06-22',
    readingMinutes: 8,
    references: [
      { id: 1, title: 'SDGsとは？ | JAPAN SDGs Action Platform', url: 'https://www.mofa.go.jp/mofaj/gaiko/oda/SDGs/about/index.html', publisher: '外務省' },
      { id: 2, title: '2015：グローバルな行動のとき', url: 'https://www.unic.or.jp/activities/economic_social_development/sustainable_development/2030agenda/global_action/', publisher: '国連広報センター' },
      { id: 3, title: 'THE 17 GOALS', url: 'https://sdgs.un.org/goals', publisher: '国連（UN）' },
      { id: 4, title: 'SDGsってなんだろう？', url: 'https://www.unicef.or.jp/kodomo/sdgs/about/', publisher: '日本ユニセフ協会' },
    ],
    content: [
      { type: 'paragraph', text: 'SDGs（Sustainable Development Goals：持続可能な開発目標）は、2015年9月の国連サミットで193の加盟国が全会一致で採択した国際目標です。「誰一人取り残さない（Leave No One Behind）」を理念に掲げ、2030年までに達成すべき17の目標と169のターゲットから構成されています。' },
      { type: 'heading2', text: 'SDGsが生まれる前：MDGs（ミレニアム開発目標）の時代' },
      { type: 'paragraph', text: 'SDGsを理解するには、その前身であるMDGs（Millennium Development Goals：ミレニアム開発目標）を知ることが重要です。MDGsは2000年9月の国連ミレニアム・サミットで採択された「国連ミレニアム宣言」を基に策定され、2015年を達成期限とする8つの目標を掲げました。' },
      { type: 'list', items: [
        '極度の貧困と飢餓の撲滅',
        '初等教育の完全普及の達成',
        'ジェンダー平等推進と女性の地位向上',
        '乳幼児死亡率の削減',
        '妊産婦の健康の改善',
        'HIV/エイズ、マラリア、その他の疾病の蔓延防止',
        '環境の持続可能性確保',
        '開発のためのグローバルなパートナーシップの推進',
      ]},
      { type: 'paragraph', text: 'MDGsは主に途上国の貧困・保健・教育問題に焦点を当てており、一定の成果を上げました。しかし、先進国の課題や気候変動・不平等といった構造的問題には十分に対応できていないという批判もありました。' },
      { type: 'heading2', text: 'SDGs誕生のきっかけ：リオ+20（2012年）' },
      { type: 'paragraph', text: '2012年6月、ブラジルのリオデジャネイロで「国連持続可能な開発会議（リオ+20）」が開催されました。1992年の「地球サミット」から20年を記念したこの会議で、MDGsの後継となる新たな目標の枠組みとして「持続可能な開発目標（SDGs）」の概念が初めて提唱されました。' },
      { type: 'blockquote', text: '「我々は、持続可能な開発目標（SDGs）を設定することを決定する。これらの目標は、一貫性があり、統合されたものであるべきであり、持続可能な開発の三側面（経済・社会・環境）のバランスをとるものであるべきである。」', source: 'リオ+20成果文書「我々が望む未来（The Future We Want）」', sourceUrl: 'https://www.unic.or.jp/activities/economic_social_development/sustainable_development/2030agenda/global_action/' },
      { type: 'heading2', text: '3年間の交渉：オープン・ワーキング・グループ（OWG）' },
      { type: 'paragraph', text: 'リオ+20以降、国連は「持続可能な開発目標に関するオープン・ワーキング・グループ（OWG）」を設置し、2013年から2014年にかけて70カ国以上が参加する13回の会合を重ねました。市民社会、NGO、学術機関、民間セクターなど幅広いステークホルダーが参加したこの議論を経て、2014年7月に17の目標と169のターゲットからなる提案文書がまとめられました。' },
      { type: 'heading2', text: '2015年9月：歴史的な採択' },
      { type: 'paragraph', text: '2015年9月25日〜27日、ニューヨークの国連本部で「国連持続可能な開発サミット」が開催されました。150を超える加盟国首脳が参加したこのサミットで、「我々の世界を変革する：持続可能な開発のための2030アジェンダ」が全会一致で採択されました。' },
      { type: 'highlight', text: '採択日：2015年9月25日　参加国：193カ国（全会一致）　目標数：17目標・169ターゲット・232指標　達成期限：2030年' },
      { type: 'heading2', text: 'MDGsとSDGsの主な違い' },
      { type: 'table', headers: ['比較項目', 'MDGs（2000〜2015年）', 'SDGs（2015〜2030年）'], rows: [
        ['対象', '主に途上国', '先進国・途上国すべて'],
        ['目標数', '8目標・21ターゲット', '17目標・169ターゲット'],
        ['策定プロセス', '国連主導（トップダウン）', '多様なステークホルダー参加'],
        ['テーマ', '貧困・保健・教育が中心', '経済・社会・環境を統合'],
        ['民間セクターの役割', '限定的', '重要なパートナーとして位置づけ'],
      ]},
      { type: 'heading2', text: 'SDGsの特徴：「普遍性」「統合性」「包摂性」' },
      { type: 'paragraph', text: 'SDGsはMDGsと異なり、先進国・途上国を問わず「すべての国」が取り組む普遍的な目標です。また、経済・社会・環境の三側面を統合的に捉え、「誰一人取り残さない」という包摂性を基本原則としています。企業・自治体・個人など、あらゆるアクターが主体的に関与することが求められています。' },
      { type: 'heading2', text: '2030年に向けた現状' },
      { type: 'paragraph', text: '2023年の国連SDG進捗報告書によると、169のターゲットのうち順調に進んでいるのは15%程度にとどまり、約30%は停滞または後退しています。特に気候変動・生物多様性・格差拡大は深刻な状況です。残り7年間での「加速行動」が国際社会に求められています。' },
    ],
  },

  // ===== 記事2：企業のSDGs・サステナビリティ取り組み推移 =====
  {
    id: 'corporate-sdgs-trend',
    slug: 'corporate-sdgs-trend',
    title: '日本企業のSDGs・サステナビリティ取り組み推移｜2020〜2024年データ',
    metaDescription: '帝国データバンク調査をもとに、日本企業のSDGs・サステナビリティへの取り組み状況の推移を解説。2020年の24.4%から2024年の54.5%へと倍増した背景と、GX推進企業の動向を詳しく紹介します。',
    category: '企業動向',
    tags: ['SDGs', 'サステナビリティ', 'ESG', 'GX', '企業動向', '帝国データバンク'],
    publishedAt: '2026-06-22',
    readingMinutes: 7,
    references: [
      { id: 1, title: 'SDGsに関する企業の意識調査（2024年）', url: 'https://www.tdb.co.jp/report/economic/pq80w2xlnn/', publisher: '帝国データバンク' },
      { id: 2, title: 'GXリーグ参加企業一覧', url: 'https://gx-league.go.jp/aboutgxleague/member/', publisher: '経済産業省 GXリーグ' },
      { id: 3, title: 'GX Future Report 2025', url: 'https://www.gxa.go.jp/.assets/gx_future_report_2025.pdf', publisher: 'GX推進機構' },
      { id: 4, title: '第5節 GX（グリーン・トランスフォーメーション）', url: 'https://www.chusho.meti.go.jp/pamflet/hakusyo/2024/chusho/b1_4_5.html', publisher: '中小企業庁' },
      { id: 5, title: 'ESGへの取り組み、日本は世界ランク中位', url: 'https://prtimes.jp/main/html/rd/p/000000023.000126976.html', publisher: 'PR TIMES（2025年10月）' },
    ],
    content: [
      { type: 'paragraph', text: '日本企業のSDGs・サステナビリティへの取り組みは、2020年以降急速に拡大しています。帝国データバンクが毎年実施する「SDGsに関する企業の意識調査」によると、SDGsに積極的な企業の割合は2020年の24.4%から2024年には54.5%へと、わずか4年で倍増しました。' },
      { type: 'heading2', text: 'SDGsへの取り組み状況の推移（帝国データバンク調査）' },
      { type: 'table', headers: ['調査年', 'SDGsに積極的な企業割合', '前年比'], rows: [
        ['2020年', '24.4%', '—'],
        ['2021年', '39.7%', '+15.3pt'],
        ['2022年', '52.2%', '+12.5pt'],
        ['2023年', '53.6%', '+1.4pt'],
        ['2024年', '54.5%（過去最高）', '+0.9pt'],
      ]},
      { type: 'paragraph', text: '2024年6月の調査（全国2万7,159社対象、有効回答1万1,068社）では、「意味および重要性を理解し、取り組んでいる」企業が29.7%、「意味もしくは重要性を理解し、取り組みたいと思っている」企業が24.8%となり、合計54.5%が積極的な姿勢を示しました。', sourceUrl: 'https://www.tdb.co.jp/report/economic/pq80w2xlnn/' },
      { type: 'heading2', text: '取り組みが加速した背景' },
      { type: 'paragraph', text: '2021年以降に取り組み企業が急増した主な背景として、以下の要因が挙げられます。第一に、2021年の東京オリンピック・パラリンピックに向けたサステナビリティ意識の高まりです。第二に、2021年6月の東京証券取引所によるコーポレートガバナンス・コードの改訂で、プライム市場上場企業にTCFD（気候関連財務情報開示タスクフォース）に基づく情報開示が求められるようになりました。第三に、2022年のロシアによるウクライナ侵攻を契機としたエネルギー安全保障への関心の高まりです。' },
      { type: 'heading2', text: 'GX（グリーントランスフォーメーション）推進企業の動向' },
      { type: 'paragraph', text: '経済産業省が主導するGXリーグには、2023年度の発足時に約500社が参加し、2024年度には700社超に拡大しました。GXリーグは、2050年カーボンニュートラル実現に向けて自主的に排出量削減目標を設定し、カーボンクレジット取引に参加する企業の集まりです。' },
      { type: 'highlight', text: 'GXリーグ参加企業数：2023年度 約500社 → 2024年度 700社超（経済産業省）' },
      { type: 'heading2', text: '大企業と中小企業の取り組み格差' },
      { type: 'paragraph', text: '取り組みの積極性には企業規模による差があります。大企業では上場企業を中心にTCFD開示やSBT（科学的根拠に基づく目標）設定が進む一方、中小企業では「コスト負担」「専門人材の不足」「何から始めればよいかわからない」という課題が多く挙げられています。中小企業庁の2024年版中小企業白書によると、中小企業のGX取り組み率は大企業と比較して依然として低い水準にあります。' },
      { type: 'heading2', text: '注目される日本企業のサステナビリティ取り組み事例' },
      { type: 'table', headers: ['企業名', '主な取り組み', '目標・実績'], rows: [
        ['トヨタ自動車', 'カーボンニュートラル・水素社会実現', '2050年カーボンニュートラル宣言、燃料電池車「MIRAI」'],
        ['パナソニック', '再生可能エネルギー100%（RE100）', '2030年RE100達成目標、工場の省エネ化'],
        ['花王', '循環型社会への貢献', '2030年までに全製品パッケージをリサイクル可能に'],
        ['イオン', 'サステナブル調達', '2025年までに持続可能な農水産物調達比率50%'],
        ['住友林業', '森林保全・木材利用促進', '国内外で約60万haの森林を管理'],
      ]},
      { type: 'paragraph', text: '今後は2030年のSDGs達成期限に向けて、企業のサステナビリティ取り組みはさらに加速することが予測されます。特に、サプライチェーン全体でのScope3排出量削減、人権デューデリジェンス、生物多様性への対応が新たな課題として浮上しています。' },
    ],
  },

  // ===== 記事3：GX・ESG求人推移 =====
  {
    id: 'gx-esg-jobs-trend',
    slug: 'gx-esg-jobs-trend',
    title: 'GX・ESG・サステナビリティ関連の求人数推移｜転職市場の最新動向2024',
    metaDescription: 'GX人材の求人は7年で7倍超、ESG求人は4年で5倍に急増。リクルートエージェント・コトラのデータをもとに、サステナビリティ転職市場の最新動向と必要なスキルを解説します。',
    category: '転職・キャリア',
    tags: ['GX人材', 'ESG転職', 'サステナビリティ転職', '求人推移', 'キャリア'],
    publishedAt: '2026-06-22',
    readingMinutes: 6,
    references: [
      { id: 1, title: 'サステナビリティ・ESGの求人、4年で5倍に', url: 'https://www.alterna.co.jp/112102/', publisher: 'オルタナ（2024年1月）' },
      { id: 2, title: 'GX人材の転職市場が急成長！今注目される理由とキャリア', url: 'https://green-transformation.jp/media/human-resource-development/065/', publisher: 'GX検定公式メディア（2024年10月）' },
      { id: 3, title: 'GX求人は6年で約6倍、気候変動に加え今後は生物多様性や…', url: 'https://xtech.nikkei.com/atcl/nxt/column/18/00577/101600063/', publisher: '日経xtech（2023年10月）' },
      { id: 4, title: 'GX人材の年収相場と転職成功事例', url: 'https://sdgs.kotora.jp/news_rec/news_rec-4101/', publisher: 'コトラ SDGs転職' },
      { id: 5, title: 'ESGとは？今注目されるESG領域の転職市場やキャリアパスを解説', url: 'https://www.progressiverecruitment.com/ja-jp/knowledge-hub/industry-insights/esg-career/', publisher: 'Progressive Recruitment' },
    ],
    content: [
      { type: 'paragraph', text: 'サステナビリティ・GX・ESG分野の転職市場は、ここ数年で急速に拡大しています。脱炭素化への社会的要請、ESG投資の拡大、政府のGX推進政策を背景に、専門人材の需要が爆発的に増加しています。' },
      { type: 'heading2', text: 'ESG・サステナビリティ求人：4年で5倍に（コトラ調べ）' },
      { type: 'paragraph', text: '人材コンサルティングファームのコトラ（東京・港）が公表したデータによると、同社が受注したサステナビリティ・ESGの求人件数は年々増加し、2020年の57件から2023年には278件へと約5倍に増加しました。企業に本質的な取り組みが求められるなかで、具体的な実行スキルを持った人材ニーズが高まっているとしています。', sourceUrl: 'https://www.alterna.co.jp/112102/' },
      { type: 'table', headers: ['年', 'ESG・サステナビリティ求人件数（コトラ受注）', '対2020年比'], rows: [
        ['2020年', '57件', '基準'],
        ['2021年', '約100件（推計）', '約1.8倍'],
        ['2022年', '約180件（推計）', '約3.2倍'],
        ['2023年', '278件', '約4.9倍'],
      ]},
      { type: 'paragraph', text: '※上記はコトラ社の受注件数。実際の市場全体の求人数はさらに多いと考えられます。', sourceUrl: 'https://www.alterna.co.jp/112102/' },
      { type: 'heading2', text: 'GX人材の求人：7年で7倍超（リクルートエージェント調べ）' },
      { type: 'paragraph', text: 'リクルートエージェントのデータによると、転職市場でGX人材の求人は2016年〜2023年の比較で7.27倍になっています。特に2020年度以降に大きく数が伸びており、菅政権による「2050年カーボンニュートラル宣言」（2020年10月）が転機となりました。', sourceUrl: 'https://green-transformation.jp/media/human-resource-development/065/' },
      { type: 'highlight', text: 'GX人材求人：2016年比で2023年は7.27倍（リクルートエージェント調べ）　ESG求人：2020年比で2023年は約5倍（コトラ調べ）' },
      { type: 'heading2', text: '求人が多い職種・業界' },
      { type: 'table', headers: ['職種', '主な業界', '特徴'], rows: [
        ['サステナビリティ推進担当', '製造業・商社・小売', '社内横断的なESG戦略の立案・推進'],
        ['ESGアナリスト', '金融・証券・コンサル', '企業のESG評価・情報開示支援'],
        ['カーボンアカウンタント', '製造業・エネルギー', 'Scope1〜3排出量算定・削減計画'],
        ['GXコンサルタント', 'コンサルティング', '脱炭素戦略・GX投資計画の策定'],
        ['再エネ事業担当', 'エネルギー・インフラ', '太陽光・風力発電プロジェクト管理'],
      ]},
      { type: 'heading2', text: 'GX人材の市場規模と将来予測' },
      { type: 'paragraph', text: 'デロイトトーマツの2024年10月発表の調査によると、日本のGX人材は現在約254万人で、2035年には約266万人のGX人材が必要とされると予測されています。需要に対して供給が追いついておらず、転職市場では経験者に対して好条件のオファーが提示されるケースが増えています。', sourceUrl: 'https://sdgs.kotora.jp/news_rec/news_rec-4101/' },
      { type: 'heading2', text: 'サステナビリティ転職に求められるスキル' },
      { type: 'list', items: [
        'GHGプロトコルに基づくScope1〜3排出量算定の実務経験',
        'TCFD・TNFD・GRIなどの情報開示フレームワークの知識',
        'SBT（科学的根拠に基づく目標）設定の知識',
        'ESG評価機関（MSCI・Sustainalytics等）の評価基準の理解',
        '英語力（外資系・グローバル企業では必須）',
        'GX検定ベーシック等の資格',
      ]},
      { type: 'paragraph', text: '転職市場の需要は今後も拡大が見込まれます。2026年以降は、欧州のCSRD（企業サステナビリティ報告指令）への対応や、国内でのサステナビリティ情報開示の義務化拡大により、さらなる人材需要の増加が予測されます。' },
    ],
  },

  // ===== 記事4〜20：SDGs17目標の解説 =====
  {
    id: 'sdgs-goal-1',
    slug: 'sdgs-goal-1',
    title: 'SDGs目標1「貧困をなくそう」とは？日本企業の取り組み事例',
    metaDescription: 'SDGs目標1「あらゆる場所のあらゆる形態の貧困を終わらせる」の内容と、ユニクロ・パナソニックなど日本企業の取り組み事例を解説します。',
    category: 'SDGs各目標',
    tags: ['SDGs', '目標1', '貧困', 'BOP', 'ユニクロ'],
    publishedAt: '2026-06-22',
    readingMinutes: 5,
    references: [
      { id: 1, title: '目標1：貧困をなくそう', url: 'https://www.unic.or.jp/activities/economic_social_development/sustainable_development/2030agenda/sdgs/goal_1/', publisher: '国連広報センター' },
      { id: 2, title: 'SDGs目標1 | 外務省', url: 'https://www.mofa.go.jp/mofaj/gaiko/oda/SDGs/about/index.html', publisher: '外務省' },
    ],
    content: [
      { type: 'paragraph', text: 'SDGs目標1は「あらゆる場所のあらゆる形態の貧困を終わらせる」ことを掲げています。世界では依然として約7億人（世界人口の約9%）が1日1.90ドル未満で生活する極度の貧困状態にあります。' },
      { type: 'heading2', text: '目標1の主なターゲット' },
      { type: 'list', items: [
        '2030年までに、現在1日1.25ドル未満で生活する人々と定義されている極度の貧困をあらゆる場所で終わらせる',
        '各国定義によるあらゆる次元の貧困状態にある全ての年齢の男性、女性、子どもの割合を半減させる',
        '社会的保護制度・対策を実施し、貧困層・脆弱層に対する十分な保護を達成する',
      ]},
      { type: 'heading2', text: '日本企業の主な取り組み' },
      { type: 'table', headers: ['企業名', '取り組み内容'], rows: [
        ['ユニクロ（ファーストリテイリング）', '難民・被災者への衣料品寄贈（「服のチカラ」プロジェクト）、バングラデシュでの社会的ビジネス'],
        ['パナソニック', 'アフリカ・アジアでのBOP（低所得層向け）ビジネス、太陽光ランタン普及'],
        ['住友化学', 'アフリカでのマラリア対策蚊帳「オリセットネット」の製造・普及'],
        ['伊藤忠商事', '途上国での農業・食料支援、マイクロファイナンス事業'],
      ]},
      { type: 'paragraph', text: '日本国内においても、子どもの貧困率（2021年：11.5%）の改善に向けた取り組みとして、企業による子ども食堂への支援、フードバンクへの食料寄付、奨学金制度の拡充などが広がっています。' },
    ],
  },

  {
    id: 'sdgs-goal-2',
    slug: 'sdgs-goal-2',
    title: 'SDGs目標2「飢餓をゼロに」とは？日本企業の取り組み事例',
    metaDescription: 'SDGs目標2「飢餓を終わらせ、食料安全保障及び栄養改善を実現し、持続可能な農業を促進する」の内容と、カゴメ・味の素など日本企業の取り組みを解説します。',
    category: 'SDGs各目標',
    tags: ['SDGs', '目標2', '飢餓', '食料安全保障', '農業', 'カゴメ', '味の素'],
    publishedAt: '2026-06-22',
    readingMinutes: 5,
    references: [
      { id: 1, title: '目標2：飢餓をゼロに', url: 'https://www.unic.or.jp/activities/economic_social_development/sustainable_development/2030agenda/sdgs/goal_2/', publisher: '国連広報センター' },
      { id: 2, title: '世界の食料安全保障と栄養の現状2023', url: 'https://www.fao.org/publications/home/fao-flagship-publications/the-state-of-food-security-and-nutrition-in-the-world/ja', publisher: 'FAO（国連食糧農業機関）' },
    ],
    content: [
      { type: 'paragraph', text: 'SDGs目標2は「飢餓を終わらせ、食料安全保障及び栄養改善を実現し、持続可能な農業を促進する」ことを目指しています。FAOの報告書によると、世界では約7億3,300万人が飢餓に苦しんでいます（2023年）。' },
      { type: 'heading2', text: '目標2の主なターゲット' },
      { type: 'list', items: [
        '2030年までに、飢餓を撲滅し、すべての人々、特に貧困層及び幼児を含む脆弱な立場にある人々が、安全かつ栄養のある食料を十分得られるようにする',
        '2030年までに、あらゆる形態の栄養不良を解消する',
        '2030年までに、持続可能な食料生産システムを確保し、強靭な農業を実践する',
      ]},
      { type: 'heading2', text: '日本企業の主な取り組み' },
      { type: 'table', headers: ['企業名', '取り組み内容'], rows: [
        ['カゴメ', '農業技術の海外展開、持続可能な農業支援、フードロス削減'],
        ['味の素', 'アフリカでの栄養改善プログラム、アミノ酸を活用した栄養強化食品の普及'],
        ['クボタ', 'アジア・アフリカでの農業機械普及、スマート農業技術の展開'],
        ['ヤンマー', '農業機械の省エネ化、精密農業（スマートアグリ）の推進'],
        ['明治ホールディングス', '栄養強化食品の開発、食育活動の推進'],
      ]},
    ],
  },

  {
    id: 'sdgs-goal-3',
    slug: 'sdgs-goal-3',
    title: 'SDGs目標3「すべての人に健康と福祉を」とは？日本企業の取り組み事例',
    metaDescription: 'SDGs目標3の内容と、武田薬品工業・エーザイなど日本の製薬企業を中心とした医薬品アクセス改善・健康増進の取り組みを解説します。',
    category: 'SDGs各目標',
    tags: ['SDGs', '目標3', '健康', '福祉', '医療', '武田薬品', 'エーザイ'],
    publishedAt: '2026-06-22',
    readingMinutes: 5,
    references: [
      { id: 1, title: '目標3：すべての人に健康と福祉を', url: 'https://www.unic.or.jp/activities/economic_social_development/sustainable_development/2030agenda/sdgs/goal_3/', publisher: '国連広報センター' },
      { id: 2, title: 'WHO | 世界保健機関', url: 'https://www.who.int/ja', publisher: 'WHO（世界保健機関）' },
    ],
    content: [
      { type: 'paragraph', text: 'SDGs目標3は「あらゆる年齢のすべての人々の健康的な生活を確保し、福祉を促進する」ことを目指しています。感染症対策、非感染性疾患（NCD）対策、ユニバーサル・ヘルス・カバレッジ（UHC）の実現が主要課題です。' },
      { type: 'heading2', text: '日本企業の主な取り組み' },
      { type: 'table', headers: ['企業名', '取り組み内容'], rows: [
        ['武田薬品工業', '途上国向け医薬品アクセス改善、感染症ワクチン開発・供給'],
        ['エーザイ', 'アルツハイマー病治療薬の開発、途上国での医薬品を原価以下で提供'],
        ['大塚ホールディングス', '経口補水液「OS-1」の普及、栄養不良対策製品の開発'],
        ['テルモ', '途上国での医療機器普及、血液管理システムの展開'],
        ['フィリップス・ジャパン', '遠隔医療・デジタルヘルスの推進'],
      ]},
      { type: 'paragraph', text: '日本国内では、高齢化社会への対応として、予防医療・健康増進への企業の取り組みが加速しています。特に、従業員の健康経営（健康経営優良法人認定制度）は2024年時点で約1万7,000社が認定を受けるまで拡大しました。' },
    ],
  },

  {
    id: 'sdgs-goal-4',
    slug: 'sdgs-goal-4',
    title: 'SDGs目標4「質の高い教育をみんなに」とは？日本企業の取り組み事例',
    metaDescription: 'SDGs目標4の内容と、ベネッセ・リクルートなど日本の教育関連企業の取り組みを解説。EdTechや教育格差解消への企業の貢献を紹介します。',
    category: 'SDGs各目標',
    tags: ['SDGs', '目標4', '教育', 'EdTech', 'ベネッセ', 'リクルート'],
    publishedAt: '2026-06-22',
    readingMinutes: 5,
    references: [
      { id: 1, title: '目標4：質の高い教育をみんなに', url: 'https://www.unic.or.jp/activities/economic_social_development/sustainable_development/2030agenda/sdgs/goal_4/', publisher: '国連広報センター' },
      { id: 2, title: 'ユネスコ 教育', url: 'https://www.unesco.org/en/education', publisher: 'UNESCO（国連教育科学文化機関）' },
    ],
    content: [
      { type: 'paragraph', text: 'SDGs目標4は「すべての人に包摂的かつ公正な質の高い教育を確保し、生涯学習の機会を促進する」ことを目指しています。世界では約2億4,400万人の子どもが学校に通えていません（ユネスコ、2023年）。' },
      { type: 'heading2', text: '日本企業の主な取り組み' },
      { type: 'table', headers: ['企業名', '取り組み内容'], rows: [
        ['ベネッセホールディングス', '途上国での教育支援、ICT教育の普及、子どもの学習格差解消'],
        ['リクルート', 'スタディサプリによる教育格差解消、社会人向けリスキリング支援'],
        ['ソフトバンク', '「ソフトバンクアカデミア」による次世代リーダー育成、ICT教育支援'],
        ['富士通', '学校向けICT環境整備、プログラミング教育支援'],
        ['NTT', 'デジタルデバイド解消、農村部・離島への通信インフラ整備'],
      ]},
    ],
  },

  {
    id: 'sdgs-goal-5',
    slug: 'sdgs-goal-5',
    title: 'SDGs目標5「ジェンダー平等を実現しよう」とは？日本企業の取り組み事例',
    metaDescription: 'SDGs目標5の内容と、資生堂・富士通など日本企業の女性活躍推進・ジェンダー平等への取り組みを解説。女性管理職比率の目標設定事例も紹介します。',
    category: 'SDGs各目標',
    tags: ['SDGs', '目標5', 'ジェンダー平等', '女性活躍', 'DE&I', '資生堂'],
    publishedAt: '2026-06-22',
    readingMinutes: 5,
    references: [
      { id: 1, title: '目標5：ジェンダー平等を実現しよう', url: 'https://www.unic.or.jp/activities/economic_social_development/sustainable_development/2030agenda/sdgs/goal_5/', publisher: '国連広報センター' },
      { id: 2, title: '女性活躍推進法に基づく情報公表', url: 'https://positive-ryouritsu.mhlw.go.jp/', publisher: '厚生労働省' },
    ],
    content: [
      { type: 'paragraph', text: 'SDGs目標5は「ジェンダー平等を達成し、すべての女性及び女児の能力強化を行う」ことを目指しています。世界経済フォーラムの「ジェンダーギャップ指数2024」で日本は118位（146カ国中）と依然として低い水準にあります。' },
      { type: 'heading2', text: '日本企業の主な取り組み' },
      { type: 'table', headers: ['企業名', '取り組み内容'], rows: [
        ['資生堂', '女性管理職比率の向上（2025年目標：40%）、育児支援制度の充実'],
        ['富士通', '女性役員比率向上、同一賃金・同一労働の推進'],
        ['パナソニック', 'DE&I（多様性・公平性・包摂性）推進、女性リーダー育成プログラム'],
        ['ソニーグループ', 'グローバルでのジェンダー平等推進、無意識バイアス研修'],
        ['NTTデータ', '女性活躍推進、育児・介護との両立支援'],
      ]},
    ],
  },

  {
    id: 'sdgs-goal-6',
    slug: 'sdgs-goal-6',
    title: 'SDGs目標6「安全な水とトイレを世界中に」とは？日本企業の取り組み事例',
    metaDescription: 'SDGs目標6の内容と、TOTOやクボタなど日本の水インフラ・衛生関連企業の取り組みを解説。世界の水問題と日本企業の貢献を紹介します。',
    category: 'SDGs各目標',
    tags: ['SDGs', '目標6', '水', 'トイレ', 'TOTO', 'クボタ', '水インフラ'],
    publishedAt: '2026-06-22',
    readingMinutes: 5,
    references: [
      { id: 1, title: '目標6：安全な水とトイレを世界中に', url: 'https://www.unic.or.jp/activities/economic_social_development/sustainable_development/2030agenda/sdgs/goal_6/', publisher: '国連広報センター' },
      { id: 2, title: 'UNICEF 水と衛生', url: 'https://www.unicef.or.jp/about_unicef/about_act04_01.html', publisher: '日本ユニセフ協会' },
    ],
    content: [
      { type: 'paragraph', text: 'SDGs目標6は「すべての人々の水と衛生の利用可能性と持続可能な管理を確保する」ことを目指しています。世界では約22億人が安全な飲料水を利用できず、約36億人が安全に管理されたトイレを使えていません（UNICEF/WHO、2023年）。' },
      { type: 'heading2', text: '日本企業の主な取り組み' },
      { type: 'table', headers: ['企業名', '取り組み内容'], rows: [
        ['TOTO', '節水型トイレ・衛生設備の普及、途上国での水衛生改善支援'],
        ['クボタ', '水処理システムの海外展開、農業用水管理技術の提供'],
        ['栗田工業', '工業用水処理・廃水処理技術の途上国展開'],
        ['サントリー', '「水と生きる」コミットメント、水源林の保全活動（国内外）'],
        ['東レ', '逆浸透膜を用いた海水淡水化システムの普及'],
      ]},
    ],
  },

  {
    id: 'sdgs-goal-7',
    slug: 'sdgs-goal-7',
    title: 'SDGs目標7「エネルギーをみんなにそしてクリーンに」とは？日本企業の取り組み事例',
    metaDescription: 'SDGs目標7の内容と、ソフトバンク・東京電力・パナソニックなど日本企業の再生可能エネルギー・省エネへの取り組みを解説します。',
    category: 'SDGs各目標',
    tags: ['SDGs', '目標7', 'エネルギー', '再生可能エネルギー', '省エネ', 'ソフトバンク'],
    publishedAt: '2026-06-22',
    readingMinutes: 5,
    references: [
      { id: 1, title: '目標7：エネルギーをみんなにそしてクリーンに', url: 'https://www.unic.or.jp/activities/economic_social_development/sustainable_development/2030agenda/sdgs/goal_7/', publisher: '国連広報センター' },
      { id: 2, title: 'GX推進法について', url: 'https://www.meti.go.jp/policy/energy_environment/global_warming/gx/index.html', publisher: '経済産業省' },
    ],
    content: [
      { type: 'paragraph', text: 'SDGs目標7は「すべての人々の、安価かつ信頼できる持続可能な近代的エネルギーへのアクセスを確保する」ことを目指しています。世界では約7億6,500万人が電力にアクセスできない状況にあります（IEA、2022年）。' },
      { type: 'heading2', text: '日本企業の主な取り組み' },
      { type: 'table', headers: ['企業名', '取り組み内容'], rows: [
        ['ソフトバンク', '再生可能エネルギー事業（太陽光・風力・地熱）、RE100加盟'],
        ['パナソニック', '住宅用太陽光発電・蓄電システム、工場の省エネ化・RE100推進'],
        ['東芝', '水素エネルギーシステム、洋上風力発電技術'],
        ['三菱重工業', 'ガスタービンの高効率化、水素混焼技術の開発'],
        ['シャープ', '高効率太陽電池の開発・製造、エネルギーマネジメントシステム'],
      ]},
    ],
  },

  {
    id: 'sdgs-goal-13',
    slug: 'sdgs-goal-13',
    title: 'SDGs目標13「気候変動に具体的な対策を」とは？日本企業の取り組み事例',
    metaDescription: 'SDGs目標13の内容と、トヨタ・パナソニックなど日本企業の脱炭素・GX（グリーントランスフォーメーション）への取り組みを解説します。カーボンニュートラル2050への道筋も紹介。',
    category: 'SDGs各目標',
    tags: ['SDGs', '目標13', '気候変動', '脱炭素', 'カーボンニュートラル', 'GX', 'トヨタ'],
    publishedAt: '2026-06-22',
    readingMinutes: 6,
    references: [
      { id: 1, title: '目標13：気候変動に具体的な対策を', url: 'https://www.unic.or.jp/activities/economic_social_development/sustainable_development/2030agenda/sdgs/goal_13/', publisher: '国連広報センター' },
      { id: 2, title: 'パリ協定について', url: 'https://www.env.go.jp/earth/ondanka/cop/paris_agreement.html', publisher: '環境省' },
      { id: 3, title: 'GX推進戦略', url: 'https://www.meti.go.jp/policy/energy_environment/global_warming/gx/index.html', publisher: '経済産業省' },
      { id: 4, title: 'IPCC 第6次評価報告書', url: 'https://www.ipcc.ch/assessment-report/ar6/', publisher: 'IPCC（気候変動に関する政府間パネル）' },
    ],
    content: [
      { type: 'paragraph', text: 'SDGs目標13は「気候変動及びその影響を軽減するための緊急対策を講じる」ことを目指しています。IPCCの第6次評価報告書（2021〜2022年）は、人間活動が気候システムに「疑う余地のない」影響を与えており、2030年代初頭には産業革命前比で1.5℃の気温上昇に達する可能性が高いと警告しています。' },
      { type: 'heading2', text: '日本の気候変動対策の枠組み' },
      { type: 'paragraph', text: '日本は2020年10月に「2050年カーボンニュートラル」を宣言し、2021年4月には「2030年度に温室効果ガスを2013年度比46%削減」という目標を掲げました。これを実現するための産業政策として、2023年にGX推進法・GX経済移行債（10年間で20兆円規模）が整備されました。' },
      { type: 'heading2', text: '日本企業の主な取り組み' },
      { type: 'table', headers: ['企業名', '取り組み内容', '目標・実績'], rows: [
        ['トヨタ自動車', 'EV・FCV（燃料電池車）の普及、工場の脱炭素化', '2050年カーボンニュートラル、2030年EV・FCV350万台'],
        ['パナソニック', 'RE100加盟、蓄電池・省エネ製品の拡充', '2030年自社工場RE100達成目標'],
        ['日立製作所', 'Scope3排出量削減、スマートシティ・エネルギー管理', '2050年カーボンニュートラル'],
        ['三菱商事', '再エネ事業への投資拡大、石炭事業からの撤退', '2050年ネットゼロ宣言'],
        ['ENEOS', '水素・アンモニア事業、バイオ燃料の開発', '2040年カーボンニュートラル目標'],
      ]},
      { type: 'paragraph', text: 'GXリーグには2024年度時点で700社超が参加し、カーボンクレジット取引市場（J-クレジット）を通じた排出量削減が進んでいます。今後は、Scope3（サプライチェーン全体）の排出量削減が企業の重要課題となっています。' },
    ],
  },
];

// 全記事のカテゴリ別取得
export function getArticlesByCategory(category: ArticleCategory): Article[] {
  return articles.filter(a => a.category === category);
}

// IDで記事取得
export function getArticleById(id: string): Article | undefined {
  return articles.find(a => a.id === id);
}
