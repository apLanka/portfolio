import { ImageResponse } from "next/og"

export const size = { width: 64, height: 64 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#151410",
          color: "#ecebe4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 38,
          fontFamily: "serif",
        }}
      >
        P
        <div style={{ width: 9, height: 9, background: "#e2420f", marginLeft: 3, marginTop: 20 }} />
      </div>
    ),
    size,
  )
}
