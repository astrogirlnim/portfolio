import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Get the correct asset path for the current environment
 * Handles static assets from the public directory
 * Next.js automatically handles basePath/assetPrefix in production builds
 */
export function getAssetPath(path: string): string {
  // Remove leading slash if present to normalize the path
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path
  
  // Next.js automatically applies assetPrefix in production builds
  // so we just need to return the path with a leading slash
  return `/${normalizedPath}`
}

// Keep backward compatibility
export const getImagePath = getAssetPath
