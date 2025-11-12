import { NextResponse } from "next/server";
import type {NextRequest} from "next/server"


export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;
  if (pathname === "/login" && token) {
    const url = new URL("/", request.url)
    return NextResponse.redirect(url.toString())
  }
  if (pathname.startsWith("/cart") && !token) {
    const url = new URL("/login", request.url)
    return NextResponse.redirect(url.toString())
  }

  return NextResponse.next()
}


export const config = {
  matcher: ["/cart/:path*", "/login"]
};

  // if (token) {
  //   return NextResponse.next();
  // }

  // const url = new URL(request.url);
  // url.pathname = "login";


  // return NextResponse.redirect(url.toString());
