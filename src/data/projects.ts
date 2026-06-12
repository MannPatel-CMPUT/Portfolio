export interface Project {
  name: string
  description: string
  techStack: string[]
  buildStatus: string
  systemType: string
  performanceFocus: string
  githubUrl: string
  demoUrl: string
}

export const projects: Project[] = [
  {
    name: 'Hirely / Career OS',
    description:
      'A career management platform that helps students track applications, optimize resumes, and navigate the hiring pipeline with structured workflows.',
    techStack: ['React', 'FastAPI', 'MongoDB', 'Python'],
    buildStatus: 'Active Development',
    systemType: 'Full-Stack Application',
    performanceFocus: 'Workflow Automation',
    githubUrl: 'https://github.com',
    demoUrl: '#',
  },
  {
    name: 'AI Document Retrieval System',
    description:
      'An information retrieval pipeline that indexes documents and surfaces relevant context using embedding-based search and ranking.',
    techStack: ['Python', 'FastAPI', 'AI/ML', 'MongoDB'],
    buildStatus: 'Prototype',
    systemType: 'AI / Backend Service',
    performanceFocus: 'Search Latency',
    githubUrl: 'https://github.com',
    demoUrl: '#',
  },
  {
    name: 'Backend API Platform',
    description:
      'A modular REST API with authentication, data validation, and database integration designed for scalable service-oriented architecture.',
    techStack: ['FastAPI', 'SQL', 'Python', 'Git'],
    buildStatus: 'Stable',
    systemType: 'Backend Service',
    performanceFocus: 'Throughput & Reliability',
    githubUrl: 'https://github.com',
    demoUrl: '#',
  },
  {
    name: 'Academic Project Suite',
    description:
      'A collection of coursework and personal builds spanning algorithms, databases, and software engineering fundamentals.',
    techStack: ['JavaScript', 'Python', 'SQL', 'React'],
    buildStatus: 'Completed',
    systemType: 'Multi-Project Suite',
    performanceFocus: 'Code Quality',
    githubUrl: 'https://github.com',
    demoUrl: '#',
  },
]
