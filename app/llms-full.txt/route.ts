import { buildLlmsFullTxt } from "@/lib/llms";

const TEXT_HEADERS = {
  "Content-Type": "text/plain; charset=utf-8",
  "X-Robots-Tag": "noindex, follow",
  "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
};

export function GET(): Response {
  return new Response(buildLlmsFullTxt(), {
    headers: TEXT_HEADERS,
  });
}
