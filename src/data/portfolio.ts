export const rotatingTitles = [
  'Junior AI/ML Engineer',
  'Backend Developer',
  'Website Developer',
  'IoT Developer',
];

export const profile = {
  name: 'Anirudda Rai',
  logoName: 'ANIRUDDA RAI',
  title: 'AI/ML Engineer | Python Developer',
  tagline: 'Building intelligent software solutions through Python, AI and modern engineering.',
  email: 'aniruddharai39@gmail.com',
  location: 'Nepal',
  github: 'https://github.com/anup12rai',
  linkedin: 'https://www.linkedin.com/in/anirudda-rai-3bba65263/',

  image: '/profile.jpeg',
  resume: '/resume.pdf',
};

export const about = {
  paragraphs: [
    'I am a Computer Applications student with hands-on software development experience, focused on building practical tools with Python and modern web technologies. My main interest lies in Artificial Intelligence and Machine Learning, especially connecting LLM-powered backends to real-world interfaces.',
    'Beyond software, I work with hardware and embedded systems such as ESP32 and Arduino, building IoT projects that bridge the physical and digital worlds. I enjoy problem-solving and continuous learning, always working to deepen my engineering fundamentals.',
  ],
};

export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skills: SkillGroup[] = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'C', 'C++', 'Java', 'JavaScript', 'PHP', 'SQL'],
  },
  {
    title: 'Backend',
    skills: ['Flask', 'FastAPI','Python','PHP','Websockets'],
  },
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    title: 'Database',
    skills: ['MySQL', 'SQL','Oracle'],
  },
  {
    title: 'AI/ML',
    skills: ['LLM APIs', 'AI integrations', 'Machine Learning fundamentals'],
  },
  {
    title: 'Hardware',
    skills: ['ESP32', 'Arduino', 'IoT','respberry pi','Different sensors'],
  },
  {
    title: 'Developer Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Linux','Docker','Postman','XAMPP'],
  },
];

export interface Project {
  name: string;
  description: string;
  image: string;
  technologies: string[];
  /** Deployed site URL. Leave as null to hide the "View Live" button. */
  liveUrl: string | null;
  /** GitHub repository URL. Leave as null to hide the "GitHub" button. */
  githubUrl: string | null;
}

export const projects: Project[] = [
  {
    name: 'Treaking Guide',
    description:
      'A trekking guide website that helps travelers explore destinations, discover trekking routes, and plan unforgettable adventures with ease.',
    image: 'treak.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    liveUrl: 'https://lalbahadurrai.netlify.app/?utm_source=ig&utm_medium=social&utm_content=link_in_bio',
    githubUrl: 'https://github.com/anup12rai/treaking-website.git',
  },
  {
    name: 'EduAdapt — Education Platform',
    description:
      'An educational web application focused on backend functionality and database integration.',
    image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'Flask', 'MySQL'],
    liveUrl: 'https://example.com/project-two',
    githubUrl: 'https://github.com/anup12rai',
  },
  {
    name: 'ESP32 IoT Projects',
    description:
      'Embedded systems and IoT projects involving hardware control and wireless communication.',
    image: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['C++', 'Arduino', 'ESP32', 'Wi-Fi'],
    liveUrl: 'https://example.com/project-three',
    githubUrl: 'https://github.com/anup12rai',
  },
  {
    name: 'AI Timetable Builder',
    description:
      'A timetable generation application designed to simplify scheduling.',
    image: 'https://images.pexels.com/photos/76093/pexels-photo-76093.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'AI integration', 'Web Technologies'],
    liveUrl: 'https://example.com/project-four',
    githubUrl: 'https://github.com/anup12rai',
  },
];

export interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  description?: string;
}

export const experience: TimelineItem[] = [
  {
    title: 'Bachelor of Computer Applications (BCA)',
    organization: 'KMC',
    period: 'Ongoing',
    description:
      'Undergraduate degree focused on computer applications, programming fundamentals and software development.',
  },
  {
    title: 'Python Programming Teaching',
    organization: 'Workshops & Peer Sessions',
    period: 'Completed',
    description:
      'Teaching Python fundamentals through technical workshops and peer sessions.',
  },
  {
    title: 'Technical Workshops',
    organization: 'KMC',
    period: 'Completed: 2025',
    description:
      'Participated in and helped conduct technical workshops on software development and embedded systems.',
  },
  {
    title: 'IoT and Embedded Systems Projects',
    organization: 'Personal Projects',
    period: 'Ongoing',
    description:
      'Developed various IoT and embedded systems projects using ESP32, Arduino, and other microcontrollers.',
  },
  {
    title: 'Winning Hackathon Projects',
    organization: 'Hackathon Projects & Team Collaborations',
    period: 'Completed Date: 2024,2025,2026',
    description:
      'Worked on AI and Machine Learning projects, integrating LLM APIs and building intelligent applications.',
  }
];

export interface Achievement {
  title: string;
  description: string;
}

/**
 * Add verified achievements here (hackathon awards, competitions,
 * certifications, open-source contributions). While the list is empty the
 * Achievements section stays hidden automatically.
 */
export const achievements: Achievement[] = [];

export type SectionId = 'home' | 'about' | 'experience' | 'projects' | 'contact';
