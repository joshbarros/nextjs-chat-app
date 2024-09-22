import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  // If there is a token, redirect from /login and /register to dashboard
  if (token && (request.nextUrl.pathname === '/auth/login' || request.nextUrl.pathname === '/auth/register')) {
    return NextResponse.redirect(new URL('/dashboard', request.url)); // Redirect to home
  }

  // If trying to access protected routes without token, redirect to login
  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/auth/login', request.url)); // Redirect to login
  }

  return NextResponse.next(); // Proceed if no redirects are needed
}

export const config = {
  matcher: ['/auth/login', '/auth/register', '/dashboard/:path*'], // Paths to protect
};
