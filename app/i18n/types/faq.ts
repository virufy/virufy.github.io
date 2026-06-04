import type { ImageText, TypeText } from './baseInterfaces';

export interface FAQ {
  headerSection: FAQHeader;
  topicsSection: FAQTopics;
  questionsSection: FAQQuestions;
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
