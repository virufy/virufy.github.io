import type { Donate } from '../types/donate';

const donate: Donate = {
  introSection: {
    tag: '私たちのミッションへのご支援',
    title: ['世界の呼吸器医療を', 'ともに前進させましょう'],
    text: '皆さまからのご支援は、AI を活用した診断ツールを世界中の患者さんや地域社会へ届け、健康の公平性を実現するという私たちの目標を前進させます。',
    buttonText: '支援方法について',
  },
  impactSection: {
    title: '皆さまのご支援が未来を変える力になります。',
    description:
      '皆さまからのご寄付は、医療サービスが十分に行き届いていない地域に、誰もが利用しやすいデジタルヘルス技術を届けるための大きな力となります。一人ひとりのご支援が、革新的な技術の開発を後押しし、より多くの人々に健康を守るための選択肢を広げます。',
  },

  pillars: [
    {
      title: 'アクセスの拡大',
      description:
        'AI を活用した健康スクリーニング技術とその恩恵を、世界中の医療アクセスが限られた地域へ届けます。',
      icon: '/icons/icon-expand-access.png',
    },
    {
      title: '研究の推進',
      description:
        '呼吸器疾患の早期発見の精度向上を目指す、最先端の研究を支援します。',
      icon: '/icons/icon-advance-research.png',
    },
    {
      title: '患者さんの力になる',
      description:
        '誰もが自分の健康状態を理解し、主体的に健康を守れるよう、科学的根拠に基づく情報をわかりやすく届けます。',
      icon: '/icons/icon-empower-patients.png',
    },
  ],
  donateOptions: {
    title: 'ご希望の寄付方法をお選びください。',
    subtitle:
      '皆さまのご支援が大きな力となります。以下からご希望の寄付方法をお選びください。',
    options: [
      {
        name: 'GoFundMe',
        description:
          '寄付は Virufy の GoFundMe キャンペーンを通じて受け付けています。',
        buttonText: 'GoFundMe で寄付する',
        url: 'https://www.gofundme.com/f/donate-virufy',
        icon: '/icons/icon-donate.png',
      },
      {
        name: 'PayPal',
        description:
          '寄付は Virufy の PayPal アカウントを通じて直接処理されます。',
        buttonText: 'PayPal で寄付する',
        url: 'https://www.paypal.com/us/fundraiser/charity/4348461',
        icon: '/icons/icon-donate.png',
      },
    ],
  },
  banner: {
    title: '透明性への取り組み',
    text: [
      'Virufy は米国法 501(c)(3) に認定された非営利団体です。ご寄付は、適用される税法に従い、税控除の対象となる場合があります。私たちは透明性と説明責任を大切にし、皆さまからのご支援が社会に最大限の成果をもたらすよう努めています。',
    ],
  },
};
export default donate;
