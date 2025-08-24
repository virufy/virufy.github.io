import {
  AmbassadorIcon,
  BgBody,
  BgHeader,
  DiverseIcon,
  GlobeIcon,
  GonzaloTestimonial,
  MarcosTestimonial,
  SebastianTestimonial,
  YouthIcon,
} from '@/public/images/oneYoungWorld';
import { type OneYoungWorld } from '../types/oneYoungWorld';

const oneYoungWorld: OneYoungWorld = {
  header: {
    text: '企業や組織は、その豊富な知識を活かして私たちを支え、私たちの活動に安心感と確実性を提供してくれています。',
    image: BgHeader,
    altText: '',
  },
  navbarTexts: {
    oyw: 'One Young World',
    teamLeads: 'チームアンバサダー',
  },
  oyw: {
    bgImage: BgBody,
    altText: '',
    virufyAndOyw: {
      title: 'One Young World',
      subTitle: 'VirufyとOne Young World',
      texts: [
        '私たちの世界は偉大なリーダーシップを必要としています。新しい世代は、世界の歴史の中で最も情報に通じ、教育を受け、つながりを持つ世代の1つです。One Young Worldは、世界中の最も影響力のある若いリーダーを特定し、促進し、つなげることで、より責任を持ち、効果的なリーダーシップを持つ世界を創造します。',
        'Virufyは、アメリカと日本のプラットフォーム、アクションを起こす大使、代表者会議、COVID-19対応の最前線での大使など、さまざまなOYWプラットフォームで取り上げられました。また、さまざまな地域の広報活動に向けて、OYW大使との協力も行っています。',
      ],
      videoUrl: 'https://www.youtube.com/embed/hvJgwPNYnZo?si=k_ujoF1pBeYFg65C',
      videoTitle: 'Virufyのビジョンとアクションへの呼びかけ',
    },
    whyOyw: {
      title: 'なぜOne Young Worldなのか？',
      cards: [
        {
          title: '大使主導',
          text: '私たちの組織構造は、各地域で活動を調整する若者の大使と共にOne Young Worldにマッチしています。',
          image: AmbassadorIcon,
          altText: '',
        },
        {
          title: '若者がリード',
          text: '私たちの成長するチームは、世界中の若い専門家によって率いられており、グローバルな業界リーダーからの緊密なアドバイスを受けています。',
          image: YouthIcon,
          altText: '',
        },
        {
          title: 'グローバルインパクトに焦点',
          text: '私たちの目標は、設立当初から、世界中のすべての国のすべての人々に公平な解決策を提供することです。',
          image: GlobeIcon,
          altText: '',
        },
        {
          title: '多様な代表者',
          text: '私たちのチームは、50以上の大学と25カ国からの代表者で構成されており、多くのOne Young World大使からサポートを受けています。',
          image: DiverseIcon,
          altText: '',
        },
      ],
    },
    volunteerStories: {
      title: 'ボランティアの声',
      text: '複数の大使がVirufyでボランティア活動を行い、感想を寄せています。私たちはOne Young Worldコミュニティのメンバーを強く信頼しており、寄与を希望するすべての大使を心から歓迎します。',
      testimonials: [
        {
          name: 'セバスティアン・ペドラサ',
          origin: 'コロンビア',
          image: SebastianTestimonial,
          altText: 'セバスティアン・ペドラサの画像',
          testimonial: `「Virufyは若者と技術の力を結集して世界を変えます。このソリューションが世界中に届き、特に低所得国の医師を支援するものになることを望んでいます。」`,
        },
        {
          name: 'ゴンサロ・ロイフェ',
          origin: 'アルゼンチン',
          image: GonzaloTestimonial,
          altText: 'ゴンサロ・ロイフェの画像',
          testimonial: `「Virufyは、ユーザーの背景や社会的地位に関係なく、世界的な影響を与えるでしょう。これこそが現状を変えるということです。」`,
        },
        {
          name: 'マルコス・デザ',
          origin: 'アルゼンチン',
          image: MarcosTestimonial,
          altText: 'マルコス・デザの画像',
          testimonial: `「Virufyは非常に正確なソリューションを開発し、これはすべての業界で役立つものになるでしょう。皆さんも少しの時間を割いて、私たちと一緒に貢献してほしいです。」`,
        },
      ],
      buttonText: '参加する',
    },
  },
};

export default oneYoungWorld;
