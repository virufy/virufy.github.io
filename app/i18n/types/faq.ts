import type { ImageText, TypeText } from './baseInterfaces';

export interface FAQ {
  headerSection: FAQHeader;
  topicsSection: FAQTopics;
  questionsSection: FAQQuestions;
  banner: FAQBanner;
}
interface FAQBanner {
  title: string;
  text: string;
  buttonText: string;
  link: string;
}

interface FAQHeader {
  tag: string;
  title: TypeText[];
  texts: TypeText[];
  input: FAQInput;
}

interface FAQInput extends ImageText {
  placeholder: string;
}

interface FAQTopics {
  title: string;
  cards: FAQTopicCard[];
}

export interface FAQTopicCard {
  title: string;
}

interface FAQQuestions {
  topicTitle: string;
  noResultsTitle: string;
  questionsByTopic: QuestionsByTopic;
}

interface QuestionsByTopic {
  [key: string]: QA[];
}

export interface QA {
  question: string;
  answer: Answer[];
}

interface Answer {
  type: string;
  content: TypeText[];
}
