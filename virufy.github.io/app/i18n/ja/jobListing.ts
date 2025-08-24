import { type JobListing } from '../types/jobListing';

const jobListing: JobListing = {
  titleImage:
    'Virufyはすべてボランティアとプロボノパートナー企業によって運営されています。',
  title: '私たちの使命',
  text: 'Virufyに参加し、COVID-19と戦う画期的なグローバル活動の一翼を担いましょう！革新的な非営利コンソーシアムとして、私たちは25か国以上の専門家を集め、ウイルス検出のための最先端のスマートフォンアプリを開発しました。もともとスタンフォード大学のCOVID-19対応イノベーションラボプロジェクトとして始まった私たちのAI駆動の診断ソリューションは、無料でアクセス可能な検査の新しい基準を確立しています。Virufyでボランティアとして活動することで、最先端のAIツールを使った実践的な経験を積み、プロフェッショナルなネットワークを広げ、重要な目的に貢献することができます。この機会を利用して、イノベーションの最前線に立ち、パンデミック対応の未来を形作る力になりましょう！',
  modal: {
    text: 'これらがすべて無給のボランティアポジションであることをご理解いただけますか？',
    yes: 'はい',
    no: 'いいえ',
  },
  applyButtonText: '応募する',
  jobDetailSectionTitles: {
    responsibilities: '職務内容',
    desiredSkills: '望ましいスキル',
    minQualifications: '基本条件',
    hours: '勤務時間',
    questions: 'ご質問',
    applyButtonText: 'この役職に応募する',
  },
  jobList: [
    {
      category: 'エンジニアリング',
      positions: [
        {
          title: 'ソフトウェアエンジニア',
          id: 1,
        },
        {
          title: '機械学習エンジニア',
          id: 2,
        },
        {
          title: '機械学習エンジニア（モデリング）',
          id: 3,
        },
        {
          title: 'オーディオ信号処理エンジニア',
          id: 4,
        },
        {
          title: 'DevOpsエンジニア',
          id: 5,
        },
        {
          title: '情報セキュリティエンジニア',
          id: 6,
        },
      ],
    },
    {
      category: 'データ',
      positions: [
        {
          title: 'データプライバシーインターン',
          id: 7,
        },
        {
          title: 'アソシエイトデータサイエンティスト',
          id: 8,
        },
      ],
    },
    {
      category: 'マネジメント',
      positions: [
        {
          title: 'ビジネスマネージャー',
          id: 9,
        },
        {
          title: 'プロジェクトマネージャー',
          id: 10,
        },
        {
          title: 'プロダクトマネージャー',
          id: 11,
        },
      ],
    },
    {
      category: '人事',
      positions: [
        {
          title: 'HRビジネスパートナー',
          id: 12,
        },
        {
          title: 'HRアドミニストレーティブアシスタント',
          id: 13,
        },
        {
          title: 'テクニカルリクルーター',
          id: 14,
        },
      ],
    },
    {
      category: '法務',
      positions: [
        {
          title: '企業弁護士（IT志向）',
          id: 15,
        },
        {
          title: 'パラリーガル',
          id: 16,
        },
      ],
    },
    {
      category: '情報技術（IT）',
      positions: [
        {
          title: 'ビジネスアナリスト',
          id: 17,
        },
        {
          title: 'Pythonプログラマー',
          id: 18,
        },
        {
          title: 'テクニカルライター',
          id: 19,
        },
        {
          title: '品質保証エンジニア',
          id: 20,
        },
        {
          title: 'AWS開発者',
          id: 21,
        },
        {
          title: 'AWSアーキテクト',
          id: 22,
        },
        {
          title: 'AWSエンジニア',
          id: 23,
        },
        {
          title: 'クラウドエンジニア',
          id: 24,
        },
        {
          title: 'Unix管理者',
          id: 25,
        },
      ],
    },
    {
      category: '一般的な',
      positions: [
        {
          title: '一般的な求人応募',
          id: 26,
        },
      ],
    },
  ],
};

export default jobListing;
