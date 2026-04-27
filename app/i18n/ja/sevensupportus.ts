// app/i18n/ja/sevensupportus.ts
import type { SevenSupportUs } from '../types/sevensupportus';
import {
  DonateIcon,
  ImpowerIcon,
  ExpandAccessIcon,
  AdvanceResearchIcon,
} from '@/public/images/sevenSupportUs';

const sevensupportus: SevenSupportUs = {
  introSection: {
    tag: '私たちの使命を支援する',
    title: ['共に、世界の呼吸器の健康に', '革命を起こしましょう'],
    text: 'すべてのご寄付は、AIを活用した診断ツールを世界中の患者やコミュニティに届け、健康の公平性を実現することに貢献します。',
    buttonText: '支援方法',
  },
  impactSection: {
    title: 'あなたのご寄付が永続的なインパクトを生みます。',
    description:
      'ひとつひとつの寄付が、Virufyのアクセシブルなデジタルヘルス技術を医療が行き届かないコミュニティに届ける助けとなります。ご支援により、イノベーションが加速し、患者さんが自分の健康を守るためのツールを手にすることができます。',
  },
  pillars: [
    {
      title: 'アクセス拡大',
      description:
        'AIを活用した健康スクリーニングツールとその利点を、世界中の十分なサービスを受けられていないコミュニティに届けます。',
      icon: ExpandAccessIcon,
    },
    {
      title: '研究推進',
      description:
        '呼吸器疾患の早期発見を改善する最先端の研究を支援します。',
      icon: AdvanceResearchIcon,
    },
    {
      title: '患者のエンパワーメント',
      description:
        'アクセスしやすく科学的に裏付けられた知見を通じて、個人が自らの健康を管理できるように支援します。',
      icon: ImpowerIcon,
    },
  ],
  donateOptions: {
    title: 'ご寄付の方法をお選びください。',
    subtitle: 'あなたのご支援は大切です。以下の寄付オプションからお選びください。',
    options: [
      {
        name: 'GoFundMe',
        description:
          'VirufyのGoFundMeキャンペーンを通じて寄付が行われます。',
        buttonText: 'GoFundMeで寄付する',
        url: 'https://www.gofundme.com/f/donate-virufy',
        icon: DonateIcon,
      },
      {
        name: 'PayPal',
        description:
          'VirufyのPayPalアカウントを通じて直接寄付を処理します。',
        buttonText: 'PayPalで寄付する',
        url: 'https://www.paypal.com/us/fundraiser/charity/4348461',
        icon: DonateIcon,
      },
    ],
  },
  banner: {
    title: '信頼できる透明性。',
    text: [
      'Virufyは501(c)(3)非営利団体です。ご寄付は該当する場合に税控除の対象となります。私たちは透明性と説明責任を徹底し、あなたの贈り物が研究、イノベーション、患者アクセスを直接支援することをお約束します。',
    ],
  },
};

export default sevensupportus;