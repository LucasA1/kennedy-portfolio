import type { SiteConfig } from './types'

export const siteConfig: SiteConfig = {
  siteName: 'Kennedy Papian',
  tagline: 'Graphic Design Extraordinaire',
  navLinks: [
    { label: 'Home', to: '/' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'Contact', to: '/contact' },
  ],
  contact: {
    email: 'kpapian@gmail.com',
    handle: 'kennedypapian',
    phone: '(515) 988-4838',
    resumeUrl: '/resume/Kennedy-Papian-Resume.pdf',
    portfolioPdfUrl: '/resume/Kennedy-Papian-Portfolio.pdf',
  },
}
