"use client"

import { useEffect, useState } from "react"

export function LocalTime({ timeZone }: { timeZone: string }) {
  const [now, setNow] = useState<string>("")

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
    const tick = () => setNow(fmt.format(new Date()))
    tick()
    const id = setInterval(tick, 15_000)
    return () => clearInterval(id)
  }, [timeZone])

  return (
    <time suppressHydrationWarning aria-label="Local time in Colombo">
      {now || "--:--"} IST
    </time>
  )
}
