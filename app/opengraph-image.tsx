import { ImageResponse } from "next/og";

import { profile } from "@lib/data/profile";

export const alt = "Ignacio Gurí — Senior Frontend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BRICOLAGE_CSS_URL = "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@800";

/**
 * Resolves a static TTF instance of Bricolage Grotesque.
 *
 * Sends no User-Agent on purpose: Google returns woff2 to modern browsers,
 * which Satori cannot parse, and a static TTF when the UA is absent. Satori
 * also handles variable fonts poorly, which rules out the variable file in
 * the google/fonts repo.
 */
async function loadDisplayFont(): Promise<ArrayBuffer | null> {
  try {
    const cssResponse = await fetch(BRICOLAGE_CSS_URL);
    if (!cssResponse.ok) {
      return null;
    }

    const css = await cssResponse.text();
    const fontUrlMatch = css.match(/src:\s*url\((https:\/\/[^)]+\.ttf)\)/);
    if (!fontUrlMatch) {
      return null;
    }

    const fontResponse = await fetch(fontUrlMatch[1]);
    if (!fontResponse.ok) {
      return null;
    }

    return await fontResponse.arrayBuffer();
  } catch {
    return null;
  }
}

export default async function OGImage() {
  const displayFont = await loadDisplayFont();

  return new ImageResponse(
    <div
      style={{
        background: "#0b0e14",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        fontFamily: displayFont ? "Bricolage" : "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: 99,
            background: "#38bdf8",
          }}
        />
        {/* Single text child: Satori requires an explicit display value on any
            div with more than one child node. */}
        <div style={{ fontSize: 22, color: "#7dd3fc" }}>
          {`${profile.location.city}, ${profile.location.country}`}
        </div>
      </div>

      <div
        style={{
          fontSize: 92,
          fontWeight: 800,
          color: "#e8ecf2",
          letterSpacing: "-0.035em",
          marginTop: 24,
        }}
      >
        {profile.name}
      </div>

      <div style={{ fontSize: 34, color: "#9aa4b2", marginTop: 8 }}>{profile.role}</div>

      <div
        style={{
          display: "flex",
          gap: 14,
          marginTop: 44,
          fontSize: 22,
          color: "#78859a",
        }}
      >
        {profile.stack.slice(0, 4).map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 60,
          left: 80,
          fontSize: 20,
          color: "#5b6472",
        }}
      >
        ignacioguri.me
      </div>
    </div>,
    {
      ...size,
      fonts: displayFont
        ? [{ name: "Bricolage", data: displayFont, style: "normal", weight: 800 }]
        : [],
    },
  );
}
