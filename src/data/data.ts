import projectsJson from './projects.json'
import profileJson from './profile.json'
import siteConfigJson from './siteConfig.json'
import type { Project, ProfileData, SiteConfig } from './types'

export const projects = projectsJson as Project[]
export const profile = profileJson as ProfileData
export const siteConfig = siteConfigJson as SiteConfig
