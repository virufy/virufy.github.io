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
      title:
        '新しいCOVID-19計算機を使用した、COVID-19事前スクリーニングソリューション（AI/ML）の米国の社会経済的影響の測定',
      date: '2022年1月',
      url: 'https://arxiv.org/abs/2201.11109',
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
    {
      title: 'Fusical: マルチモーダル融合によるビデオ感情分析',
      date: '2020年10月',
      url: 'https://dl.acm.org/doi/abs/10.1145/3382507.3417966',
      linkText: '続きを読む',
    },
    {
      title: 'ディープラーニングによる表情認識',
      date: '2020年4月',
      url: 'https://arxiv.org/abs/2004.11823',
      linkText: '続きを読む',
    },
    {
      title:
        'スマートフォンベースのAIデータ収集における臨床試験参加登録の改善：ナッジ（行動経済学的介入）に基づく介入の方法論的分析',
      date: '2025年12月',
      url: 'https://sabeconomics.org/ojs/index.php/jbep/article/view/232',
      linkText: '続きを読む',
    },
  ],
  collaborateSection: {
    title: '私たちの研究に協力しませんか？',
    linkText: 'チームに参加',
  },
};

export default publications;
