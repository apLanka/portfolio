import type { MetadataRoute } from "next"

import { META_THEME_COLORS, SITE_INFO } from "@/config/site"
import { USER } from "@/features/portfolio/data/user"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: USER.displayName,
    short_name: USER.displayName,
    description: SITE_INFO.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    theme_color: META_THEME_COLORS.light,
    background_color: META_THEME_COLORS.light,
    icons: [
      {
        src: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  }
}
