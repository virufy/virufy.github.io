export interface PaperDetails {
    date: string;
    title: string;
    readMoreLink: string;
    calculatorLink?: string; // Optional, as not all sections have it
  }
  
  export interface PaperSections {
    section2: PaperDetails;
    section3: PaperDetails;
    section4: PaperDetails;
    section5: PaperDetails;
    section6: PaperDetails;
    section7: PaperDetails;
    [key: string]: PaperDetails; // Allows for dynamic access like papers[sectionKey]
  }
  
  export interface PaperContent {
    meta: string;
    title: string;
    headers: {
      header: string;
    };
    papers: PaperSections;
  }