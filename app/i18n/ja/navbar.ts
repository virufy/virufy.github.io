import { type NavbarType } from '../types/navbar';

export const navbar: NavbarType = {
  home: 'ホーム',
  ourTechnology: {
    section: '活動内容',
  },
  coughCheckApp: {
    section: '咳チェックアプリ',
    covid19: 'COVID-19',
    flu: 'インフルエンザ',
    copd: 'COPD',
    rsv: 'RSV',
  },
  aboutUs: {
    section: '団体について',
    advisors: 'アドバイザー',
    ourFounder: '当社の創業者',
    ourSupporters: 'サポーター',
    blog: 'ブログ',
    oneYoungWorld: 'One Young World',
  },
  media: {
    section: 'メディア',
    pressReleases: 'プレスリリース',
    ourResearch: '出版物',
  },
  faq: 'よくある質問',
  donate: {
    buttonText: '寄付',
    optionsTitle: '寄付方法',
  },
  joinUs: {
    buttonText: '参加する',
  },
  searchPlaceholder: '検索...',
  noResultsPlaceholder: '結果が見つかりませんでした',
};

export default navbar;
