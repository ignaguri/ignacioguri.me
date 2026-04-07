import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Ignacio Gurí — Senior Frontend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          fontSize: 72,
          fontWeight: 700,
          color: "#f8fafc",
          letterSpacing: "-0.02em",
          marginBottom: 16,
        }}
      >
        Ignacio Gurí
      </div>
      <div
        style={{
          fontSize: 32,
          color: "#94a3b8",
          fontWeight: 400,
        }}
      >
        Senior Frontend Engineer
      </div>
      <div
        style={{
          display: "flex",
          gap: 16,
          marginTop: 40,
          fontSize: 20,
          color: "#64748b",
        }}
      >
        <span>React</span>
        <span>·</span>
        <span>TypeScript</span>
        <span>·</span>
        <span>Node.js</span>
        <span>·</span>
        <span>Next.js</span>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 40,
          fontSize: 18,
          color: "#475569",
        }}
      >
        ignacioguri.me
      </div>
    </div>,
    { ...size },
  );
}
