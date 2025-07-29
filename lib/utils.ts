import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Get the correct asset path for the current environment
 * Handles images, videos, PDFs, and other static assets for GitHub Pages deployment
 */
export function getAssetPath(path: string): string {
  // Remove leading slash if present to normalize the path
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path
  
  // For production builds with static export on GitHub Pages
  if (process.env.NODE_ENV === 'production') {
    // Next.js assetPrefix and basePath automatically handle the '/portfolio/' prefix
    // so we just need to add the leading slash for relative paths
    return `/${normalizedPath}`
  }
  
  // For development, return the path with a leading slash
  return `/${normalizedPath}`
}

// Keep backward compatibility
export const getImagePath = getAssetPath
