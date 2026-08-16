import type { Project } from './types'

const REUSED_EVENTS_COPY_NOTICE =
  'Source PDF reuses the "Employee Engagement Events" write-up verbatim here; likely leftover placeholder text. See CONTENT-TODO.md.'
const REUSED_GENERIC_COMMS_COPY_NOTICE =
  'Source PDF reuses the generic "wide range of internal communications... SendGrid and Workshop" write-up verbatim here; likely leftover placeholder text. See CONTENT-TODO.md.'

export const projects: Project[] = [
  // Email Marketing
  {
    id: 'email-refresh',
    categorySlug: 'email-marketing',
    title: 'Email Refresh',
    paragraphs: [
      'The original email contained valuable insights about the performance of a recently launched app, but the information was difficult to read due to a lack of visual hierarchy and structure.',
      'I redesigned the communication by introducing a clear content hierarchy, improving readability, and creating a more engaging layout that helped key metrics and takeaways stand out.',
    ],
    statCallout:
      'The design refresh sent out to a second group of stakeholders resulted in a 25%+ increase in click-through engagement.',
    image: { src: '/images/projects/email/email-one.png', alt: 'Redesigned "50,000 Field Notes" email layout' },
  },
  {
    id: 'internal-communications-email',
    categorySlug: 'email-marketing',
    title: 'Internal Communications',
    paragraphs: [
      'I developed a wide range of internal communications, including monthly newsletters, leadership updates, and project-specific campaigns. Using Adobe Illustrator, Photoshop, SendGrid, and Workshop, I created visually engaging email experiences that aligned with organizational goals and improved message clarity.',
      'My communications consistently achieved higher engagement rates than standard pre-formatted templates, demonstrating the value of custom design, thoughtful content hierarchy, and audience-focused messaging.',
    ],
    image: { src: '/images/projects/email/email-two.png', alt: 'CrowdStrike-Microsoft incident impact brief email' },
  },

  // SharePoint Design
  {
    id: 'internal-hub',
    categorySlug: 'sharepoint-design',
    title: 'Internal Hub',
    paragraphs: [
      'This is a SharePoint site built with the intention of giving employees one spot to find important information such as news, announcements, team files, organization charts, and resources. Through thoughtful design, clear information architecture, and user-focused communication, I helped transform complex IT content into an accessible and engaging digital experience.',
    ],
    image: { src: '/images/projects/sharepoint/sharepoint-one.png', alt: 'Enterprise IT Hub SharePoint homepage' },
  },
  {
    id: 'internal-hub-2',
    categorySlug: 'sharepoint-design',
    title: 'Internal Hub #2',
    paragraphs: [
      'This site was also designed and developed as a centralized hub for internal IT employees. The goal was to improve the ability to discover, enhances employee engagement, and provides an intuitive experience that helps users quickly find the information and support they need.',
    ],
    image: { src: '/images/projects/sharepoint/sharepoint-two.png', alt: 'Enterprise IT Hub SharePoint homepage' },
  },

  // Event Management
  {
    id: 'employee-engagement-events',
    categorySlug: 'event-management',
    title: 'Employee Engagement Events',
    subtitle: 'EIT & FS&D IT',
    paragraphs: [
      'I was responsible for hosting multiple employee engagement events every year, including organizing the event, creating signage, event materials, and execution. Events ranged from 50 to 400 people, and included participants from employees to executive leadership.',
    ],
    bulletList: [
      'BBQ cookouts',
      'Executive round table discussions',
      'Town hall meetings',
      'Holiday parties',
      'Off-site baseball game outing',
    ],
    image: { src: '/images/projects/event/event-one.png', alt: 'EIT FS&D Cookout event poster' },
    gallery: [
      { src: '/images/projects/event/event-grid-one.png', alt: 'Employee engagement event poster' },
      { src: '/images/projects/event/event-grid-two.png', alt: 'Employee engagement event poster' },
    ],
  },

  // Executive Presentations
  {
    id: 'executive-presentations',
    categorySlug: 'executive-presentations',
    title: 'Executive Presentations',
    paragraphs: [
      'I was responsible for hosting multiple employee engagement events every year, including organizing the event, creating signage, event materials, and execution. Events ranged from 50 to 400 people, and included participants from employees to executive leadership.',
    ],
    bulletList: [
      'BBQ cookouts',
      'Executive round table discussions',
      'Town hall meetings',
      'Holiday parties',
      'Off-site baseball game outing',
    ],
    image: { src: '/images/projects/presentations/presentation-one.png', alt: 'EIT Voice of Customer Survey executive summary slides' },
    gallery: [
      { src: '/images/projects/presentations/presentation-grid-one.png', alt: 'Executive presentation slide' },
      { src: '/images/projects/presentations/presentation-grid-two.png', alt: 'Executive presentation slide' },
      { src: '/images/projects/presentations/presentation-grid-three.png', alt: 'Executive presentation slide' },
    ],
    contentNotice: REUSED_EVENTS_COPY_NOTICE,
  },

  // Brand Stewardship
  {
    id: 'roshek-skinner-financial',
    categorySlug: 'brand-stewardship',
    title: 'Roshek Skinner Financial',
    paragraphs: [
      'I was responsible for hosting multiple employee engagement events every year, including organizing the event, creating signage, event materials, and execution. Events ranged from 50 to 400 people, and included participants from employees to executive leadership.',
    ],
    bulletList: [
      'BBQ cookouts',
      'Executive round table discussions',
      'Town hall meetings',
      'Holiday parties',
      'Off-site baseball game outing',
    ],
    image: { src: '/images/projects/brand/brand-one.png', alt: 'Roshek Skinner Financial Services business card' },
    contentNotice: REUSED_EVENTS_COPY_NOTICE,
  },
  {
    id: 'bral-neidert-advisors',
    categorySlug: 'brand-stewardship',
    title: 'Bral | Neidert Advisors',
    subtitle: 'Where Money Meets Life',
    paragraphs: [
      'I developed a wide range of internal communications, including monthly newsletters, leadership updates, and project-specific campaigns. Using Adobe Illustrator, Photoshop, SendGrid, and Workshop, I created visually engaging email experiences that aligned with organizational goals and improved message clarity.',
      'My communications consistently achieved higher engagement rates than standard pre-formatted templates, demonstrating the value of custom design, thoughtful content hierarchy, and audience-focused messaging.',
    ],
    image: { src: '/images/projects/brand/brand-two.png', alt: 'Bral | Neidert Private Wealth Advisors rebrand mockup' },
    contentNotice: REUSED_GENERIC_COMMS_COPY_NOTICE,
  },

  // Marketing Campaigns
  {
    id: 'alliance-environmental',
    categorySlug: 'marketing-campaigns',
    title: 'Alliance Environmental',
    paragraphs: [
      'I was responsible for hosting multiple employee engagement events every year, including organizing the event, creating signage, event materials, and execution. Events ranged from 50 to 400 people, and included participants from employees to executive leadership.',
    ],
    bulletList: [
      'BBQ cookouts',
      'Executive round table discussions',
      'Town hall meetings',
      'Holiday parties',
      'Off-site baseball game outing',
    ],
    image: { src: '/images/projects/marketing/marketing-one.png', alt: 'Alliance Environmental radon testing flyer' },
    contentNotice: REUSED_EVENTS_COPY_NOTICE,
  },
  {
    id: 'behavior-in-action',
    categorySlug: 'marketing-campaigns',
    title: 'Behavior in Action',
    paragraphs: [
      'I developed a wide range of internal communications, including monthly newsletters, leadership updates, and project-specific campaigns. Using Adobe Illustrator, Photoshop, SendGrid, and Workshop, I created visually engaging email experiences that aligned with organizational goals and improved message clarity.',
      'My communications consistently achieved higher engagement rates than standard pre-formatted templates, demonstrating the value of custom design, thoughtful content hierarchy, and audience-focused messaging.',
    ],
    image: { src: '/images/projects/marketing/marketing-two.png', alt: '"Think Bold, Drive Value, Work Smart" Behavior in Action campaign graphics' },
    contentNotice: REUSED_GENERIC_COMMS_COPY_NOTICE,
  },

  // UI/UX Design
  {
    id: 'it-explorer',
    categorySlug: 'ui-ux-design',
    title: 'IT Explorer',
    paragraphs: [
      'I was responsible for hosting multiple employee engagement events every year, including organizing the event, creating signage, event materials, and execution. Events ranged from 50 to 400 people, and included participants from employees to executive leadership.',
    ],
    bulletList: [
      'BBQ cookouts',
      'Executive round table discussions',
      'Town hall meetings',
      'Holiday parties',
      'Off-site baseball game outing',
    ],
    image: { src: '/images/projects/ui-ux/ui-ux-one.png', alt: 'Corteva IT Explorer onboarding UI mockup' },
    contentNotice: REUSED_EVENTS_COPY_NOTICE,
  },
  {
    id: 'profile-page',
    categorySlug: 'ui-ux-design',
    title: 'Profile Page',
    paragraphs: [
      'I was responsible for hosting multiple employee engagement events every year, including organizing the event, creating signage, event materials, and execution. Events ranged from 50 to 400 people, and included participants from employees to executive leadership.',
    ],
    bulletList: [
      'BBQ cookouts',
      'Executive round table discussions',
      'Town hall meetings',
      'Holiday parties',
      'Off-site baseball game outing',
    ],
    image: { src: '/images/projects/ui-ux/ui-ux-two.png', alt: 'Corteva Connect employee profile page UI mockup' },
    contentNotice: REUSED_EVENTS_COPY_NOTICE,
  },
  {
    id: 'power-bi-report-templates',
    categorySlug: 'ui-ux-design',
    title: 'Power BI Report Templates',
    paragraphs: [
      'I developed a wide range of internal communications, including monthly newsletters, leadership updates, and project-specific campaigns. Using Adobe Illustrator, Photoshop, SendGrid, and Workshop, I created visually engaging email experiences that aligned with organizational goals and improved message clarity.',
      'My communications consistently achieved higher engagement rates than standard pre-formatted templates, demonstrating the value of custom design, thoughtful content hierarchy, and audience-focused messaging.',
    ],
    image: { src: '/images/projects/ui-ux/ui-ux-three.png', alt: 'Branded Power BI report template mockups' },
    contentNotice: REUSED_GENERIC_COMMS_COPY_NOTICE,
  },
  {
    id: 'app-icons',
    categorySlug: 'ui-ux-design',
    title: 'App Icons',
    paragraphs: [
      'I developed a wide range of internal communications, including monthly newsletters, leadership updates, and project-specific campaigns. Using Adobe Illustrator, Photoshop, SendGrid, and Workshop, I created visually engaging email experiences that aligned with organizational goals and improved message clarity.',
      'My communications consistently achieved higher engagement rates than standard pre-formatted templates, demonstrating the value of custom design, thoughtful content hierarchy, and audience-focused messaging.',
    ],
    image: { src: '/images/projects/ui-ux/ui-ux-four.png', alt: 'Set of eight branded app icons' },
    contentNotice: REUSED_GENERIC_COMMS_COPY_NOTICE,
  },
]
