import { NextResponse, type NextRequest } from "next/server";
import { createWealthReachProxy } from "@wealthreach/site-kit/next/proxy";

export const proxy = createWealthReachProxy({
  beforeNext(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const lower = pathname.toLowerCase();
    if (pathname !== lower) {
      const url = request.nextUrl.clone();
      url.pathname = lower;
      return NextResponse.redirect(url, 308);
    }
    return null;
  },
});

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|llms.txt|.*\\..*).*)",
  ],
};
