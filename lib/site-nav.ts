export const siteSectionLinks = [
  { href: "/#about", sectionId: "about", label: "About" },
  { href: "/#skills", sectionId: "skills", label: "Skills" },
  { href: "/#experience", sectionId: "experience", label: "Experience" },
  { href: "/#projects", sectionId: "projects", label: "Projects" },
  { href: "/#contact", sectionId: "contact", label: "Contact" },
] as const

export const blogNavLink = { href: "/blog/", label: "Blog" } as const

export const siteNavLinks = [...siteSectionLinks, blogNavLink] as const

export const contactHref = "/#contact"
export const contactSectionId = "contact"
export const homeHref = "/"

export function getSiteBasePath() {
  return process.env.NODE_ENV === "production" ? "/portfolio" : ""
}

export function isHomePath(pathname: string) {
  const basePath = getSiteBasePath()
  return pathname === "/" || pathname === "" || pathname === basePath || pathname === `${basePath}/`
}

export function homeSectionHref(sectionId: string) {
  return `${getSiteBasePath()}/#${sectionId}`
}

export const pendingHomeSectionKey = "portfolio-pending-home-section"

export function navigateToHomeSection(sectionId: string) {
  sessionStorage.setItem(pendingHomeSectionKey, sectionId)
  window.location.href = `${window.location.origin}${getSiteBasePath() || "/"}`
}
