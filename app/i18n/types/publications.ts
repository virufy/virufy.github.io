export interface Section {
  title: string;
  texts: string[];
}

export interface Publications {
  publicationsSection: Section;
  publicationsCards: PublicationCard[];
  collaborateSection: PublicationsCollaborateSection;
}

export interface PublicationCard {
  title: string;
  date: string;
  url: string;
  linkText: string;
}

interface PublicationsCollaborateSection {
  title: string;
  linkText: string;
}
