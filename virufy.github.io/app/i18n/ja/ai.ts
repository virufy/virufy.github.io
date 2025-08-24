import { type Ai } from '../types/ai';

const ai: Ai = {
  heroSection: {
    title: [
      {
        type: 'text',
        text: '科学的根拠に基づく ',
      },
      {
        type: 'span',
        text: 'Virufy',
      },
    ],
    text: '人工知能（AI）は、声のパターンの微小な違いを検出して、病気の存在を検知する能力があります。',
    url: '/publications',
    linkText: '私たちの研究',
  },
  aiSection: {
    title: 'AIはどのように機能するのか？',
    aiCards: [
      {
        title: '01',
        text: '私たちの画期的なアプリは、ディープラーニングアルゴリズムと音声信号処理技術を使用して、呼吸パターンを分析する最先端のAI技術を活用しています。',
        style: 'tracking-widest text-[2.5rem] sm:text-6xl',
      },
      {
        title: '02',
        text: 'AIは、咳の持続時間、頻度、音程など、さまざまな要素を精査します。包括的なデータベースを利用して、記録された咳のパターンを呼吸器疾患の既存の指標と慎重に比較し、潜在的な健康問題の早期発見を可能にします。',
        style: 'text-[2.5rem] sm:text-6xl',
      },
    ],
  },
};

export default ai;
