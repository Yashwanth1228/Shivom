export interface TrustedSchool {
  id: string;
  name: string;
  description: string;
  logo: string;
}

export const TRUSTED_SCHOOLS: TrustedSchool[] = [
  {
    id: "school-royal",
    name: "Royal Public School",
    description: "Inspiring students through creativity, confidence, and stage performances.",
    logo: "/assets/school-royal.jpg"
  },
  {
    id: "school-arwin",
    name: "Arwin Vidya Mandira",
    description: "Professional choreography and dance education for aspiring young performers.",
    logo: "/assets/school-arwin.jpg"
  },
  {
    id: "school-srilakshmi",
    name: "Sri Lakshmi Public School",
    description: "Encouraging artistic expression through structured dance learning.",
    logo: "/assets/school-srilakshmi-v2.jpg"
  },
  {
    id: "school-cambridge",
    name: "Indian Cambridge School",
    description: "Building confidence, discipline, and performance excellence through dance.",
    logo: "/assets/school-cambridge.jpg"
  },
  {
    id: "school-agasthya",
    name: "Agasthya Vidyanikethan School",
    description: "Preparing students for cultural events, competitions, and stage performances.",
    logo: "/assets/school-agasthya.jpg"
  },
  {
    id: "school-heartbeat",
    name: "New Hardwick Indian School",
    description: "Developing young performers through creative choreography and dance education.",
    logo: "/assets/school-hardwick.jpg"
  }
];
