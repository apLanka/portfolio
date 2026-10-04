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
          background: "#0a0b0a",
          color: "#e9e7df",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            letterSpacing: 3,
            color: "#8f928a",
          }}
        >
          <span>PASINDU LANKA</span>
          <span>COLOMBO, LK / 6.9271° N 79.8612° E</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 250,
            fontWeight: 900,
            lineHeight: 0.85,
            letterSpacing: -10,
            textTransform: "uppercase",
          }}
        >
          AI ENGINEER
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ display: "flex", background: "#d9f24c", color: "#0a0b0a", padding: "10px 18px", fontSize: 26 }}>
            LLM APPS / AGENTS / SYSTEMS
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#8f928a" }}>Production AI on AWS</div>
        </div>
      </div>
    ),
    size,
  )
}
