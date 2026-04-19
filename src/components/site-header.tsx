import dynamic from "next/dynamic"
import Link from "next/link"

import { NavDesktop } from "@/components/nav-desktop"
import { SiteHeaderMark } from "@/components/site-header-mark"
import { ThemeToggle } from "@/components/theme-toggle"
import { MAIN_NAV, MOBILE_NAV } from "@/config/site"
import { cn } from "@/lib/utils"

const BrandContextMenu = dynamic(() =>
  import("@/components/brand-context-menu").then((mod) => mod.BrandContextMenu)
)

const NavMobile = dynamic(() =>
  import("@/components/nav-mobile").then((mod) => mod.NavMobile)
)

export function SiteHeader() {
  return (
    <>
      <header className="sticky top-0 z-50 max-w-screen overflow-x-hidden bg-background px-2 pt-2">
        <div className="screen-line-top screen-line-bottom mx-auto flex h-12 items-center justify-between gap-2 border-x border-line px-2 group-has-data-[slot=layout-wide]/layout:container after:z-1 after:transition-[background-color] sm:gap-4 md:max-w-3xl">
          <BrandContextMenu>
            <Link
              className="transition-[scale] ease-out active:scale-[0.98] has-data-[visible=false]:pointer-events-none [&_img]:h-5 [&_img]:w-auto [&_img]:max-w-none [&_img]:shrink-0 [&_img]:sm:h-6 [&_svg]:h-5 [&_svg]:w-auto [&_svg]:shrink-0 [&_svg]:sm:h-6"
              href="/"
              aria-label="Home"
            >
              <SiteHeaderMark />
            </Link>
          </BrandContextMenu>

          <div className="flex-1" />

          <NavDesktop items={MAIN_NAV} />

          <div className="flex items-center">
            <ThemeToggle />
          </div>

          <div className="absolute top-[-3.5px] left-[-4.5px] z-2 flex size-2 border border-line bg-background" />
          <div className="absolute top-[-3.5px] right-[-4.5px] z-2 flex size-2 border border-line bg-background" />
        </div>
      </header>

      {/* Nav Mobile */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 h-[calc(--spacing(24)+env(safe-area-inset-bottom,0px))] bg-linear-to-b from-transparent from-[calc(env(safe-area-inset-bottom,0%))] to-background mask-linear-[to_top,var(--background)_25%,transparent] backdrop-blur-[1px] sm:hidden" />
      <div
        className={cn(
          "fixed bottom-[calc(--spacing(2)+env(safe-area-inset-bottom,0px))] left-1/2 z-50 flex w-fit -translate-x-1/2 items-center rounded-xl bg-popover py-1 pr-1 pl-2.5 shadow-md ring ring-foreground/10 sm:hidden dark:ring-foreground/20"
        )}
      >
        <NavMobile items={MOBILE_NAV} />
      </div>
    </>
  )
}
