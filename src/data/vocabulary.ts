export interface VocabWord {
  id: number;
  word: string;
  reading?: string; // ふりがな
  category: string;
  definition: string;
  example?: string; // 使用例
  english?: string; // 英語表記
}

export const VOCAB_CATEGORIES = [
  "気候変動・環境",
  "エネルギー",
  "企業・経営",
  "金融・投資",
  "政策・制度",
  "技術・イノベーション",
  "国際・条約",
];

export const vocabulary: VocabWord[] = [
  // ===== 気候変動・環境 =====
  {
    id: 1, category: "気候変動・環境",
    word: "カーボンニュートラル", english: "Carbon Neutral",
    definition: "温室効果ガスの排出量と吸収量を均衡させ、実質的な排出量をゼロにすること。",
    example: "日本は2050年カーボンニュートラルを目標としている。",
  },
  {
    id: 2, category: "気候変動・環境",
    word: "ネットゼロ", english: "Net Zero",
    definition: "CO2を含む全ての温室効果ガスの排出量と吸収量を均衡させること。カーボンニュートラルより広い概念。",
  },
  {
    id: 3, category: "気候変動・環境",
    word: "脱炭素", reading: "だつたんそ",
    definition: "化石燃料の使用をやめ、CO2排出量をゼロに近づける取り組みの総称。",
  },
  {
    id: 4, category: "気候変動・環境",
    word: "温室効果ガス", reading: "おんしつこうかガス", english: "GHG (Greenhouse Gas)",
    definition: "大気中に存在し、地球温暖化を引き起こすガス。CO2・メタン・一酸化二窒素・フロン類などが含まれる。",
  },
  {
    id: 5, category: "気候変動・環境",
    word: "パリ協定", english: "Paris Agreement",
    definition: "2015年COP21で採択された気候変動に関する国際条約。世界平均気温上昇を2℃未満（1.5℃以内努力）に抑えることを目標とする。",
  },
  {
    id: 6, category: "気候変動・環境",
    word: "1.5℃目標",
    definition: "パリ協定で掲げる、産業革命前比の気温上昇を1.5℃以内に抑える目標。これを超えると生態系への影響が急増するとされる。",
  },
  {
    id: 7, category: "気候変動・環境",
    word: "カーボンバジェット", english: "Carbon Budget",
    definition: "特定の温度目標を達成するために人類が排出できる温室効果ガスの累積量の上限。残余カーボンバジェットとも呼ぶ。",
  },
  {
    id: 8, category: "気候変動・環境",
    word: "ティッピングポイント", english: "Tipping Point",
    definition: "気候システムが不可逆的な変化を起こす臨界点。グリーンランド氷床の崩壊やアマゾン森林消失などが例として挙げられる。",
  },
  {
    id: 9, category: "気候変動・環境",
    word: "適応策", reading: "てきおうさく", english: "Adaptation",
    definition: "気候変動の影響（洪水・干ばつ・熱波など）に対処・備える取り組み。堤防整備・熱中症対策などが含まれる。",
  },
  {
    id: 10, category: "気候変動・環境",
    word: "緩和策", reading: "かんわさく", english: "Mitigation",
    definition: "温室効果ガスの排出削減・吸収増加により気候変動の原因に対処する取り組み。再エネ導入・省エネなどが含まれる。",
  },
  {
    id: 11, category: "気候変動・環境",
    word: "ネガティブエミッション", english: "Negative Emissions",
    definition: "大気中のCO2を積極的に除去・貯留する技術・手法の総称。DAC・BECCS・植林などが含まれる。",
  },
  {
    id: 12, category: "気候変動・環境",
    word: "カーボンオフセット", english: "Carbon Offset",
    definition: "削減困難な自社のCO2排出量を、他の場所での削減・吸収プロジェクトへの投資によって相殺すること。",
  },
  {
    id: 13, category: "気候変動・環境",
    word: "生物多様性", reading: "せいぶつたようせい", english: "Biodiversity",
    definition: "地球上の生物の多様さのこと。生態系・種・遺伝子の3つのレベルで評価される。",
  },
  {
    id: 14, category: "気候変動・環境",
    word: "ネイチャーポジティブ", english: "Nature Positive",
    definition: "2030年までに生物多様性の損失を止め、回復軌道に乗せることを目指す概念。",
  },
  {
    id: 15, category: "気候変動・環境",
    word: "サーキュラーエコノミー", english: "Circular Economy",
    definition: "資源を循環利用し、廃棄物を最小化する経済システム。「作って・使って・捨てる」リニアエコノミーに対する概念。",
  },
  {
    id: 16, category: "気候変動・環境",
    word: "ブルーカーボン", english: "Blue Carbon",
    definition: "海草藻場・塩性湿地・マングローブ林などの沿岸海洋生態系が吸収・貯留する炭素。",
  },
  {
    id: 17, category: "気候変動・環境",
    word: "デカップリング", english: "Decoupling",
    definition: "経済成長（GDP増加）とCO2排出量の増加を切り離すこと。再エネ普及・省エネにより実現しつつある。",
  },
  {
    id: 18, category: "気候変動・環境",
    word: "ジャスト・トランジション", english: "Just Transition",
    definition: "脱炭素化の過程で影響を受ける化石燃料産業の労働者・地域社会への公正な支援・移行を確保する概念。",
  },

  // ===== エネルギー =====
  {
    id: 19, category: "エネルギー",
    word: "再生可能エネルギー", reading: "さいせいかのうエネルギー", english: "Renewable Energy",
    definition: "太陽光・風力・水力・地熱・バイオマスなど、自然界に常に存在し繰り返し利用できるエネルギー源の総称。",
  },
  {
    id: 20, category: "エネルギー",
    word: "FIT（固定価格買取制度）", english: "Feed-in Tariff",
    definition: "再生可能エネルギーで発電した電力を、一定期間・固定価格で電力会社が買い取ることを政府が保証する制度。",
  },
  {
    id: 21, category: "エネルギー",
    word: "FIP（フィード・イン・プレミアム）", english: "Feed-in Premium",
    definition: "再生可能エネルギーの発電事業者が市場で電力を売却し、市場価格に上乗せするプレミアムを受け取る制度。",
  },
  {
    id: 22, category: "エネルギー",
    word: "グリーン水素", english: "Green Hydrogen",
    definition: "再生可能エネルギーの電力を使った水電解で製造した水素。製造過程でCO2を排出しない最もクリーンな水素。",
  },
  {
    id: 23, category: "エネルギー",
    word: "S+3E",
    definition: "日本のエネルギー政策の基本方針。Safety（安全性）を大前提に、Energy Security（安全保障）・Economic Efficiency（経済効率性）・Environment（環境）のバランスを取る考え方。",
  },
  {
    id: 24, category: "エネルギー",
    word: "エネルギーミックス", english: "Energy Mix",
    definition: "国や地域のエネルギー供給における各エネルギー源（石炭・石油・天然ガス・原子力・再エネ）の構成比率。",
  },
  {
    id: 25, category: "エネルギー",
    word: "アンモニア", english: "Ammonia (NH3)",
    definition: "水素と窒素から構成される化合物。燃焼時にCO2を排出しない脱炭素燃料として、火力発電への混焼・専焼が期待される。",
  },
  {
    id: 26, category: "エネルギー",
    word: "メタネーション", english: "Methanation",
    definition: "CO2と水素を反応させて合成メタン（e-methane）を製造する技術。既存の都市ガスインフラをそのまま活用できる。",
  },
  {
    id: 27, category: "エネルギー",
    word: "スマートグリッド", english: "Smart Grid",
    definition: "ICT技術を活用して電力の需要・供給・蓄電をリアルタイムで双方向に管理する次世代電力網。",
  },
  {
    id: 28, category: "エネルギー",
    word: "VPP（バーチャルパワープラント）", english: "Virtual Power Plant",
    definition: "分散型エネルギーリソース（太陽光・蓄電池・EVなど）をICTで束ねて一つの発電所のように制御・活用する仕組み。",
  },
  {
    id: 29, category: "エネルギー",
    word: "PPA（電力購入契約）", english: "Power Purchase Agreement",
    definition: "再生可能エネルギーの発電事業者と需要家（企業等）が直接締結する長期電力購入契約。RE100達成に活用される。",
  },
  {
    id: 30, category: "エネルギー",
    word: "デマンドレスポンス", english: "Demand Response",
    definition: "電力需給の逼迫時や再エネ余剰時に、電力会社からの信号に応じて需要家が電力消費を調整することで系統を安定化する取り組み。",
  },

  // ===== 企業・経営 =====
  {
    id: 31, category: "企業・経営",
    word: "GX（グリーントランスフォーメーション）", english: "Green Transformation",
    definition: "化石燃料から再生可能エネルギーへの転換を軸に、産業・社会構造全体を変革する取り組み。",
  },
  {
    id: 32, category: "企業・経営",
    word: "SX（サステナビリティトランスフォーメーション）", english: "Sustainability Transformation",
    definition: "企業が持続可能性を経営の中核に据え、社会・環境・経済の課題解決と企業価値向上を同時に実現する変革。",
  },
  {
    id: 33, category: "企業・経営",
    word: "脱炭素経営", reading: "だつたんそけいえい",
    definition: "気候変動対策を経営戦略の中核に置き、温室効果ガス排出削減と事業成長を両立させる経営スタイル。",
  },
  {
    id: 34, category: "企業・経営",
    word: "Scope1", english: "Scope 1",
    definition: "GHGプロトコルの分類。自社が所有・管理する設備（ボイラー・車両など）からの直接的な温室効果ガス排出。",
  },
  {
    id: 35, category: "企業・経営",
    word: "Scope2", english: "Scope 2",
    definition: "GHGプロトコルの分類。外部から購入した電力・熱・蒸気の使用に伴う間接的な温室効果ガス排出。",
  },
  {
    id: 36, category: "企業・経営",
    word: "Scope3", english: "Scope 3",
    definition: "GHGプロトコルの分類。自社のバリューチェーン全体（上流・下流）における間接排出。15のカテゴリに分類される。",
    example: "多くの企業でScope3が総排出量の70〜90%以上を占める。",
  },
  {
    id: 37, category: "企業・経営",
    word: "LCA（ライフサイクルアセスメント）", english: "Life Cycle Assessment",
    definition: "製品・サービスの原材料採取から廃棄までの全ライフサイクルにわたる環境負荷を定量的に評価する手法。",
  },
  {
    id: 38, category: "企業・経営",
    word: "CFP（カーボンフットプリント）", english: "Carbon Footprint of Products",
    definition: "製品のライフサイクル全体を通じたCO2排出量を数値化した指標。",
  },
  {
    id: 39, category: "企業・経営",
    word: "マテリアリティ", english: "Materiality",
    definition: "企業が特定すべき重要な環境・社会・経済課題。ステークホルダーへの影響と企業への財務影響の両面から特定する。",
  },
  {
    id: 40, category: "企業・経営",
    word: "グリーンウォッシュ", english: "Greenwash",
    definition: "実態を伴わない環境配慮を謳う虚偽・誇大な広告・主張。ESG投資の拡大に伴い規制が強化されている。",
  },
  {
    id: 41, category: "企業・経営",
    word: "インターナル・カーボンプライシング", english: "Internal Carbon Pricing",
    definition: "企業が社内でCO2排出量に価格をつけ、投資判断や事業戦略に活用する仕組み。将来の炭素コストを事業評価に組み込む。",
  },
  {
    id: 42, category: "企業・経営",
    word: "座礁資産", reading: "ざしょうしさん", english: "Stranded Assets",
    definition: "脱炭素化の進展により予想より早く価値が失われる資産。特に化石燃料関連の埋蔵量や設備が対象となる。",
  },
  {
    id: 43, category: "企業・経営",
    word: "バリューチェーン", english: "Value Chain",
    definition: "原材料調達から製造・流通・販売・廃棄までの一連の事業活動の連鎖。Scope3排出量の算定範囲となる。",
  },
  {
    id: 44, category: "企業・経営",
    word: "ダブルマテリアリティ", english: "Double Materiality",
    definition: "企業活動が環境・社会に与える影響（インパクト）と、環境・社会問題が企業財務に与える影響の両方を重視する考え方。",
  },
  {
    id: 45, category: "企業・経営",
    word: "グリーン調達", reading: "グリーンちょうたつ", english: "Green Procurement",
    definition: "製品・サービス・原材料を調達する際に、環境負荷が低いものを優先的に選択する取り組み。",
  },

  // ===== 金融・投資 =====
  {
    id: 46, category: "金融・投資",
    word: "ESG投資", english: "ESG Investing",
    definition: "Environment（環境）・Social（社会）・Governance（ガバナンス）の非財務情報も考慮して投資判断を行う手法。",
  },
  {
    id: 47, category: "金融・投資",
    word: "サステナブルファイナンス", english: "Sustainable Finance",
    definition: "環境・社会・ガバナンス（ESG）要素を考慮した金融活動全般。グリーンボンド・SLLなどが含まれる。",
  },
  {
    id: 48, category: "金融・投資",
    word: "グリーンボンド", english: "Green Bond",
    definition: "調達した資金を再エネ・省エネ・グリーンビルディングなどの環境改善プロジェクトに充当することを条件とした債券。",
  },
  {
    id: 49, category: "金融・投資",
    word: "サステナビリティリンクローン", english: "Sustainability-Linked Loan",
    definition: "借り手のサステナビリティ目標（KPI）の達成度に応じて金利が変動するローン。",
  },
  {
    id: 50, category: "金融・投資",
    word: "トランジションファイナンス", english: "Transition Finance",
    definition: "鉄鋼・化学・セメントなど脱炭素化が困難な産業（ハードトゥアベート産業）の低炭素移行を支援する資金調達手法。",
  },
  {
    id: 51, category: "金融・投資",
    word: "タクソノミー", english: "Taxonomy",
    definition: "どの経済活動が環境的に持続可能かを分類・定義する基準。EUタクソノミーが代表例。グリーンウォッシュ防止が目的。",
  },
  {
    id: 52, category: "金融・投資",
    word: "カーボンクレジット", english: "Carbon Credit",
    definition: "CO2等の温室効果ガスの削減量や吸収量を数値化・証書化したもの。1クレジット＝CO2換算1トンが一般的。",
  },
  {
    id: 53, category: "金融・投資",
    word: "J-クレジット",
    definition: "省エネ・再エネ・森林管理などによるCO2削減・吸収量を国（経産省・環境省・農水省）が認証するクレジット制度。",
  },
  {
    id: 54, category: "金融・投資",
    word: "非化石証書", reading: "ひかせきしょうしょ",
    definition: "再生可能エネルギー等の非化石電源で発電した電力の環境価値を証書化したもの。企業のRE100対応に活用される。",
  },
  {
    id: 55, category: "金融・投資",
    word: "インパクト投資", english: "Impact Investing",
    definition: "財務的リターンと同時に、社会・環境への正のインパクトを意図的に生み出すことを目的とした投資。",
  },

  // ===== 政策・制度 =====
  {
    id: 56, category: "政策・制度",
    word: "TCFD", english: "Task Force on Climate-related Financial Disclosures",
    definition: "気候関連財務情報開示タスクフォース。企業に対してガバナンス・戦略・リスク管理・指標と目標の4つの柱での情報開示を推奨。",
  },
  {
    id: 57, category: "政策・制度",
    word: "ISSB", english: "International Sustainability Standards Board",
    definition: "国際サステナビリティ基準審議会。IFRS S1（全般的要求事項）とIFRS S2（気候関連開示）を発行。",
  },
  {
    id: 58, category: "政策・制度",
    word: "SSBJ", english: "Sustainability Standards Board of Japan",
    definition: "サステナビリティ基準委員会。ISSBのIFRS S1・S2に対応した日本版基準を策定する機関。",
  },
  {
    id: 59, category: "政策・制度",
    word: "SBT（科学的根拠に基づく目標）", english: "Science Based Targets",
    definition: "パリ協定の目標達成に整合した科学的根拠に基づく企業の温室効果ガス削減目標。SBTiが認定を行う。",
  },
  {
    id: 60, category: "政策・制度",
    word: "RE100",
    definition: "事業活動で使用する電力を100%再生可能エネルギーで調達することを目指す企業が参加するグローバルイニシアティブ。",
  },
  {
    id: 61, category: "政策・制度",
    word: "CDP",
    definition: "企業・都市・国の環境情報開示を促進する国際的な非営利組織。気候変動・水・フォレストに関する質問書を企業に送付し評価。",
  },
  {
    id: 62, category: "政策・制度",
    word: "TNFD", english: "Task Force on Nature-related Financial Disclosures",
    definition: "自然関連財務情報開示タスクフォース。生物多様性・自然資本に関するリスク・機会の情報開示フレームワーク。",
  },
  {
    id: 63, category: "政策・制度",
    word: "炭素税", reading: "たんそぜい", english: "Carbon Tax",
    definition: "CO2などの温室効果ガスの排出量に応じて政府が課税する制度。排出量に価格をつけることで削減インセンティブを高める。",
  },
  {
    id: 64, category: "政策・制度",
    word: "排出量取引制度", reading: "はいしゅつりょうとりひきせいど", english: "Emissions Trading System (ETS)",
    definition: "政府が企業に排出量の上限（キャップ）を設定し、余剰・不足分を市場で取引できる制度。EU-ETSが世界最大。",
  },
  {
    id: 65, category: "政策・制度",
    word: "CBAM（炭素国境調整メカニズム）", english: "Carbon Border Adjustment Mechanism",
    definition: "炭素価格が低い国からの輸入品に対して炭素コストを課すEUの制度。カーボンリーケージ防止が目的。",
  },
  {
    id: 66, category: "政策・制度",
    word: "GXリーグ",
    definition: "GXに積極的に取り組む企業が参加し、自主的な排出量取引・ルール形成・人材育成などを通じて脱炭素化を推進する枠組み。",
  },
  {
    id: 67, category: "政策・制度",
    word: "NDC（国が決定する貢献）", english: "Nationally Determined Contribution",
    definition: "パリ協定に基づき各国が自主的に設定・提出する温室効果ガス削減目標。5年ごとに更新が求められる。",
  },
  {
    id: 68, category: "政策・制度",
    word: "温対法", reading: "おんたいほう",
    definition: "地球温暖化対策推進法の略称。温室効果ガスの排出量の算定・報告・公表制度（SHK制度）などを定める法律。",
  },
  {
    id: 69, category: "政策・制度",
    word: "省エネ法", reading: "しょうエネほう",
    definition: "エネルギーの使用の合理化等に関する法律の略称。工場・事業場・輸送・建築物などのエネルギー使用の合理化を促進する。",
  },
  {
    id: 70, category: "政策・制度",
    word: "GX推進法",
    definition: "GX経済移行債（約20兆円）の発行とカーボンプライシング（炭素賦課金・排出量取引）の導入を定める法律（2023年成立）。",
  },

  // ===== 技術・イノベーション =====
  {
    id: 71, category: "技術・イノベーション",
    word: "CCS", english: "Carbon Capture and Storage",
    definition: "発電所・工場などから排出されるCO2を回収・圧縮して地中に貯留する技術。炭素回収・貯留とも呼ぶ。",
  },
  {
    id: 72, category: "技術・イノベーション",
    word: "CCUS", english: "Carbon Capture, Utilization and Storage",
    definition: "CO2を回収して地中貯留するだけでなく、合成燃料・化学品・コンクリートなどに利用することも含む概念。",
  },
  {
    id: 73, category: "技術・イノベーション",
    word: "DAC（直接空気回収）", english: "Direct Air Capture",
    definition: "大気中に拡散したCO2を化学的・物理的な方法で直接回収する技術。コストが高いことが現在の課題。",
  },
  {
    id: 74, category: "技術・イノベーション",
    word: "BECCS", english: "Bioenergy with Carbon Capture and Storage",
    definition: "バイオマスを燃料として発電し、その際に排出されるCO2をCCSで回収・貯留する技術。ネガティブエミッション技術の一つ。",
  },
  {
    id: 75, category: "技術・イノベーション",
    word: "ペロブスカイト太陽電池", english: "Perovskite Solar Cell",
    definition: "塗布・印刷で製造可能な次世代太陽電池。軽量・フレキシブルな特性を持ち、日本が研究開発をリードしている。",
  },
  {
    id: 76, category: "技術・イノベーション",
    word: "全固体電池", reading: "ぜんこたいでんち", english: "All-Solid-State Battery",
    definition: "液体電解質を固体電解質に置き換えた次世代電池。高エネルギー密度・高安全性・長寿命が期待され、EVへの搭載が期待される。",
  },
  {
    id: 77, category: "技術・イノベーション",
    word: "水素還元製鉄", reading: "すいそかんげんせいてつ",
    definition: "コークス（石炭）の代わりに水素を還元剤として使用し、CO2排出なしで鉄を製造する技術。鉄鋼業の脱炭素化の切り札。",
  },
  {
    id: 78, category: "技術・イノベーション",
    word: "合成燃料（e-fuel）", english: "Synthetic Fuel",
    definition: "再生可能エネルギーで製造したグリーン水素とCO2を化学合成して製造した液体燃料。航空・船舶の脱炭素化に期待。",
  },
  {
    id: 79, category: "技術・イノベーション",
    word: "Power-to-X（P2X）",
    definition: "再生可能エネルギーの余剰電力を水素・合成燃料・熱などの別のエネルギー形態に変換する技術群の総称。",
  },
  {
    id: 80, category: "技術・イノベーション",
    word: "SMR（小型モジュール炉）", english: "Small Modular Reactor",
    definition: "出力300MWe以下の小型原子炉。工場でモジュールを製造して現地で組み立てることで建設期間・コスト削減が期待される。",
  },
  {
    id: 81, category: "技術・イノベーション",
    word: "ヒートポンプ", english: "Heat Pump",
    definition: "大気・地中・水などの低温熱源から熱を汲み上げ、電気エネルギーの2〜5倍の熱エネルギーを供給できる高効率技術。",
  },
  {
    id: 82, category: "技術・イノベーション",
    word: "ZEB（ネット・ゼロ・エネルギー・ビル）", english: "Net Zero Energy Building",
    definition: "省エネ技術と再生可能エネルギーの組み合わせにより、年間の一次エネルギー消費量の収支をゼロ以下にする建物。",
  },
  {
    id: 83, category: "技術・イノベーション",
    word: "アグリボルタイクス", english: "Agrivoltaics",
    definition: "農地の上部に太陽光パネルを設置し、農業と太陽光発電を同一の土地で両立する取り組み。ソーラーシェアリングとも呼ぶ。",
  },
  {
    id: 84, category: "技術・イノベーション",
    word: "カーボンリサイクル", english: "Carbon Recycling",
    definition: "CO2を資源として捉え、合成燃料・化学品・コンクリート骨材などに転換・活用する技術・政策の総称。",
  },
  {
    id: 85, category: "技術・イノベーション",
    word: "電化", reading: "でんか", english: "Electrification",
    definition: "熱・輸送・産業プロセスを電力で賄うように転換すること。脱炭素電力と組み合わせることでCO2排出をゼロにできる。",
  },

  // ===== 国際・条約 =====
  {
    id: 86, category: "国際・条約",
    word: "IPCC", english: "Intergovernmental Panel on Climate Change",
    definition: "気候変動に関する政府間パネル。気候変動に関する科学的知見を評価・提供する国連の組織。自ら研究は行わない。",
  },
  {
    id: 87, category: "国際・条約",
    word: "UNFCCC", english: "United Nations Framework Convention on Climate Change",
    definition: "国連気候変動枠組条約。1992年のリオ地球サミットで採択。年次のCOP（締約国会議）を開催する。",
  },
  {
    id: 88, category: "国際・条約",
    word: "COP（締約国会議）", english: "Conference of the Parties",
    definition: "UNFCCCの締約国が集まる年次会議。COP21でパリ協定、COP26でグラスゴー気候合意が採択された。",
  },
  {
    id: 89, category: "国際・条約",
    word: "グローバルストックテイク", english: "Global Stocktake",
    definition: "パリ協定に基づき、気候変動対策の世界全体の進捗を5年ごとに評価する仕組み。第1回は2023年COP28で実施。",
  },
  {
    id: 90, category: "国際・条約",
    word: "欧州グリーンディール", english: "European Green Deal",
    definition: "2050年までに欧州を世界初の「気候中立な大陸」にすることを目標とするEUの成長戦略。Fit for 55も含む。",
  },
  {
    id: 91, category: "国際・条約",
    word: "IEA（国際エネルギー機関）", english: "International Energy Agency",
    definition: "エネルギー安全保障の確保・エネルギー統計の収集・クリーンエネルギー転換の支援などを行う国際機関。",
  },
  {
    id: 92, category: "国際・条約",
    word: "IRENA", english: "International Renewable Energy Agency",
    definition: "国際再生可能エネルギー機関。再生可能エネルギーの普及促進・持続可能なエネルギー転換の支援を行う国際機関。",
  },
  {
    id: 93, category: "国際・条約",
    word: "損失と損害", english: "Loss and Damage",
    definition: "気候変動の影響で途上国が被る回避できない損失・損害への補償・支援を求める概念。COP27で基金設立が合意。",
  },
  {
    id: 94, category: "国際・条約",
    word: "共通だが差異ある責任", english: "Common But Differentiated Responsibilities (CBDR)",
    definition: "気候変動対策において、すべての国が責任を持つが、歴史的排出量や経済力に応じて責任の程度は異なるという原則。",
  },
  {
    id: 95, category: "国際・条約",
    word: "米国インフレ削減法（IRA）", english: "Inflation Reduction Act",
    definition: "2022年に成立した米国の法律。クリーンエネルギー・EV・省エネへの大規模投資・税額控除を通じてGHG削減を促進。",
  },
  {
    id: 96, category: "国際・条約",
    word: "GRI スタンダード", english: "GRI Standards",
    definition: "企業・組織のサステナビリティ（ESG）情報開示に関する国際的な報告基準。世界で最も広く使用されている。",
  },
  {
    id: 97, category: "国際・条約",
    word: "SDGs", english: "Sustainable Development Goals",
    definition: "持続可能な開発目標。2015年に国連で採択された2030年を達成期限とする17の目標と169のターゲット。",
  },
  {
    id: 98, category: "国際・条約",
    word: "カーボンリーケージ", english: "Carbon Leakage",
    definition: "炭素規制が厳しい国から規制の緩い国へ生産が移転し、世界全体の温室効果ガス排出量が増加する問題。",
  },
  {
    id: 99, category: "国際・条約",
    word: "気候正義", english: "Climate Justice",
    definition: "気候変動の原因に最も責任が少ないにもかかわらず最も大きな影響を受ける途上国・脆弱なコミュニティへの公平な対応を求める概念。",
  },
  {
    id: 100, category: "国際・条約",
    word: "エネルギートランジション", english: "Energy Transition",
    definition: "化石燃料を中心としたエネルギーシステムから、再生可能エネルギーを中心とした低炭素・脱炭素エネルギーシステムへの移行。",
  },
  {
    id: 101, category: "企業・経営",
    word: "ESG経営", reading: "ESGけいえい",
    definition: "環境（E）・社会（S）・ガバナンス（G）の観点を経営に統合し、長期的な企業価値向上を目指す経営スタイル。",
  },
  {
    id: 102, category: "企業・経営",
    word: "サステナビリティ報告書", reading: "サステナビリティほうこくしょ",
    definition: "企業が環境・社会・ガバナンスに関する取り組みや実績を開示する報告書。CSRレポートとも呼ばれる。",
  },
  {
    id: 103, category: "企業・経営",
    word: "統合報告書", reading: "とうごうほうこくしょ", english: "Integrated Report",
    definition: "財務情報と非財務情報（ESG）を統合して企業の価値創造ストーリーを伝える報告書。",
  },
  {
    id: 104, category: "企業・経営",
    word: "PDCA",
    definition: "Plan（計画）・Do（実行）・Check（評価）・Act（改善）のサイクル。脱炭素経営の推進にも活用される。",
  },
  {
    id: 105, category: "政策・制度",
    word: "トップランナー制度",
    definition: "市場で最も省エネ性能が高い製品の性能を基準として、将来の省エネ基準を設定する日本独自の制度。",
  },
  {
    id: 106, category: "技術・イノベーション",
    word: "洋上風力発電", reading: "ようじょうふうりょくはつでん", english: "Offshore Wind Power",
    definition: "海上に設置した風力発電設備。陸上より強く安定した風が得られ、大規模開発が可能。着床式と浮体式がある。",
  },
  {
    id: 107, category: "技術・イノベーション",
    word: "地熱発電", reading: "ちねつはつでん", english: "Geothermal Power",
    definition: "地球内部の熱エネルギーを利用した発電。天候・季節・昼夜に左右されず安定した発電（ベースロード電源）が可能。",
  },
  {
    id: 108, category: "企業・経営",
    word: "GHGプロトコル", english: "GHG Protocol",
    definition: "温室効果ガスの排出量を算定・報告するための国際的な基準。Scope1・2・3の分類を定めている。",
  },
  {
    id: 109, category: "金融・投資",
    word: "気候変動訴訟", english: "Climate Litigation",
    definition: "企業・政府に対して気候変動対策の不作為・不十分な開示などを理由に法的責任を問う訴訟。世界的に件数が増加。",
  },
  {
    id: 110, category: "政策・制度",
    word: "脱炭素先行地域", reading: "だつたんそせんこうちいき",
    definition: "2025年度までに民生部門の電力消費に伴うCO2排出実質ゼロを達成し、地域課題の解決と脱炭素化を同時に実現する地域。",
  },
];
