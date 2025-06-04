import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Get the correct image path for the current environment
 * In development: returns the path as-is (no basePath)
 * In production: adds the /portfolio prefix for GitHub Pages
 */
export function getImagePath(path: string): string {
  // Remove leading slash if present to normalize the path
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path
  
  // In production, add the basePath prefix
  if (process.env.NODE_ENV === 'production') {
    return `/portfolio/${normalizedPath}`
  }
  
  // In development, use the path as-is (no basePath)
  return `/${normalizedPath}`
}
