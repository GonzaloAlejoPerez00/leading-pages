import fs from 'fs'
import path from 'path'
import { LandingPageConfig } from '@/types/landing-config'

export function getConfigBySlug(slug: string): LandingPageConfig | null {
  try {
    const configPath = path.join(process.cwd(), 'config', `${slug}-landing.json`)
    const fileContent = fs.readFileSync(configPath, 'utf-8')
    return JSON.parse(fileContent) as LandingPageConfig
  } catch (error) {
    console.error(`Error loading config for slug: ${slug}`, error)
    return null
  }
}

export function getAllConfigSlugs(): string[] {
  try {
    const configDir = path.join(process.cwd(), 'config')
    const files = fs.readdirSync(configDir)
    return files
      .filter(file => file.endsWith('-landing.json') && file !== 'TEMPLATE.json')
      .map(file => file.replace('-landing.json', ''))
  } catch (error) {
    return []
  }
}