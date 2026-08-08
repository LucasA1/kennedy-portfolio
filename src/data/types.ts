export interface Project {
  id: string
  title: string
  category: string
  thumbnail: string
  summary: string
  fullDescription: string
  images: string[]
  tags: string[]
}

export interface EducationItem {
  institution: string
  degree: string
  years: string
  location: string
}

export interface WorkHistoryItem {
  company: string
  role: string
  dates: string
  location: string
  highlights: string[]
}

export interface ProfileData {
  bio: string
  skills: string[]
  software: string[]
  education: EducationItem[]
  workHistory: WorkHistoryItem[]
}

export interface NavLink {
  label: string
  href: string
}

export interface SocialHandle {
  platform: string
  url: string
}

export interface SiteConfig {
  navLinks: NavLink[]
  socialLinks: SocialHandle[]
  contact: {
    email: string
    phone: string
    resumeUrl: string
  }
}
