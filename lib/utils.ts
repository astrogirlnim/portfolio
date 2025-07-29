import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Get the correct asset path for the current environment
 * Handles static assets from the public directory for GitHub Pages deployment
 * 
 * In production with static export:
 * - PDFs and documents get Next.js assetPrefix automatically (single prefix)
 * - Images and photos need manual basePath prefix (since they're referenced directly)
 * - Next.js assetPrefix only applies to processed assets, not direct public references
 */
export function getAssetPath(path: string): string {
  // Remove leading slash if present to normalize the path
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path
  
  // In development, return the path with a leading slash
  if (process.env.NODE_ENV === 'development') {
    return `/${normalizedPath}`
  }
  
  // In production, check if this is a PDF or document that gets assetPrefix automatically
  const isPdfOrDocument = normalizedPath.toLowerCase().endsWith('.pdf') || 
                          normalizedPath.toLowerCase().endsWith('.doc') || 
                          normalizedPath.toLowerCase().endsWith('.docx')
  
  if (isPdfOrDocument) {
    // PDFs and documents work with Next.js assetPrefix, so just return with leading slash
    return `/${normalizedPath}`
  } else {
    // Images and other assets need manual basePath prefix
    return `/portfolio/${normalizedPath}`
  }
}

// Keep backward compatibility
export const getImagePath = getAssetPath
