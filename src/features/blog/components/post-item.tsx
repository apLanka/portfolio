import type { ImageProps } from "next/image"
import Image from "next/image"
import Link from "next/link"

import type { Doc } from "@/features/doc/types/document"
import { cn } from "@/lib/utils"

export function PostItem({
  post,
  imageLoading = "lazy",
}: {
  post: Doc
  imageLoading?: ImageProps["loading"]
}) {
  const href = post.metadata.externalUrl ?? `/blog/${post.slug}`
  const isExternal = Boolean(post.metadata.externalUrl)

  return (
    <Link
      href={href}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={cn(
        "group flex flex-col gap-2 p-2 transition-[background-color] ease-out hover:bg-accent-muted",
        "max-sm:screen-line-top max-sm:screen-line-bottom",
        "sm:nth-[2n+1]:screen-line-top sm:nth-[2n+1]:screen-line-bottom"
      )}
    >
      {post.metadata.image && (
        <div className="relative select-none overflow-hidden rounded-xl [&_img]:aspect-1200/630 [&_img]:rounded-xl">
          <Image
            className="object-cover grayscale contrast-[1.03] transition-[filter] duration-300 ease-out group-hover:grayscale-0 group-hover:contrast-100"
            src={post.metadata.image}
            alt={post.metadata.title}
            width={1200}
            height={630}
            quality={100}
            loading={imageLoading}
            unoptimized
          />

          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/10" />
        </div>
      )}

      <div className="flex flex-col gap-1 p-2">
        <h3 className="text-lg leading-snug font-medium text-balance">
          {post.metadata.title}
          {post.metadata.new && (
            <span
              className="ml-2 inline-block size-2 -translate-y-px rounded-full bg-info"
              aria-label="New"
            />
          )}
        </h3>
      </div>
    </Link>
  )
}
