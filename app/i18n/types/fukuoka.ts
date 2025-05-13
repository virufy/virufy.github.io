export interface TeamMember {
    id: string;
    name: string;
    role: string;
    image: string;
  }
  
  export interface Fukuoka {
    title: string;
    subtitle: string;
    aboutSection: {
      mainText: string;
      strengthsText: string;
      establishmentInfo: {
        date: string;
        description: string;
      };
      extendedInfo: string[];
    };
    projectOverview: string[];
    projectObjectives: string[];
    callForFacilities: string;
    contactInfo: {
      email: string;
    };
    teamMembers: TeamMember[];
  }