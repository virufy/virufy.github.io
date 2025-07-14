import {} from '@/public/images/story';
import { type Story } from '../types/story';

const story: Story = {
  aboutUsSection: {
    title: '私たちについて',
    texts: [
      '私たちの革新的な取り組みは、医療従事者、政府、特に低所得国の患者を対象に、呼吸器疾患のより正確な事前スクリーニングを提供することを目的としています。',
      'テクノロジーで病気を早期発見し、世界の医療を革新する。私たちは、このミッションを達成するため、人々の支援と投資を募り、世界をリードする非営利団体を目指しています。',
    ],
  },
  storySection: {
    title: 'どのように始まったか',
    texts: [
      [
        {
          type: 'text',
          text: 'パンデミックの際、',
        },
        {
          type: 'link',
          url: '/amils-story',
          text: 'Virufyの創設者アミル・カンザダは',
        },
        {
          type: 'text',
          text: 'スマートフォンの普及率の高さに着目し、またコロナウイルスが鼻や喉、肺に影響を及ぼすことを認識していました。',
        },
      ],
      [
        {
          type: 'text',
          text: 'そこで、呼吸音や咳の音を機械学習で分析することでコロナの規則性を検出できる、という仮定を立てました。',
        },
      ],
      [
        {
          type: 'text',
          text: 'ポジティブな影響を与えたいという思いから、名門大学病院で362人の患者を対象にした臨床研究を主導しました。スタンフォード大学のAIを研究する大学院生から始まったVirufyの最初のチームは、世界中の大学から集まったボランティアチームにまで拡大しています。',
        },
      ],
    ],
  },
  MissionSection: {
    title: 'Our Mission',
    texts: [
      [
        {
          type: 'text',
          text: 'Some people may be wondering, "why are we here?" and "why have so many people supported Virufy?" Virufy\'s mission and goal is to transform global health.',
        }
      ],
      [
        {
          type: 'text',
          text: 'Virufy\'s mission and goal is to transform global health.',
        },
      ],
      [
        {
          type: 'text',
          text: 'We aim to give everyone in the world access to a smartphone app to detect respiratory diseases like COVID, flu, RSV, asthma, lung cancer, in seconds.',
        },
      ],
      [
        {
          type: 'text',
          text: 'We would like a billion people in developing nations to be empowered to protect the health of themselves and loved ones.',
        },
      ],
      [
        {
          type: 'text',
          text: 'Here is a listing of disclosed ',
        },
        {
          type: 'link',
          url: '/advisors',
          text: 'advisors',
        },
        {
          type: 'text',
          text: ' and we have had 1,300+ volunteers to date.',
        },
      ],
      [
        {
          type: 'text',
          text: 'We aim to have UAE as our first country to release the app because of our supporters and the process is much faster and straightforward here than other nations.',
        },
      ],
      [
        {
          type: 'text',
          text: 'Thank you for being part of the mission and let\'s make it happen.',
        },
      ],
    ],
  },
  privacySection: {
    title: 'プライバシーへの取り組み',
    texts: [
      'Virufyは、個人情報のプライバシーと保護を真剣に考えています。私たちの法務チームは、ウェブサイトを通じて共有された個人情報を保護するため、詳細なプライバシーポリシーとクッキーポリシーを作成しました。',
    ],
  },
};

export default story;
