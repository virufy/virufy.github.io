// Need to be translated to JA
import type { PublicationsPage } from '../types/publications';

const PublicationsContent: PublicationsPage = {
  hero: {
    title: 'Virufy Publications',
    subtitle:
      'Explore our peer-reviewed research, academic publications, and scientific studies advancing the field of AI-powered respiratory disease detection through innovative cough analysis technology.',
    bgImage: '/icons/icon-news-bg.png',
    tag: 'Research',
    tagIcon: '/icons/icon-research.png',
  },
  pillSelector: {
    options: [
      { id: 'news', label: 'News' },
      { id: 'publications', label: 'Publications' },
      { id: 'blogs', label: 'Blogs' },
    ],
    defaultOption: 'publications',
  },

  filters: {
    filterByYearLabel: 'Filter by Year:',
    allYearsOption: 'All Years',
    sortByLabel: 'Sort by:',
    newestFirst: 'Newest to Oldest',
    oldestFirst: 'Oldest to Newest',
  },

  section5: {
    title: 'Inspired by the work? Help shape what comes next.',
    text: 'Join researchers, designers, engineers, and advocates working together to advance global respiratory health.',
    button: 'Join Our Team',
  },

  emptyMessage: 'No news articles found for the selected filters.',

  newsCards: [
    {
      title: 'Virufy White Paper 2026',
      date: 'June 2026',
      subText: '',
      url: '/en/publications/virufy-white-paper-2026',
      contentType: 'publications',
      image: '/images/sevenNews/Placeholder-Card.png',
      year: 2026,
    },
    {
      title:
        'アクティブラーニングとセグメンテーションによるデータ効率の高い咳分析',
      date: '2026年3月',
      subText: '',
      url: 'https://virufy.org/en/publications/data-efficient-cough-ai/',
      contentType: 'publications',
      image: '/images/sevenNews/publications/march_8_2026.png/',
      year: 2026,
    },
    {
      title:
        'スマートフォンベースのAIデータ収集における臨床試験参加登録の改善：ナッジ（行動経済学的介入）に基づく介入の方法論的分析',
      date: '2025年12月',
      subText: '',
      url: 'https://sabeconomics.org/ojs/index.php/jbep/article/view/232',
      contentType: 'publications',
      image: '/images/sevenNews/publications/December_21_2025.png',
      year: 2025,
    },
    {
      title: 'COVID-19自動検出のための階層型マルチモデルトランスフォーマー',
      date: '2022年10月',
      subText: '',
      url: 'https://dl.acm.org/doi/10.1145/3556384.3556414',
      contentType: 'publications',
      image: '/images/sevenNews/publications/October_29_2022.png',
      year: 2022,
    },
    {
      title: 'Covid 19計算機 -- 米国の社会経済に与えるポジティブな影響',
      date: '2022年1月',
      subText: '',
      url: 'https://arxiv.org/abs/2201.11109',
      contentType: 'publications',
      image: '/images/sevenNews/publications/January_21_2022.png',
      year: 2022,
    },
    {
      title:
        '咳からCOVID-19を分類するための大規模集約データセットを用いたディープラーニング',
      date: '2022年1月',
      subText: '',
      url: 'https://arxiv.org/abs/2201.01669',
      contentType: 'publications',
      image: '/images/sevenNews/publications/January_5_2022.png',
      year: 2022,
    },
    {
      title: 'COVID-19咳AIシステムの展開における課題と機会',
      date: '2021年9月',
      subText: '',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8421112/',
      contentType: 'publications',
      image: '/images/sevenNews/publications/September_7_2021.png',
      year: 2021,
    },
    {
      title:
        'Virufy: 咳からCOVID-19を検出するAIのためのクラウドソーシングおよび臨床データセットのグローバル適用性',
      date: '2020年11月',
      subText: '',
      url: 'https://ui.adsabs.harvard.edu/abs/2020arXiv201113320C/abstract',
      contentType: 'publications',
      image: '/images/sevenNews/publications/November_26_2020.png',
      year: 2020,
    },
    {
      title: 'Fusical: マルチモーダル融合によるビデオ感情分析',
      date: '2020年10月',
      subText: '',
      url: 'https://dl.acm.org/doi/abs/10.1145/3382507.3417966',
      contentType: 'publications',
      image: '/images/sevenNews/publications/October_22_2020.png',
      year: 2020,
    },
    {
      title: 'ディープラーニングによる表情認識',
      date: '2020年4月',
      subText: '',
      url: 'https://arxiv.org/abs/2004.11823',
      contentType: 'publications',
      image: '/images/sevenNews/publications/April_8_2020.png',
      year: 2020,
    },
  ],
};

export default PublicationsContent;
