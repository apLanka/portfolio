import { USER } from "@/features/portfolio/data/user"
import type { NavItem } from "@/types/nav"

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://pasindulanka.com",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem[] = [
  {
    title: "Case studies",
    href: "/case-studies",
  },
  {
    title: "Blog",
    href: "/blog",
  },
]

export const MOBILE_NAV: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  ...MAIN_NAV,
]

export const X_HANDLE = "@lankaaDev"
export const GITHUB_USERNAME = "apLanka"
export const SOURCE_CODE_GITHUB_REPO = "apLanka/portfolio"
export const SOURCE_CODE_GITHUB_URL = "https://github.com/apLanka/portfolio"

export const SPONSORSHIP_URL = "https://github.com/sponsors/apLanka"

export const UTM_PARAMS = {
  utm_source: "pasindulanka.com",
}

/** Set to true to show the Certifications panel on the homepage again. */
export const SHOW_CERTIFICATIONS = false
