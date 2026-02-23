import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "United Financial Planning Group";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #0b1a2e 0%, #1e6eae 60%, #2d8fd5 100%)",
          fontFamily: "system-ui, sans-serif",
          padding: "60px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: "52px",
              fontWeight: 700,
              color: "white",
              textAlign: "center",
              lineHeight: 1.2,
              maxWidth: "900px",
            }}
          >
            United Financial Planning Group
          </div>
          <div
            style={{
              width: "80px",
              height: "3px",
              background: "rgba(255,255,255,0.5)",
              borderRadius: "2px",
            }}
          />
          <div
            style={{
              fontSize: "24px",
              color: "rgba(255,255,255,0.8)",
              textAlign: "center",
              lineHeight: 1.5,
              maxWidth: "750px",
            }}
          >
            Fee-Only Financial Planning, Investment Management & Tax Services — Integrated Under One Roof
          </div>
          <div
            style={{
              display: "flex",
              gap: "32px",
              marginTop: "16px",
            }}
          >
            {["CFP®", "CPA", "EA", "Fiduciary"].map((badge) => (
              <div
                key={badge}
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "white",
                  background: "rgba(255,255,255,0.15)",
                  padding: "8px 20px",
                  borderRadius: "100px",
                  border: "1px solid rgba(255,255,255,0.25)",
                }}
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            fontSize: "16px",
            color: "rgba(255,255,255,0.5)",
          }}
        >
          unitedfpg.com
        </div>
      </div>
    ),
    { ...size }
  );
}
