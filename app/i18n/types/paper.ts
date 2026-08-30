export interface PaperDetails {
  date: string;
  title: string;
  links: string[];
  linkText: string[];
}

export type PaperSections = Record<string, PaperDetails>;

export interface PaperContent {
  meta: string;
  title: string;
  headers: {
    header: string;
  };
  papers: PaperSections;
}
