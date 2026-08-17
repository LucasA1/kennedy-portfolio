import type { IconType } from 'react-icons'

export interface NavLink {
  label: string
  to: string
}

export interface ContactInfo {
  email: string
  handle: string
  phone: string
  resumeUrl: string
  portfolioPdfUrl: string
}

export interface SiteConfig {
  siteName: string
  tagline: string
  navLinks: NavLink[]
  contact: ContactInfo
}

export interface HeroCta {
  label: string
  to: string
}

export interface ContentImage {
  src: string
  alt: string
}

export interface HeroContent {
  eyebrow: string
  title: string
  paragraphs?: string[]
  ctas?: HeroCta[]
  image?: ContentImage
}

export interface SkillCardData {
  icon: IconType
  title: string
  description: string
}

export interface AboutMetaItem {
  icon: IconType
  label: string
  sublabel?: string
}

export interface HomeContent {
  hero: HeroContent
  skills: {
    eyebrow: string
    heading: string
    bullets: string[]
    cards: SkillCardData[]
  }
  about: {
    eyebrow: string
    heading: string
    meta: AboutMetaItem[]
    paragraphs: string[]
    image: ContentImage
  }
  portfolioPreview: {
    eyebrow: string
    heading: string
    /** Keyed by CategorySummary.slug — home-page-specific crops, distinct from each category's portfolio-page cover image. */
    categoryImages: Record<string, ContentImage>
  }
}

export interface CategorySummary {
  slug: string
  name: string
  thumbnailSrc: string
  thumbnailAlt: string
}

export interface ProjectImage {
  src: string
  alt: string
  aspectRatio?: number
}

export interface Project {
  id: string
  categorySlug: string
  title: string
  subtitle?: string
  paragraphs: string[]
  bulletList?: string[]
  statCallout?: string
  image: ProjectImage
  gallery?: ProjectImage[]
}

export interface EducationItem {
  institution: string
  degree: string
  years: string
  honors?: string
}

export interface WorkHistoryItem {
  company: string
  role: string
  dates: string
  highlights: string[]
}

export interface ResumeData {
  name: string
  title: string
  contact: {
    phone: string
    email: string
    website: string
  }
  education: EducationItem[]
  workHistory: WorkHistoryItem[]
  skillsColumnA: string[]
  skillsColumnB: string[]
  technicalColumnA: string[]
  technicalColumnB: string[]
}
