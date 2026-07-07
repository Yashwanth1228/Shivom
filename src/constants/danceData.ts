// Centralized Data file for Shivaraj S Portfolio

export const PERSONAL_INFO = {
  name: "Shivaraj S",
  whatsappNumber: "918217705531", // Primary WhatsApp number
  phone: "+91 82177 05531 / +91 99804 55040",
  email: "5shivusdhs@gmail.com",
  address: "#26, 1st main, 2nd cross Ashwath Nagar, Sunkadakatte, Bangalore-91",
  tagline: "Bringing Rhythm To Life Through Dance",
  quote:
    "Dance is the hidden language of the soul, where movement tells stories that words cannot convey.",
  bioShort:
    "Shivaraj S is a passionate and experienced Dance Instructor, Choreographer, and Actor based in Bangalore. Specializing in high-energy, thematic choreographies for school events, weddings, and corporate celebrations, Shivaraj is known for building confidence in students and crafting memorable performances that captivate audiences.",
  bioLong:
    "Hi, I'm Shivaraj S, a passionate choreographer specializing in school performances, weddings, and event choreography. With extensive experience in various dance styles, I create memorable and engaging performances. As a dedicated visual artist, I train students and performers for television reality shows, securing top spots and recognition. My approach is defined by hard work, smart choreography, and an honest, dedicated commitment to making every single performance leave a lasting impact.",
  philosophy:
    "I believe in teaching dance techniques that build confidence, stage presence, and teamwork in students. Choreography is not just about executing steps—it is about breathing life into music.",
};

const startYear = 2014;
const currentYear = new Date().getFullYear();
const yearsOfExp = Math.max(10, currentYear - startYear);

export const STATISTICS = [
  { value: yearsOfExp, suffix: "+", label: "Years of Experience" },
  { value: 8, suffix: "+", label: "TV Reality Shows" },
  { value: 100, suffix: "+", label: "Choreographed Events" },
  { value: 2000, suffix: "+", label: "Students Trained" },
];

export const DANCE_STYLES = [
  {
    id: "bollywood",
    title: "Bollywood & Filmy",
    description:
      "Energetic and commercial cinematic dance combining screen expression with pure entertainment.",
    image: "/assets/pic-20.jpg",
  },
  {
    id: "contemporary",
    title: "Semi-Contemporary",
    description:
      "Fluid, lyrical, and interpretive movement focusing on floor-work, emotional expression, and core control.",
    image: "/assets/semi-contemporary.jpg",
  },
  {
    id: "hiphop",
    title: "Hip-Hop & Western",
    description:
      "High-power street routines incorporating locking, popping, freestyle, and modern urban movements.",
    image: "/assets/hip-hop.jpg",
  },
  {
    id: "filmy-folk",
    title: "Filmy Folk & Fusion",
    description:
      "Vibrant traditional rhythms combined with commercial synchronization and festive group setups.",
    image: "/assets/filmy-folk.jpg",
  },
];

export const FEATURED_ACHIEVEMENTS = [
  {
    id: "ach-1",
    title: "Reality Show Landmark",
    subtitle: "Dhee 6 & Dhee Juniors",
    description:
      "Participated as a performer in Telugu Dhee 6 as Co-Assistant and competed in Dhee Juniors 1 & 2, directing major television sequences.",
    badge: "Television Stage",
    image: "/assets/dhee-6.jpg",
  },
  {
    id: "ach-2",
    title: "Master Dancer Contestant",
    subtitle: "Colors Super Reality Show",
    description:
      "Featured as a contestant in the Master Dancer Kannada Reality Show, showcasing elite dance versatility and acting expression.",
    badge: "Contestant Spot",
    image: "/assets/master-dancer.jpg",
  },
  {
    id: "ach-3",
    title: "School Coaching Excellence",
    subtitle: "Dancing Star Success",
    description:
      "Successfully trained school dance teams for participation in inter-school events and 'Dancing Star' reality show seasons 1, 2 & 3.",
    badge: "School Choreography",
    image: "/assets/pic-3.jpg",
  },
];

export const SERVICES = [
  {
    id: "srv-wedding",
    title: "Event & Wedding Choreography",
    description:
      "Bespoke performances for weddings, sangeet nights, and couples. We create engaging, energetic, and thematic dances tailored to your occasion.",
    details: [
      "Couple Dance (First Dance)",
      "Group & Family Choreography",
      "Thematic Sangeet Concepts",
      "Soundtrack Editing",
    ],
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "srv-school",
    title: "School & Stage Coaching",
    description:
      "Designed dance programs for school functions, annual days, and cultural fests. We guide teams from basic rhythm to synchronized stage presence.",
    details: [
      "Annual Day Staging",
      "Inter-School Competitions",
      "Confidence & Teamwork Building",
      "Freestyle & Folk Formats",
    ],
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "srv-corporate",
    title: "Corporate Performances",
    description:
      "Polished and energetic performances for corporate events and galas. Concept choreography that engages teams and captivates corporate audiences.",
    details: [
      "Theme Presentations",
      "Flash Mobs",
      "Award Function Galas",
      "Executive Performances",
    ],
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "srv-workshop",
    title: "Dance Workshops",
    description:
      "Private and group classes in Western, Freestyle, Bollywood, Locking & Popping, and Semi-Contemporary styles for academies and fitness centers.",
    details: [
      "Teaching Dance Techniques",
      "Aerobics & Fitness Dance",
      "Locking & Popping Basics",
      "Method Acting Expression",
    ],
    image:
      "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=600&auto=format&fit=crop",
  },
];

export const TIMELINE_MILESTONES = [
  {
    year: "2012",
    title: "Started Dance Journey",
    description:
      "Began training in classical and contemporary dance forms, developing precision, flexibility, and expressive storytelling.",
    badge: "Foundation",
  },
  {
    year: "2014",
    title: "Professional Dance Training",
    description:
      "Deepened expertise in commercial Bollywood, hip-hop styles, aerobics, and stage choreography compositions.",
    badge: "Training",
  },
  {
    year: "2016",
    title: "Dance Instructor & Choreographer",
    subtitle: "New Hardwick Indian School",
    description:
      "Mentored students through creative choreography, competitions, and annual cultural performances.",
    website: "https://www.newhardwick.org/",
    badge: "School Coach",
    logo: "/assets/school-hardwick.jpg",
  },
  {
    year: "2019",
    title: "Dance Instructor & Choreographer",
    subtitle: "Agasthya Vidyanikethan School",
    description:
      "Developed engaging dance programs while preparing students for school events and stage performances.",
    website: "https://www.agasthyavidyanikethan.com/",
    badge: "Part-time",
    logo: "/assets/school-agasthya.jpg",
  },
  {
    year: "Present",
    title: "Currently Working As",
    subtitle: "Royal Public School",
    description:
      "Inspiring students through choreography, performances, and creative dance education.",
    website: "https://www.royalpublicschool.in/",
    badge: "Active Coach",
    logo: "/assets/school-royal.jpg",
  },
  {
    year: "Present",
    title: "Currently Working As",
    subtitle: "Arwin Vidya Mandira",
    description:
      "Training young dancers with a focus on technique, confidence, teamwork, and stage presence.",
    website: "https://www.arwinvidyamandira.com/",
    badge: "Active Coach",
    logo: "/assets/school-arwin.jpg",
  },
  {
    year: "Present",
    title: "Currently Working As",
    subtitle: "Sri Lakshmi Public School",
    description:
      "Creating memorable performances while nurturing creativity and artistic expression.",
    website: "https://www.srilakshmipublicschool.com/",
    badge: "Active Coach",
    logo: "/assets/school-srilakshmi-v2.jpg",
  },
  {
    year: "Present",
    title: "Currently Working As",
    subtitle: "Indian Cambridge School",
    description:
      "Guiding students through structured dance education, choreography, and performance-based learning.",
    website: "https://indiancambridgeschool.com/",
    badge: "Active Coach",
    logo: "/assets/school-cambridge.jpg",
  },
  {
    year: "Spotlight",
    title: "Reality Show Performances",
    description:
      "Participated as performer in Telugu Dhee 6 (Co-Assistant), contestant on Master Dancer (Colors Super), Dhee Juniors 1 & 2, and others.",
    badge: "Television",
  },
  {
    year: "Live Stage",
    title: "Celebrity Stage Performances",
    description:
      "Collaborated with Kannada and Hindi television celebrities for Zee Kutumba Awards, Suvarna Parivara Awards, and Dancing Star.",
    badge: "Gala Stage",
  },
  {
    year: "Events",
    title: "Wedding & Event Choreography",
    description:
      "Specialized in luxury couples choreography, massive sangeet concepts, school functions, and corporate brand presentations.",
    badge: "Designer Sangeet",
  },
  {
    year: "Legacy",
    title: "Continuing To Inspire",
    subtitle: "The Next Generation Through Dance",
    description:
      "Dedicated to sharing the love of movement, building stage confidence, and fostering artistic excellence across academies and schools.",
    badge: "Ongoing",
  },
];

export const REALITY_SHOWS = [
  {
    name: "Dhee 6 (Telugu)",
    role: "Co-Assistant / Performer",
    description:
      "Participated in South India's premier dance competition, assisting on choreography and performing high-impact television spots.",
    image: "/assets/dhee-6.jpg",
  },
  {
    name: "Master Dancer (Kannada)",
    role: "Contestant Performer",
    description:
      "Featured on Colors Super channel, competing in intense creative rounds and showcasing versatile screen choreography.",
    image: "/assets/master-dancer.jpg",
  },
  {
    name: "Dhee Juniors 1 & 2 (Telugu)",
    role: "Competitor",
    description:
      "Staged competitive routines for Telugu television, directing young dancers on high-tempo stage sequences.",
    image: "/assets/dhee-juniors.jpg",
  },
  {
    name: "Dancing Star 1, 2 & 3 (Kannada)",
    role: "Dancer / Trainer",
    description:
      "Participated as a dancer in Season 1 and successfully trained team students for Seasons 1, 2 & 3.",
    image: "/assets/dancing-star.jpg",
  },
  {
    name: "Zee Kutumba & Suvarna Awards",
    role: "Award Gala Dancer",
    description:
      "Choreographed and performed opening award sequences, coordinating with Kannada and Hindi television actors.",
    image: "/assets/zee-kutumba.jpg",
  },
  {
    name: "Dance Dance & Kick Dance",
    role: "Reality Show Performer",
    description:
      "Choreographed and danced on major regional reality platforms, showcasing popping, locking, and contemporary fusions.",
    image: "/assets/dance-dance.jpg",
  },
];

export const SERVICES_GALLERY = [
  "/assets/pic-2.jpg",
  "/assets/pic-11.jpg",
  "/assets/pic-6.jpg",
  "/assets/pic-8.jpg",
  "/assets/pic-9.jpg",
  "/assets/pic-10.jpg",
  // Extended gallery images (shown when clicking See More)
  "/assets/pic-12.jpg",
  "/assets/pic-14.jpg",
  "/assets/pic-16.jpg",
  "/assets/pic-17.jpg",
  "/assets/pic-18.jpg",
  "/assets/pic-19.jpg",
  "/assets/pic-20.jpg",
  "/assets/pic-21.jpg",
  "/assets/pic-22.jpg",
  "/assets/pic-23.jpg",
  // "/assets/pic-24.jpg",
  "/assets/pic-31.jpg",
  "/assets/pic-32.jpg",
  "/assets/pic-34.jpg",
  "/assets/pic-35.jpg",
];

export const ACHIEVEMENTS_GALLERY = [
  "/assets/shalab-sir.jpg",
  "/assets/pic-28.jpg",
  "/assets/pic-26.jpg",
  "/assets/pic-27.jpg",
  "/assets/pic-25.jpg",
  "/assets/pic-1.jpg",
  // Extended gallery images (shown when clicking See More)
  // "/assets/shalab-sir.jpg",
  // "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=600&auto=format&fit=crop",
  // "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?q=80&w=600&auto=format&fit=crop",
  // "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop",
  // "https://images.unsplash.com/photo-1505232458729-26417ff63c00?q=80&w=600&auto=format&fit=crop",
  // "https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=600&auto=format&fit=crop",
  // "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=600&auto=format&fit=crop",
];

export const ACADEMY_GALLERY = [
  "/assets/Aca-1.jpg",
  "/assets/Aca-2.jpg",
  "/assets/Aca-3.jpg",
  "/assets/Aca-4.jpg",
  // "/assets/pic-13.jpg",
  // "/assets/pic-15.jpg",
  // "/assets/pic-24.jpg",
  // "/assets/pic-30.jpg",
  // "/assets/pic-33.jpg",
];

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/officialshivaraj",
  facebook: "https://www.facebook.com/officialShivaraj",
};
