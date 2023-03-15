import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  const { pathname } = req.nextUrl;
  console.log(pathname);

  if (pathname.includes("/api/auth") || token) {
    console.log('lala');
    return NextResponse.next();
  }

  if (!token && pathname !== "/login") {
    console.log('lolo');
    return NextResponse.redirect("/login");
  }
}
