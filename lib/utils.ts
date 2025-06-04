import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Get the correct image path for the current environment
 * Next.js automatically handles the basePath from next.config.mjs
 */
export function getImagePath(path: string): string {
  // Remove leading slash if present to normalize the path
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path
  
  // Return the path with a leading slash - Next.js will handle basePath automatically
  return `/${normalizedPath}`
}
