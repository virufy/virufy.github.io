export interface JobListing {
  jobList: Job[];
  titleImage: string;
  title: string;
  text: string;
  modal: JobModal;
  applyButtonText: string;
  jobDetailSectionTitles: JobDetailSectionTitles;
}

export interface Job {
  category: string;
  positions: JobPosition[];
}

export interface JobModal {
  text: string;
  yes: string;
  no: string;
}

interface JobPosition {
  title: string;
  id: number;
}

interface JobDetailSectionTitles {
  responsibilities: string;
  desiredSkills: string;
  minQualifications: string;
  hours: string;
  questions: string;
  applyButtonText: string;
}
