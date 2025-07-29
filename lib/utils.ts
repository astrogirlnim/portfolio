import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Get the correct asset path for the current environment
 * Works with Next.js basePath configuration for GitHub Pages deployment
 */
export function getAssetPath(path: string): string {
  // Remove leading slash if present to normalize the path
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path
  
  // Next.js basePath handles the /portfolio/ prefix automatically in production
  // So we just need to return the path with a leading slash
  return `/${normalizedPath}`
}

// Keep backward compatibility
export const getImagePath = getAssetPath
