import { MdAutoAwesome, MdDesignServices, } from 'react-icons/md'
import { FaMapMarkerAlt, FaGraduationCap , FaUser, FaPaintBrush, FaNewspaper } from 'react-icons/fa'
import type { HomeContent } from './types'

export const homeContent: HomeContent = {
  hero: {
    eyebrow: 'Graphic Design Extraordinaire',
    title: "Hi, I'm Kennedy!",
    paragraphs: [
      "As a designer with 10+ years of experience, I specialize in elevating communications, strengthening brand recognition, and simplifying complex information.",
      "I've worked with organizations ranging from small businesses to Fortune 500 enterprises, helping to create work that is both visually compelling and strategically effective.",
    ],
    ctas: [
      { label: 'MY WORK', to: '/portfolio' },
      { label: "LET'S CHAT", to: '/contact' },
    ],
    image: {
      src: '/images/home/hero-portrait.png',
      alt: 'Portrait of Kennedy Papian',
    },
  },
  skills: {
    eyebrow: 'Skills',
    heading: 'What can I do?',
    bullets: [
      'Brand identity and stewardship',
      'Executive presentation support',
      'Print production',
      'Project management',
      'Event management',
      'Adobe Creative Suite, Figma, Claude Design, MS Copilot',
    ],
    cards: [
      {
        icon: FaPaintBrush,
        title: 'Graphic design',
        description:
          'With a Bachelor of Fine Arts (B.F.A.) in Graphic Design, I bring a strong foundation in design principles that guide every project I create.',
      },
      {
        icon: MdDesignServices,
        title: 'UI/UX design',
        description:
          'Great design goes beyond aesthetics. I focus on creating user experiences that feel intuitive, accessible, and purposeful.',
      },
      {
        icon: MdAutoAwesome,
        title: 'AI Integration',
        description:
          'I balance the speed of AI with the critical thinking, empathy, and design expertise needed to create meaningful visual communications.',
      },
      {
        icon: FaNewspaper,
        title: 'Communications',
        description:
          'I specialize in turning boring, cookie-cutter deliverables into clean, compelling designs that stand out and get noticed.',
      },
    ],
  },
  about: {
    eyebrow: 'About',
    heading: 'Who, me?',
    meta: [
      { icon: FaUser, label: 'Kennedy Papian' },
      { icon: FaMapMarkerAlt, label: 'Des Moines, Iowa' },
      { icon: FaGraduationCap , label: 'University of Iowa', sublabel: 'Graphic Design – B.F.A.' },
    ],
    paragraphs: [
      "I got my start in this industry as a graphic design assistant at the University of Iowa Hospitals & Clinics, spending much of my time laying out pages or cutting and mounting thousands of posters, banners, rack cards, and anything else you could think of. While the tools and projects have evolved over the years, one thing hasn't changed: my passion for helping people communicate more effectively through design.",
      "I love taking complex information and turning it into something people can actually understand and engage with. Whether it's a presentation, internal communication, SharePoint site, or brand refresh, my goal is always the same: make it clear, make it useful, and make it look great.",
    ],
    image: {
      src: '/images/home/about-portrait.png',
      alt: 'Portrait of Kennedy Papian smiling outdoors',
    },
  },
  portfolioPreview: {
    eyebrow: 'Portfolio',
    heading: 'Just a few things',
    categoryImages: {
      'email-marketing': {
        src: '/images/home/email-marketing.png',
        alt: 'Email marketing campaign design',
      },
      'sharepoint-design': {
        src: '/images/home/sharepoint-design.png',
        alt: 'SharePoint intranet hub design',
      },
      'event-management': {
        src: '/images/home/event-management.png',
        alt: 'Employee engagement event branding',
      },
      'executive-presentations': {
        src: '/images/home/executive-presentations.png',
        alt: 'Executive presentation slide design',
      },
      'brand-stewardship': {
        src: '/images/home/brand-stewardship.png',
        alt: 'Brand identity and stewardship work',
      },
      'marketing-campaigns': {
        src: '/images/home/marketing-campaigns.png',
        alt: 'Marketing campaign design',
      },
      'ui-ux-design': {
        src: '/images/home/ui-ux-design.png',
        alt: 'UI/UX design work',
      },
      'miscellaneous-design': {
        src: '/images/home/misc-design.png',
        alt: 'Miscellaneous design projects',
      },
    },
  },
}
