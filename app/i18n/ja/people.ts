import {} from '@/public/images/advisors';
import { type People } from '../types/people';


const people: People = {
  titleImage: '私たちは世界中から団結し、咳一つ一つから感染症を克服します。',
  sectionMeetOurFounder: {
    titleMeetOurFounder: '創設者',
    titleAmil: 'アミル・カンザダ',
    textAmil:
      '福井大学 工学博士課程 在籍。カリフォルニア大学バークレー校で、MBAおよび工学修士（データサイエンス）の共同学位プログラムを取得。',
    button: 'アミルのストーリーを読む',
  },
  sectionAdvisors: {
    title: 'アドバイザー',
    advisors: {
      kara: {
        img: './../images/advisors/kara-meister.webp',
        name: 'カラ・マイスター医学博士',
        role: '臨床アドバイザー',
        texts: ['スタンフォード大学 臨床准教授（医学部 耳鼻咽喉科）'],
        link: 'https://www.linkedin.com/in/kara-meister-200335110/',
      },
      jure: {
        img: './../images/advisors/jure-leskovec.webp',
        name: 'ジュレ・レスコベック博士',
        role: '人工知能アドバイザー',
        texts: [
          'Pinterestチーフサイエンティスト',
          'スタンフォード大学 准教授（人工知能）',
        ],
        link: 'https://www.linkedin.com/in/leskovec/',
      },
      melissa: {
        img: './../images/advisors/melissa-dyrdahl.webp',
        name: 'メリッサ・ダーダル',
        role: '経営マーケティングアドバイザー',
        texts: [
          '元Adobe最高マーケティング責任者（CMO）',
          'CommonSpirit Health 理事',
        ],
        link: 'https://dci.stanford.edu/melissa-dyrdahl/',
      },
      kutsuna: {
        img: './../images/advisors/kutsuna-satoshi.webp',
        name: '忽那賢志',
        role: '経営臨床アドバイザー',
        texts: ['大阪大学 教授（感染制御学）'],
        link: 'https://www.med.osaka-u.ac.jp/eng/introduction/research/special/infection',
      },
      glenn: {
        img: './../images/advisors/glenn-muschert.webp',
        name: 'グレン・マシャート教授',
        role: 'ソーシャルサイエンス & 公共政策アドバイザー',
        texts: [
          'ラブ首長国連邦 ハリファ大学 教授（公衆衛生学・疫学）',
          'コロラド大学 ボルダー校 博士（社会学）',
        ],
        link: 'https://www.ku.ac.ae/college-people/glenn-muschert',
      },
      thomas: {
        img: './../images/advisors/thomas-mahoney.webp',
        name: 'トーマス・マホニー',
        role: 'ビジネス & 公衆衛生アドバイザー',
        texts: [
          'ハーバード大学 研究員（感染症学部）',
          'ペンシルベニア大学 ウォートン・スクール MBA',
        ],
        link: 'https://www.linkedin.com/in/tom-mahoney-lifesci/',
      },
      madhav: {
        img: './../images/advisors/madhav-datt.webp',
        name: 'マダフ・ダット',
        role: 'NPOアドバイザー',
        texts: [
          'Green the Gene 創設者',
          '国連環境計画（UNEP） 元青年グローバル代表',
          'ハーバード・ビジネス・スクール MBA',
        ],
        link: 'https://www.linkedin.com/in/madhavdatt/',
      },
      may: {
        img: './../images/advisors/may-xu.webp',
        name: 'メイ・シュー',
        role: 'データ & AI プロダクト戦略アドバイザー',
        texts: ['創業者 / エグゼクティブコーチ', 'スタンフォード大学 修士（理学）'],
        link: 'https://www.linkedin.com/in/may-xu-bb06934',
      },
      zafar: {
        img: './../images/advisors/zafar-shahid.webp',
        name: 'ザファル・シャヒッド',
        role: 'テクノロジーアドバイザー',
        texts: [
          'Green AI リーダー（元 NVIDIA、元 Meta）',
          'モンペリエ大学 博士（マルチメディアフォレンジック）',
        ],
        link: 'https://zafarshahid.com/',
      },
      rafi: {
        img: './../images/advisors/rafi-azim-khan.webp',
        name: 'ラフィ・アジム・カーン',
        role: '法務アドバイザー',
        texts: [
          'Crowell & Moring LLP 欧州デジタル法統括パートナー',
          'ロンドン大学 クイーン・メアリー校 学士（法学）',
        ],
        link: 'https://www.crowell.com/en/professionals/rafi-azim-khan',
      },
      ronan: {
        img: './../images/advisors/ronan-dunlop.webp',
        name: 'ローナン・ダンロップ',
        role: 'マーケティングアドバイザー',
        texts: [
          '元Pivotal / VMWare マーケティング本部長',
          'Cohuman マーケティング担当 副社長',
        ],
        link: 'https://www.linkedin.com/in/rdunlop/',
      },
      mark: {
        img: './../images/advisors/mark-haseltine.webp',
        name: 'マーク・ハゼルタイン',
        role: '顧問',
        texts: ['元edX、GoDaddy CTO/CPO', 'マサチューセッツ工科大学 学士（コンピュータサイエンス）'],
        link: 'https://www.linkedin.com/in/mhaseltine/',
      },
      faisal: {
        img: './../images/advisors/faisal-cheema.webp',
        name: 'ファイサル・チェーマ',
        role: '臨床アドバイザー',
        texts: [
          'ヒューストン大学 准教授 （ティルマン J. フェルティッタ医学部 生物医学・臨床科学）',
        ],
        link: 'https://www.linkedin.com/in/doccheema/',
      },
      mert: {
        img: './../images/advisors/mert-pilanci.webp',
        name: 'メルト・ピランジ',
        role: '人工知能アドバイザー',
        texts: ['スタンフォード大学 助教（電気工学科人工知能）'],
        link: 'https://stanford.edu/~pilanci/',
      },
      tetsuji: {
        img: './../images/advisors/tetsuji-madarame.webp',
        name: '斑目哲司',
        role: '本郵船 技術企画 主席フェロー',
        texts: [
          '投資諮問委員会 メンバー, theDOCK（海事・物流テックVC）',
          'スタンフォード大学 経営大学院（GSB） MBA',
        ],
        link: 'https://www.linkedin.com/in/tetsuji-madarame-6a337916b',
      },
      victor: {
        img: './../images/advisors/victor-wang.webp',
        name: 'ヴィクター・ワン',
        role: '顧問',
        texts: [
          'China Silicon Valley 創設者・会長',
          'スタンフォード大学 経営大学院 MBA',
        ],
        link: 'https://www.linkedin.com/in/executivestanfordvictorwang/',
      },
      adam: {
        img: './../images/advisors/adam-leipzig.webp',
        name: 'アダム・ライプチヒ',
        role: '顧問',
        texts: [
          'Entertainment Media Partners CEO',
          '元ナショナルジオグラフィックフィルムズ 社長',
          'カリフォルニア大学 バークレー校 教員（ハース経営大学院）',
        ],
        link: 'https://www.linkedin.com/in/adamleipzig/',
      },
      rok: {
        img: './../images/advisors/rok-sosic.webp',
        name: 'ロック・ソシッチ',
        role: '人工知能アドバイザー',
        texts: ['スタンフォード大学 主任研究助手（工学部）'],
        link: 'https://scholar.google.com/citations?user=xlZ4YJcAAAAJ&hl=en&oi=ao',
      },
      richard: {
        img: './../images/advisors/richard-nall.webp',
        name: 'リチャード・ナル',
        role: 'マーケティイングアドバイザー',
        texts: [
          'The Brand Garden 最高経営責任者（CEO）',
          'ヘンリー大学 組織リーダーシップ 修士（M.A.）',
        ],
        link: 'https://www.linkedin.com/in/richardnall/',
      },
      khwaja: {
        img: './../images/advisors/khwaja-shaik.webp',
        name: 'クワジャ・シェイク',
        role: '最高技術責任者（CTO）',
        texts: [
          'IBM / MOSH 副会長・理事',
          'ノースフロリダ大学 コンピューティング学部 理事',
        ],
        link: 'https://www.linkedin.com/in/khwajashaik/',
      },
      ayomide: {
        img: './../images/advisors/ayomide-owoyemi.webp',
        name: 'アヨミデ・オウォイェミ',
        role: '臨床アドバイザー',
        texts: [
          'One Young World ナイジェリア 大使',
          'イリノイ大学シカゴ校 生物医学科学 博士（Ph.D.）',
        ],
        link: 'https://www.linkedin.com/in/ayomide-owoyemi/',
      },
      tsutomu: {
        img: './../images/advisors/tsutomu-ito.webp',
        name: '伊藤努',
        role: '経営ビジョンアドバイザー',
        texts: ['丹南FMラジオ 創設者', '新幹線 主任設計者'],
        link: 'http://tannan.fm/contents/about-us.html',
      },
      les: {
        img: './../images/advisors/les-atlas.webp',
        name: 'レス・アトラス博士',
        role: '主任研究者',
        texts: [
          'ワシントン大学 教授（電気・コンピュータ工学）',
          'スタンフォード大学 博士（電気工学）',
        ],
        link: 'https://people.ece.uw.edu/atlas/',
      },
      jesse: {
        img: './../images/advisors/jesse-bump.webp',
        name: 'ジェシー・バンプ博士',
        role: '公衆衛生アドバイザー',
        texts: ['ハーバード大学 T.H.チャン公衆衛生大学院 グローバルヘルス・人口学部'],
        link: 'https://www.hsph.harvard.edu/jesse-bump/',
      },
      nobuyo: {
        img: './../images/advisors/nobuyo-ozawa.webp',
        name: '小澤信代',
        role: '臨床開発統括責任者',
        texts: ['CRO 臨床開発部 部長'],
        link: 'https://www.linkedin.com/in/nobuyo-ozawa-223707113',
      },
      hiroyuki: {
        img: './../images/advisors/hiroyuki-kunishima.webp',
        name: '國島広之',
        role: '感染症アドバイザー',
        texts: ['聖マリアンナ医科大学病院 感染症科'],
        link: 'http://www.k-icnet.org/profile.html',
      },
      fumihiko: {
        img: './../images/advisors/fumihiko-yokota.webp',
        name: '横田文彦',
        role: '公衆衛生アドバイザー',
        texts: ['九州大学 准教授（疫学）'],
        link: 'https://q-aos.kyushu-u.ac.jp/en/staff/1770/',
      },
      kohei: {
        img: './../images/advisors/kohei-wakamiya.webp',
        name: '若宮幸平',
        role: '音響AIアドバイザー',
        texts: ['九州大学 助教（音響設計）'],
        link: 'https://hyoka.ofc.kyushu-u.ac.jp/html/100021188_ja.html',
      },
      tamer: {
        img: './../images/advisors/tamer-fahmy.webp',
        name: 'タメル・ファハミー',
        role: '中東・アフリカ市場アドバイザー',
        texts: [
          '元ドレーゲル/フィリップスメドテック 睡眠・呼吸ケア部門',
          'SP Jain グローバル経営大学院 MBA',
          'カイロ大学学士（生物医学工学）',
        ],
        link: 'https://ae.linkedin.com/in/tamer-fahmy-b44686114',
      },
      shirin: {
        img: './../images/advisors/shirin-hasan.webp',
        name: 'シリン・ハサン',
        role: '臨床・医療・薬事アドバイザー',
        texts: [
          '元メドトロニック 臨床部門長',
          'サンノゼ州立大学／スタンフォード大学 修士（生化学）',
        ],
        link: 'https://www.linkedin.com/in/shirinhasan/',
      },
      maurino: {
        img: './../images/advisors/Maurino-Flora.webp',
        name: 'マウリノ・フローラ',
        role: '医療機器プログラムアドバイザー',
        texts: [
          'Apomed Consultants マネージングディレクター',
          'サンタクララ大学 工学マネジメント 修士（M.S.）',
        ],
        link: 'https://www.linkedin.com/in/maurino-f-a230971/',
      },
      amir: {
        img: './../images/advisors/amir-khan.webp',
        name: 'アミール・カーン',
        role: 'エグゼクティブ・グラヴィタスアドバイザー',
        texts: [
          'Digital Gravitas Silicon Valley 最高経営責任者（CEO）',
          'イタリア モーダ・ブルゴ学院（ミラノ）',
        ],
        link: 'https://www.linkedin.com/in/the-amir-khan/',
      },
    },
    advisorOrder: [
      'adam',
      'ayomide',
      'faisal',
      'fumihiko',
      'glenn',
      'hiroyuki',
      'jure',
      'jesse',
      'kara',
      'khwaja',
      'kohei',
      'kutsuna',
      'les',
      'madhav',
      'mark',
      'may',
      'melissa',
      'mert',
      'nobuyo',
      'rafi',
      'richard',
      'rok',
      'ronan',
      'shirin',
      'tamer',
      'tetsuji',
      'thomas',
      'tsutomu',
      'victor',
      'zafar',
      'maurino',
      'amir',
    ],
  },
};


export default people;



