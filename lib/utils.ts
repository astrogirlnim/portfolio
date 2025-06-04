import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Get the correct image path for the current environment
 * Handles both images and other files (like PDFs) correctly for GitHub Pages deployment
 */
export function getImagePath(path: string): string {
  // Remove leading slash if present to normalize the path
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path
  
  // Check if this is an image file
  const isImage = /\.(png|jpg|jpeg|gif|svg|webp)$/i.test(normalizedPath)
  
  // For production builds with static export
  if (process.env.NODE_ENV === 'production') {
    if (isImage) {
      // For images, we need to include the basePath since assetPrefix handles this
      return `/portfolio/${normalizedPath}`
    } else {
      // For non-images (like PDFs), let Next.js handle the basePath automatically
      return `/${normalizedPath}`
    }
  }
  
  // For development, return the path with a leading slash
  return `/${normalizedPath}`
}
