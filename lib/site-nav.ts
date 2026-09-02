export const siteSectionLinks = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
] as const

export const blogNavLink = { href: "/blog/", label: "Blog" } as const

export const siteNavLinks = [...siteSectionLinks, blogNavLink] as const

export const contactHref = "/#contact"
export const homeHref = "/"
