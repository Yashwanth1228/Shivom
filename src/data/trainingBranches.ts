export interface TrainingBranch {
  id: string;
  branchName: string;
  academyName: string;
  description: string;
  mapLink: string;
  logo: string;
  image?: string;
}

export const TRAINING_BRANCHES: TrainingBranch[] = [
  {
    id: "branch-girinagara",
    branchName: "Girinagara Branch",
    academyName: "Shivom Cultural Academy",
    description:
      "Professional dance training for beginners and advanced students in a creative and inspiring learning environment.",
    mapLink: "https://maps.app.goo.gl/zjGaNBWkVFqPTLoN9?g_st=aw",
    logo: "/assets/academy-logo.jpg",
  },
  {
    id: "branch-nagarbhavi",
    branchName: "Nagarbhavi Branch",
    academyName: "Shivom Cultural Academy",
    description:
      "Performance-focused dance education with expert choreography and opportunities to participate in stage performances and events.",
    mapLink: "https://maps.app.goo.gl/mdPw5H3C3qmk6nWa6",
    logo: "/assets/academy-logo.jpg",
  },
];
