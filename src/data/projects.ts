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
    images: [
      { src: '/images/email-marketing/email-refresh-01.jpg', alt: 'Original email newsletter layout' },
      { src: '/images/email-marketing/email-refresh-02.jpg', alt: 'Redesigned "50,000 Field Notes" email layout' },
    ],
  },
  {
    id: 'internal-communications-email',
    categorySlug: 'email-marketing',
    title: 'Internal Communications',
    paragraphs: [
      'I developed a wide range of internal communications, including monthly newsletters, leadership updates, and project-specific campaigns. Using Adobe Illustrator, Photoshop, SendGrid, and Workshop, I created visually engaging email experiences that aligned with organizational goals and improved message clarity.',
      'My communications consistently achieved higher engagement rates than standard pre-formatted templates, demonstrating the value of custom design, thoughtful content hierarchy, and audience-focused messaging.',
    ],
    images: [
      { src: '/images/email-marketing/internal-communications-01.jpg', alt: 'Quarterly IT newsletter email' },
      { src: '/images/email-marketing/internal-communications-02.jpg', alt: 'CrowdStrike-Microsoft incident impact brief email' },
    ],
  },

  // SharePoint Design
  {
    id: 'internal-hub',
    categorySlug: 'sharepoint-design',
    title: 'Internal Hub',
    paragraphs: [
      'This is a SharePoint site built with the intention of giving employees one spot to find important information such as news, announcements, team files, organization charts, and resources. Through thoughtful design, clear information architecture, and user-focused communication, I helped transform complex IT content into an accessible and engaging digital experience.',
    ],
    images: [
      { src: '/images/sharepoint-design/internal-hub-01.jpg', alt: 'Enterprise IT Hub SharePoint homepage' },
    ],
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
    images: [
      { src: '/images/event-management/employee-engagement-events-01.jpg', alt: 'EIT FS&D Cookout event poster' },
    ],
    gallery: [
      { src: '/images/event-management/gallery-chili-cookoff.jpg', alt: 'IT Colleague Chili Cook-Off poster' },
      { src: '/images/event-management/gallery-trivia.jpg', alt: 'EIT & FS&D IT trivia event graphic' },
      { src: '/images/event-management/gallery-cookie-bakeoff.jpg', alt: 'Great Corteva Holiday Cookie Bake Off poster' },
      { src: '/images/event-management/gallery-may-day.jpg', alt: 'Enterprise IT May Day Basket snack station poster' },
      { src: '/images/event-management/gallery-gameday-1.jpg', alt: 'Game Day football graphic' },
      { src: '/images/event-management/gallery-gameday-2.jpg', alt: 'Game Day football graphic, second matchup' },
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
    images: [
      { src: '/images/executive-presentations/executive-presentations-01.jpg', alt: 'EIT Voice of Customer Survey executive summary slides' },
      { src: '/images/executive-presentations/executive-presentations-02.jpg', alt: 'Enterprise IT OpEx and talent & leadership slides' },
      { src: '/images/executive-presentations/executive-presentations-03.jpg', alt: 'Enterprise IT org structure and disaster recovery roadmap slides' },
    ],
    gallery: [
      { src: '/images/executive-presentations/gallery-ai-in-action.jpg', alt: 'AI in Action BioIntelligence & Sprout presentation slides' },
      { src: '/images/executive-presentations/gallery-market-to-sell.jpg', alt: 'Commercial market-to-sell presentation slides' },
      { src: '/images/executive-presentations/gallery-ai-value-framework.jpg', alt: 'AI value framework presentation slides' },
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
    images: [
      { src: '/images/brand-stewardship/roshek-skinner-01.jpg', alt: 'Roshek Skinner Financial Services business card' },
      { src: '/images/brand-stewardship/roshek-skinner-02.jpg', alt: '"Let\'s Bowl!" Roshek Skinner event flyer' },
    ],
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
    images: [
      { src: '/images/brand-stewardship/bral-neidert-01.jpg', alt: 'Bral | Neidert Private Wealth Advisors rebrand mockup' },
    ],
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
    images: [
      { src: '/images/marketing-campaigns/alliance-environmental-01.jpg', alt: 'Alliance Environmental radon testing flyer' },
      { src: '/images/marketing-campaigns/alliance-environmental-02.jpg', alt: 'Alliance Environmental radon test in progress door hanger' },
    ],
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
    images: [
      { src: '/images/marketing-campaigns/behavior-in-action-01.jpg', alt: '"Think Bold, Drive Value, Work Smart" Behavior in Action campaign graphics' },
    ],
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
    images: [
      { src: '/images/ui-ux-design/it-explorer-01.jpg', alt: 'Corteva IT Explorer onboarding UI mockup' },
    ],
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
    images: [
      { src: '/images/ui-ux-design/profile-page-01.jpg', alt: 'Corteva Connect employee profile page UI mockup' },
    ],
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
    images: [
      { src: '/images/ui-ux-design/power-bi-report-templates-01.jpg', alt: 'Branded Power BI report template mockups' },
    ],
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
    images: [
      { src: '/images/ui-ux-design/app-icons-01.jpg', alt: 'Set of eight branded app icons' },
    ],
    contentNotice: REUSED_GENERIC_COMMS_COPY_NOTICE,
  },
]
