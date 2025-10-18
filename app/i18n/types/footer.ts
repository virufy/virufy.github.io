import { type QA } from './faq';

export interface Footer {
  cookiePolicy: CookiePolicy;
  personalInfo: PersonalInfo;
  privacyPolicy: PrivacyPolicy;
  nonProfitSection: NonProfitSection;
  IntellectualProperty: IntellectualProperty;
}

interface CookiePolicy {
  title: string;
  body: QA[];
}

interface PersonalInfo {
  title: string;
  body: QA[];
}
interface PrivacyPolicy {
  title: string;
  body: QA[];
}

interface NonProfitSection {
  title: string;
  textOne: string;
  textTwo: string;
}
interface IntellectualProperty {
  title: string;
  body: string;
  patentTitle: string;
  addpatentpending: string;
}
