import type { SevenNewsPage } from '../types/news';

const sevenNewsContent: SevenNewsPage = {
  hero: {
    title: 'Virufyに関連するニュース',
    subtitle:
      'Virufyは、AIを活用した呼吸器ヘルススクリーニングを通じて、ヘルスケアをより身近にすることを目指しています。最新ニュースやプレスリリース、メディア掲載情報を通じて、私たちの取り組みをお届けします。',
    bgImage: '/icons/icon-news-bg.png',
    tag: 'Media Coverage',
    tagIcon: '/icons/icon-media.png',
  },
  pillSelector: {
    options: [
      { id: 'news', label: 'ニュース' },
      { id: 'publications', label: '論文・出版物' },
      { id: 'blogs', label: 'ブログ' },
    ],
    defaultOption: 'news',
  },

  filters: {
    filterByYearLabel: '年で絞り込む:',
    allYearsOption: 'すべての年',
    sortByLabel: '並び替え：',
    newestFirst: '新しい順',
    oldestFirst: '古い順',
  },

  section5: {
    title: 'この取り組みに共感したら、私たちと一緒に次の一歩をつくりませんか。',
    text: '研究者、デザイナー、エンジニア、支援者など、さまざまなメンバーが協力しながら、世界の呼吸器ヘルスの向上に取り組んでいます。',
    button: 'チームに参加する',
  },

  emptyMessage: '該当するニュース記事はありません。',

  newsCards: [
    {
      title: 'Wiley Online Libraryに論文を掲載',
      date: '2026年7月',
      subText:
        'ダブル・ピボット：大学発ヘルスケアAIベンチャーにおけるNSF I-Corps顧客発見プロセスの混合研究法によるケーススタディ',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      url: 'https://onlinelibrary.wiley.com/doi/10.1002/jsc.70107',
      year: 2026,
    },
    {
      title:
        'スイス、米国、エジプトの3つの大学発ベンチャーが、ドバイで実証実験および商業化段階へ移行',
      date: '2026年5月',
      subText: '',
      url: 'prototypesforhumanity.com/press-releases/press/Universityventures',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2026,
    },
    {
      title:
        'インドネシア大学公衆衛生学部、呼吸器健康分野におけるAI技術開発に向けてVirufyとの戦略的協力を検討',
      date: '2026年6月',
      subText: '',
      url: 'fkm.ui.ac.id/en/fph-ui-explores-strategic-collaboration-with-virufy-to-develop-ai-technology-in-respiratory-health',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2026,
    },
    {
      title:
        '創設者アミル・カンザダからのメッセージ：シリコンバレーから教室へ ― 福井大学での初めての講義',
      date: '2026年6月',
      subText: '',
      url: '/en/sevennews/amil-june-2026',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2026,
    },
    {
      title:
        'AIで小児医療を前進させる：Virufy × Emirates Health Services（EHS）、WHXドバイ2026に出展！',
      date: '2026年4月',
      subText: '',
      url: '/en/sevennews/whx-dubai-2026',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2026,
    },
    {
      title:
        'スイス、米国、エジプトの3つの大学発ベンチャーが、ドバイで実証実験および商業化段階へ移行',
      date: '2026年5月',
      subText: '',
      url: 'https://www.prototypesforhumanity.com/press-releases/press/Universityventures',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2026,
    },
    {
      title:
        'インドネシア大学公衆衛生学部、呼吸器健康分野におけるAI技術開発に向けてVirufyとの戦略的協力を検討',
      date: '2026年6月',
      subText: '',
      url: 'https://fkm.ui.ac.id/en/fph-ui-explores-strategic-collaboration-with-virufy-to-develop-ai-technology-in-respiratory-health/',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2026,
    },
    {
      title:
        '創設者アミル・カンザダからのメッセージ：シリコンバレーから教室へ ― 福井大学での初めての講義',
      date: '2026年6月',
      subText: '',
      url: '/en/sevennews/amil-june-2026',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2026,
    },
    {
      title: 'GITEXグローバル2025 - ドバイヘルス',
      date: '2025年10月',
      subText: '',
      url: '/en/sevennews/gitex-global-2025-dubai',
      contentType: 'news',
      image: '/images/sevenNews/news/oct_2025.png',
      year: 2025,
    },
    {
      title: 'Virufy、アブダビでAI呼吸器スクリーニングの成功例を展示',
      date: '2025年6月',
      subText: '',
      url: '/en/sevennews/uae-adghw-apr-2025',
      contentType: 'news',
      image: '/images/sevenNews/news/june_2025.png',
      year: 2025,
    },
    {
      title:
        'Virufy、2024年ドバイのPrototypes for Humanityで革新的なCOVID-19スクリーニング技術を披露',
      date: '2024年11月',
      subText: '',
      url: '/en/sevennews/press-release-dubai',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2024,
    },
    {
      title:
        'Virufyベータ版アプリがコロンビアでリリース、4,500人のユーザーに自宅でCOVID-19検出を提供',
      date: '2023年2月',
      subText: '',
      url: '/en/sevennews/beta-app-release-2023',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2023,
    },
    {
      title:
        'BARDA、視覚および聴覚症状に基づく感染症検出のための新しいAI/MLデジタルアプリの開発を支援',
      date: '2022年11月',
      subText: '医療対策、アメリカ合衆国',
      url: 'https://medicalcountermeasures.gov/newsroom/2022/ai_ml/',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2022,
    },
    {
      title:
        'このアプリは電話の前で咳をするだけでCOVID-19を診断することを目指しています',
      date: '2021年2月',
      subText: 'Forbes, メキシコ',
      url: 'https://www.forbes.com.mx/emprendedores-app-diagnostico-covid-19-toser-telefono/',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2021,
    },
    {
      title: 'COVID-19: Virufyアプリは咳の分析を通じてウイルスを診断可能',
      date: '2021年1月',
      subText: 'MSN',
      url: 'https://www.americatv.com.pe/noticias/actualidad/covid-19-aplicativo-virufy-puede-diagnosticar-virus-mediante-analisis-tiene-precision-80-y-no-reemplazara-pruebas-diagnostico-grado-hospitalario-tos-n433332',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2021,
    },
    {
      title: 'VIRUFY: COVID-19に感染しているかどうかを検出するプラットフォーム',
      date: '2020年10月',
      subText: 'Expreso, リマ, ペルー',
      url: 'https://www.expreso.com.pe/actualidad/virufy-plataforma-que-permite-detectar-si-estamos-contagiados-con-covid-19/',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2020,
    },
    {
      title: 'One Young World日本アンバサダーがAIを活用してCOVID-19に挑む',
      date: '2020年5月',
      subText: 'One Young World, 東京, 日本',
      url: 'https://oywj.org/ambassadors-in-action/2020/05/oywj-ambassador-targets-covid-19-using-ai/',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2020,
    },
    {
      title: 'COVID-19対応の最前線に立つ北米アンバサダーたち',
      date: '2020年',
      subText: 'One Young World',
      url: 'https://www.oneyoungworld.com/north-american-ambassadors-frontlines-covid-19-response',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2020,
    },
    {
      title: '7月のアンバサダー・オブ・ザ・マンス',
      date: '2020年7月',
      subText: 'One Young World',
      url: 'https://www.oneyoungworld.com/news-item/july-2020-ambassadors-month',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2020,
    },
    {
      title:
        '7月に開催されたOYWのグローバルデジタルイベントに数千人が参加：見逃した内容を振り返る',
      date: '2020年7月',
      subText: 'One Young World',
      url: 'https://www.oneyoungworld.com/news-item/thousands-attend-oyws-global-digital-events-july-recap-what-youve-missed',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2020,
    },
    {
      title: 'One Young World東京2020カーカス',
      date: '2020年',
      subText: 'One Young World',
      url: 'https://www.oneyoungworld.com/event/one-young-world-tokyo-caucus-2020',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2020,
    },
    {
      title: 'One Young World東京2020カーカスでのVirufyプレゼンテーション',
      date: '2020年',
      subText: 'One Young World, 東京, 日本',
      url: 'https://youtu.be/UZU3rPTEPfU',
      contentType: 'news',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2020,
    },
  ],
};

export default sevenNewsContent;
