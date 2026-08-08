import type { ResumeData } from './types'

export const resume: ResumeData = {
  name: 'Kennedy Papian',
  title: 'Graphic Designer',
  contact: {
    phone: '(515) 988-4838',
    email: 'kpapian@gmail.com',
    website: 'kennedypapian.com',
  },
  education: [
    {
      institution: 'University of Iowa – Graphic Design, B.F.A.',
      degree: 'B.F.A. in Graphic Design',
      years: '2015 – 2018',
      honors: 'Phi Beta Kappa Honors Society',
    },
  ],
  workHistory: [
    {
      company: 'Vylor',
      role: 'Visual Design Lead',
      dates: '2023 – Present',
      highlights: [
        'Designed presentations, digital graphics, and internal communications that established enterprise brand standards and lifted email open and click-through rates by 18%+',
        'Translated complex IT, change management, and user experience concepts into clear visual communications, improving stakeholder understanding and adoption of new processes and technologies',
        'Supported two company brand refresh initiatives by developing visual assets and communication materials that ensured a consistent and cohesive brand experience and facilitated the transition away from legacy materials',
        'Integrated AI-powered capabilities within Adobe Creative Cloud and Microsoft Copilot to streamline workflows and increase production efficiency, reclaiming 8 hours a week for higher-valued design work',
        'Led the IT employee engagement committee by planning and coordinating employee focused events that supported team connection and morale',
      ],
    },
    {
      company: 'Corteva Agriscience',
      role: 'Visual Designer',
      dates: '2019 – 2023',
      highlights: [
        'Developed branded marketing and communication assets that strengthened visual consistency and elevated audience engagement with social channels by 22%+',
        'Elevated design standards set on executive presentations through distribution of branded PowerPoint templates',
        'Provided support and maintenance to WordPress site including page creation and UI design guidance',
        'Managed an entry-level apprentice by providing guidance in design principles and creative workflows.',
      ],
    },
    {
      company: 'Wells Fargo',
      role: 'Graphic Designer',
      dates: '2018 – 2019',
      highlights: [
        'Designed on-demand templates for internal company use',
        'Led design efforts supporting legal and compliance documentation while ensuring brand consistency and regulatory alignment',
        'Collaborated with developers to create user-focused digital experiences and internal communication materials',
      ],
    },
  ],
  skillsColumnA: [
    'Graphic design principles including: typography, layout and composition, color theory, illustration',
    'Brand identity and stewardship',
    'Strategic communications',
    'Executive presentation support',
    'Human-Centered AI integration',
    'Print production',
  ],
  skillsColumnB: [
    'Prototyping and interaction design',
    'Creative problem solving',
    'Attention to detail',
    'Project management',
    'Event management',
    'Organizational change management',
    'Adaptability and continuous learning',
  ],
  technicalColumnA: [
    'Adobe Creative Suite',
    'Adobe Creative Cloud',
    'Microsoft 365',
    'Google Workspace',
    'Microsoft Copilot',
  ],
  technicalColumnB: [
    'Claude design',
    'Figma',
    'Website platforms – GoDaddy, WordPress, Squarespace',
    'Email marketing – SendGrid, Workshop',
  ],
}
