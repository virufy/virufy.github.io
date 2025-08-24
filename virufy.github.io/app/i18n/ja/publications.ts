import { type Publications } from '../types/publications';

const publications: Publications = {
  publicationsSection: {
    title: '出版物',
    texts: [
      '以下では、Virufyの開発とその科学的根拠を示すいくつかの論文をご覧いただけます。',
    ],
  },
  publicationsCards: [
    {
      title: 'COVID-19自動検出のための階層型マルチモデルトランスフォーマー',
      date: '2022年10月',
      url: 'https://dl.acm.org/doi/10.1145/3556384.3556414',
      linkText: '続きを読む',
    },
    {
      title: 'Covid 19計算機 -- 米国の社会経済に与えるポジティブな影響',
      date: '2022年1月',
      url: 'https://arxiv.org/abs/2201.11109',
      linkText: '続きを読む',
    },
    {
      title:
        '咳からCOVID-19を分類するための大規模集約データセットを用いたディープラーニング',
      date: '2022年1月',
      url: 'https://arxiv.org/abs/2201.01669',
      linkText: '続きを読む',
    },
    {
      title: 'COVID-19咳AIシステムの展開における課題と機会',
      date: '2021年9月',
      url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8421112/',
      linkText: '続きを読む',
    },
    {
      title:
        'Virufy: 咳からCOVID-19を検出するAIのためのクラウドソーシングおよび臨床データセットのグローバル適用性',
      date: '2020年11月',
      url: 'https://ui.adsabs.harvard.edu/abs/2020arXiv201113320C/abstract',
      linkText: '続きを読む',
    },
  ],
  collaborateSection: {
    title: '私たちの研究に協力しませんか？',
    linkText: 'チームに参加',
  },
};

export default publications;
