import { NextResponse, type NextFetchEvent, type NextRequest } from "next/server";
import { trackAICrawlerRequest } from "@datafast/ai-crawl";

export function proxy(request: NextRequest, event: NextFetchEvent) {
  trackAICrawlerRequest(request, event, {
    websiteId: "dfid_g2ojbeIQME0i1UQ8TRicK",
  });
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
