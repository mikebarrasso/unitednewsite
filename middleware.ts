import { NextResponse, type NextRequest } from "next/server";
import { siteConfig } from "@/lib/config";
import { MODE_COOKIE, privacyModeForLocation } from "@/lib/visitor-consent";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const lower = pathname.toLowerCase();
  let response: NextResponse;
  if (pathname !== lower) {
    const url = request.nextUrl.clone();
    url.pathname = lower;
    response = NextResponse.redirect(url, 308);
  } else {
    response = NextResponse.next();
  }
  if (siteConfig.visitors?.enabled) {
    response.cookies.set(
      MODE_COOKIE,
      privacyModeForLocation(
        request.headers.get("x-vercel-ip-country"),
        request.headers.get("x-vercel-ip-country-region"),
      ),
      { maxAge: 86400, path: "/", sameSite: "lax", secure: true },
    );
  }
  return response;
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
