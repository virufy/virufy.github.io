export interface JobListing {
  jobList: Job[];
  title: {
    before: string;
    highlight: string;
    after: string;
  };
  tag: string;
  subtitle: string;
  titlebuttonText: string;
  modal: JobModal;
  applyButtonText: string;
  jobDetailSectionTitles: JobDetailSectionTitles;
  Banner: Banner;
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
  remote: string;
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
interface Banner {
  title: string;
  text: string;
  buttonText: string;
  url: string;
}
