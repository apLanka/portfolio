import { ImageResponse } from "next/og"

export const alt = "Pasindu Lanka — AI Engineer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#ecebe4",
          color: "#151410",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 2, color: "#4a483f" }}>
          PASINDU LANKA — COLOMBO, LK
        </div>
        <div style={{ display: "flex", fontSize: 250, fontFamily: "serif", lineHeight: 0.9, letterSpacing: -8 }}>
          AI Engineer<span style={{ color: "#e2420f" }}>.</span>
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#4a483f" }}>
          LLM applications · agents · production systems on AWS
        </div>
      </div>
    ),
    size,
  )
}
