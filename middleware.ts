import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLanguage, supportedLanguages } from "@/components/landing/content";

const cookieName = "sampadai_lang";

const countryToLanguage: Record<string, string> = {
  DE: "de",
  AT: "de",
  CH: "de",
  PL: "pl",
  ES: "es",
  MX: "es",
  AR: "es",
  CL: "es",
  CO: "es",
  PE: "es",
  EC: "es",
  GT: "es",
  CR: "es",
  DO: "es",
  BO: "es",
  PY: "es",
  UY: "es",
  VE: "es",
  HN: "es",
  NI: "es",
  SV: "es",
  PA: "es",
  PR: "es",
  CU: "es"
};

function detectLanguage(request: NextRequest) {
  const cookieLang = request.cookies.get(cookieName)?.value;
  if (
    cookieLang &&
    supportedLanguages.includes(cookieLang as (typeof supportedLanguages)[number])
  ) {
    return cookieLang;
  }

  const headerCountry = request.headers.get("x-vercel-ip-country");
  const geoCountry = request.geo?.country;
  const country = (geoCountry || headerCountry || "").toUpperCase();
  const mapped = countryToLanguage[country];

  if (
    mapped &&
    supportedLanguages.includes(mapped as (typeof supportedLanguages)[number])
  ) {
    return mapped;
  }

  return defaultLanguage;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];

  if (
    firstSegment &&
    supportedLanguages.includes(firstSegment as (typeof supportedLanguages)[number])
  ) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-sampadai-lang", firstSegment);
    const response = NextResponse.next({
      request: {
        headers: requestHeaders
      }
    });
    const existing = request.cookies.get(cookieName)?.value;
    if (existing !== firstSegment) {
      response.cookies.set(cookieName, firstSegment, {
        path: "/",
        sameSite: "lax"
      });
    }
    return response;
  }

  const detected = detectLanguage(request);
  const nextUrl = request.nextUrl.clone();
  nextUrl.pathname = `/${detected}${pathname === "/" ? "" : pathname}`;

  const response = NextResponse.redirect(nextUrl);
  response.cookies.set(cookieName, detected, {
    path: "/",
    sameSite: "lax"
  });
  return response;
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"]
};
