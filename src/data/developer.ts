export interface DeveloperInfo {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  linkedin: string;
  github: string;
  email: string;
  phone: string;
  whatsapp: string;
  portfolio: string;
  status: string;
}

export const developer: DeveloperInfo = {
  name: "Yashwanth Suresh",
  role: "Full Stack Developer",
  bio: "Passionate Full Stack Developer specializing in building premium, modern, responsive, and high-performance web applications. I focus on creating beautiful user experiences using Next.js, React, TypeScript, Node.js, Express.js, MongoDB, and modern frontend technologies.",
  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "GSAP",
    "Framer Motion",
    "Responsive Design",
    "REST APIs",
    "UI/UX"
  ],
  linkedin: "https://www.linkedin.com/in/yashwanth-suresh2004",
  github: "https://github.com/Yashwanth1228",
  email: "yashwanthsuresh8@gmail.com",
  phone: "+91 8884528543",
  whatsapp: "+91 8884528543",
  portfolio: "", // Hidden when empty
  status: "🟢 Available for Freelance Projects"
};
