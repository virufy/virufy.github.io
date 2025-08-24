export type JobDetails = { [key: string]: JobDetail };

interface JobDetail {
  title: string;
  description: string;
  responsibilities: string[];
  minQualifications: string[];
  desiredSkills: string[];
  hours: string[];
  questions: string[];
}
