export interface Skill {
  name: string
  level: number
  unit: string
  category: string
}

export const skills: Skill[] = [
  { name: 'Python', level: 90, unit: '%', category: 'Languages' },
  { name: 'JavaScript', level: 82, unit: '%', category: 'Languages' },
  { name: 'Java', level: 80, unit: '%', category: 'Languages' },
  { name: 'C', level: 80, unit: '%', category: 'Languages' },
  { name: 'SQL', level: 85, unit: '%', category: 'Data' },
  { name: 'NoSQL', level: 85, unit: '%', category: 'Data' },
  { name: 'TypeScript', level: 65, unit: '%', category: 'Languages' },
  { name: 'Golang', level: 60, unit: '%', category: 'Languages' },

  { name: 'HTML/CSS', level: 85, unit: '%', category: 'Frontend' },
  { name: 'React', level: 85, unit: '%', category: 'Frontend' },
  { name: 'Tailwind CSS', level: 85, unit: '%', category: 'Frontend' },
  { name: 'Framer Motion', level: 75, unit: '%', category: 'Frontend' },
  { name: 'Responsive Design', level: 85, unit: '%', category: 'Frontend' },

  { name: 'FastAPI', level: 81, unit: '%', category: 'Backend' },
  { name: 'REST APIs', level: 83, unit: '%', category: 'Backend' },
  { name: 'OAuth', level: 75, unit: '%', category: 'Backend' },
  { name: 'Authentication', level: 80, unit: '%', category: 'Backend' },
  { name: 'Async Programming', level: 75, unit: '%', category: 'Backend' },
  { name: 'Data Validation', level: 85, unit: '%', category: 'Backend' },

  { name: 'MongoDB', level: 80, unit: '%', category: 'Data' },
  { name: 'SQLite', level: 85, unit: '%', category: 'Data' },
  { name: 'Firebase', level: 84, unit: '%', category: 'Data' },
  { name: 'Database Design', level: 85, unit: '%', category: 'Data' },
  { name: 'Aggregation Pipelines', level: 80, unit: '%', category: 'Data' },
  { name: 'Query Optimization', level: 75, unit: '%', category: 'Data' },

  { name: 'OpenAI APIs', level: 80, unit: '%', category: 'AI/ML' },
  { name: 'Claude APIs', level: 80, unit: '%', category: 'AI/ML' },
  { name: 'Prompt Engineering', level: 85, unit: '%', category: 'AI/ML' },
  { name: 'AI/ML', level: 75, unit: '%', category: 'AI/ML' },

  { name: 'Android Development', level: 80, unit: '%', category: 'Mobile' },
  { name: 'Android SDK', level: 78, unit: '%', category: 'Mobile' },

  { name: 'Git', level: 90, unit: '%', category: 'Tooling' },
  { name: 'GitHub', level: 92, unit: '%', category: 'Tooling' },
  { name: 'VS Code', level: 85, unit: '%', category: 'Tooling' },
  { name: 'Framer', level: 80, unit: '%', category: 'Tooling' },
  { name: 'Pytest', level: 80, unit: '%', category: 'Tooling' },

  { name: 'Docker', level: 70, unit: '%', category: 'DevOps' },
  { name: 'Kubernetes', level: 60, unit: '%', category: 'DevOps' },
  { name: 'CI/CD', level: 78, unit: '%', category: 'DevOps' },
  { name: 'Linux/Unix', level: 80, unit: '%', category: 'DevOps' },
  { name: 'Cloud Deployment', level: 80, unit: '%', category: 'DevOps' },
  { name: 'Render', level: 80, unit: '%', category: 'DevOps' },
  { name: 'Vercel', level: 75, unit: '%', category: 'DevOps' },

  { name: 'Agile/Scrum', level: 85, unit: '%', category: 'Concepts' },
  { name: 'SDLC', level: 85, unit: '%', category: 'Concepts' },
  { name: 'Object-Oriented Programming', level: 85, unit: '%', category: 'Concepts' },
  { name: 'Technical Documentation', level: 85, unit: '%', category: 'Concepts' },
]

export const SKILLS_PREVIEW_COUNT = 3

export function groupSkillsByCategory(skillList: Skill[]): Record<string, Skill[]> {
  return skillList.reduce<Record<string, Skill[]>>((groups, skill) => {
    if (!groups[skill.category]) {
      groups[skill.category] = []
    }
    groups[skill.category].push(skill)
    return groups
  }, {})
}
