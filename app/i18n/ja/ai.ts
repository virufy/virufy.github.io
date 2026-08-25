import { type Ai } from '../types/ai';

const Ai: Ai = {
  heroSection: {
    tag: 'AIを活用したヘルステクノロジー',
    title: [
      { type: 'text', text: 'Virufyを支える ' },
      { type: 'span', text: '科学技術' },
      { type: 'text', text: '' },
    ],
    text: 'VirufyのAIテクノロジーは、咳の音に潜むわずかなパターンを解析し、身体への負担なく潜在的な呼吸器疾患の早期発見をサポートします。',
    aiSlides: [
      {
        title: 'データの収集',
        text: 'ウェブアプリで、短い咳を録音するだけです。画面の案内に沿って録音することで、一定の条件下で自然な咳サンプルを高音質で取得でき、呼吸器の解析に適したデータを取得します。',
        image: '/images/ai/carousel-image-1.webp',
      },
      {
        title: '音声信号の処理',
        text: '私たちは機械学習（ML）アルゴリズムを用いて、録音データから咳音を識別し、必要な部分を抽出します。背景のノイズを取り除き、音波を数値化した「音響バイオマーカー特徴量」へ変換することで、デジタルバイオマーカーを解析します。',
        image: '/images/ai/carousel-image-2.webp',
      },
      {
        title: '機械学習による解析',
        text: '抽出された音響バイオマーカー特徴量は、事前に学習済みの機械学習モデルに入力されます。モデルは、新しく入力された咳の特徴を、学習済みのパターンと比較します。',
        image: '/images/ai/carousel-image-3.webp',
      },
    ],
  },

  aiSection: {
    title: 'VirufyのAIの学習プロセス',
    text: '人工知能（AI）は、音声パターンに含まれるごくわずかな違いを捉え、呼吸器疾患に関連しうる特徴を評価することができます。アルゴリズムは、持続時間、周波数、ピッチなど、咳のさまざまな要素を詳細に調べます。さらに、包括的なデータベースを活用し、録音された咳のパターンを呼吸器疾患に関連する既知の指標と照合することで、潜在的な健康問題の早期発見につながる情報を提供します。',

    aiCards: [
      {
        title: '音声の取得',
        text: 'ユーザーはVirufyのアプリを通じて、匿名化された短い咳のサンプルを録音します。',
        icon: '/icons/icon-ai-sound.png',
        style: 'shadow-xl w-full h-full',
      },
      {
        title: '音響処理',
        text: 'それぞれの咳は、視覚的なサウンドマップ（スペクトログラム）に変換されます。',
        icon: '/icons/icon-ai-acoustic.png',
        style: 'shadow-xl h-full',
      },
      {
        title: '特徴の抽出',
        text: 'AIがデータ内のわずかなパターンや音響バイオマーカーを特定します。',
        icon: '/icons/icon-ai-feature.png',
        style: 'shadow-xl w-full h-full',
      },
      {
        title: 'モデルの学習',
        text: 'アルゴリズムは世界各地のデータセットから学習し、精度と公平性を向上させます。',
        icon: '/icons/icon-ai-model.png',
        style: 'shadow-xl h-full',
      },
      {
        title: '検証とインサイト',
        text: '継続的な改善と性能の向上のため、ユーザーの解析結果は検証に活用されます。',
        icon: '/icons/icon-ai-validation.png',
        style: 'shadow-xl w-full h-full',
      },
    ],
  },

  banner: {
    title: '一緒に世界を変えませんか？',
    text: '私たちは、ヘルススクリーニングを「咳をするだけ」の簡単なものにすることをミッションとしています。皆様からのご支援が、私たちの臨床研究を加速させ、利用しやすいAI技術を世界中のコミュニティへ展開するためにどのように役立てられるのか、ぜひご覧ください。',
    buttonText: 'ご支援のお願い',
    url: '/ja/donate',
  },
};

export default Ai;
