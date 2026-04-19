import type { ComponentProps } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

/** Inline source for “Copy as SVG” — keep in sync with /public/brand/lanka-mark.svg */
const LANKA_MARK_SVG = `<svg width="112" height="64" viewBox="0 0 112 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="16" y="16" width="16" height="16" transform="rotate(-90 16 16)" fill="white"/>
<rect x="32" y="16" width="16" height="16" fill="white"/>
<rect x="16" y="48" width="16" height="32" transform="rotate(-90 16 48)" fill="white"/>
<rect x="80" y="64" width="16" height="32" transform="rotate(-90 80 64)" fill="white"/>
<rect width="16" height="64" fill="white"/>
<rect x="64" width="16" height="64" fill="white"/>
</svg>`

export function getLankaMarkSVG(themeFill: string) {
  return LANKA_MARK_SVG.replaceAll('fill="white"', `fill="${themeFill}"`)
}

export function LankaMark({
  className,
  ...props
}: Omit<ComponentProps<typeof Image>, "src" | "alt">) {
  return (
    <Image
      src="/brand/lanka-mark.svg"
      alt=""
      width={112}
      height={64}
      unoptimized
      className={cn("object-contain", className)}
      {...props}
    />
  )
}
