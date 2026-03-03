import { type Donate } from '../types/donate';

const donate: Donate = {
  heroSection: {
    title: [
      {
        text: '私たちと共に、世界の呼吸器医療を前進させましょう。',
      },
      {
        text: '皆さまのご支援は、AIを活用した診断ツールを、必要とする患者や地域社会へ届ける大きな力になります。',
      },
    ],
  },
  donateSection: {
    title: 'あなたのご支援が、未来につながる変化を生み出します。',
    text: '一つひとつのご寄付は、Virufyの呼吸器技術を必要としている人々や地域社会へ届けるために活用されます。皆さまからのお力が医療技術を発展させ、患者が自身の健康を守れるようになる環境をつくります。',
    contentBlocks: [
      {
        title: '医療へのアクセスを広げる',
        text: 'AIを活用した早期発見のための診断支援ツールを、医療を受けにくい地域社会へ届けます。',
      },
      {
        title: '研究を前進させる',
        text: '呼吸器疾患の早期発見と治療につながる、先進的な研究を加速させます。',
      },
      {
        title: '患者の力を引き出す',
        text: '人々が科学的根拠に基づいて、自分の健康状態を主体的に判断できるよう支援します。',
      },
    ],
    optionsTitle: 'ご支援方法をお選びください',
    optionsText:
      '皆さまのご支援は大きな意味を持ちます。下記の寄付方法からお進みください。',
    DonationsOptionsBlock: [
      {
        optionTitle: 'GoFundMeで寄付する',
        optionText:
          '現在募集中のキャンペーンを通じて、支援をより早く、より広く届けることができます。',
        buttonText: 'GoFundMe',
      },
      {
        optionTitle: 'PayPalで寄付する',
        optionText:
          'PayPalを通じて、一回限りまたは定期的なご寄付に対応しております。',
        buttonText: 'PayPal',
      },
    ],
  },
  donationTransparencyBlock: {
    title: '信頼いただける透明性',
    text: 'Virufyは、米国の501(c)(3)認定を受けた非営利団体です。ご寄付は、適用される場合、税控除の対象となります。私たちは、透明性と説明責任を重視し、皆さまからのご支援が研究、イノベーション、そして患者アクセスの向上に直接つながるよう取り組んでいます。',
  },
};

export default donate;
