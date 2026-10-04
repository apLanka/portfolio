interface IconProps {
  className?: string
}

const base = {
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  "aria-hidden": true,
} as const

export function ArrowUpRight({ className }: IconProps) {
  return (
    <svg {...base} width="14" height="14" className={className}>
      <path d="M4 12 12 4M5.5 4H12v6.5" />
    </svg>
  )
}

export function ArrowRight({ className }: IconProps) {
  return (
    <svg {...base} width="14" height="14" className={className}>
      <path d="M2 8h12M9.5 3.5 14 8l-4.5 4.5" />
    </svg>
  )
}

export function ArrowLeft({ className }: IconProps) {
  return (
    <svg {...base} width="14" height="14" className={className}>
      <path d="M14 8H2M6.5 3.5 2 8l4.5 4.5" />
    </svg>
  )
}
