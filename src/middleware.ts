import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

type Role = keyof typeof roleBasedPrivateRoutes;

const AuthRoutes = ['/login', '/register'];
const commonPrivateRoutes = ['/dashboard'];

const roleBasedPrivateRoutes = {
  USER: [
    /^\/dashboard$/,
    'add-flat',
    'my-flats',
    'flat-requests',
    'change-password',
    'edit-profile',
  ],
  ADMIN: [/^\/dashboard\/admin/],
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const token = cookies().get('token')?.value;

  if (!token) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  if (token && commonPrivateRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  let decodedData = null;

  if (token) {
    decodedData = jwtDecode(token) as any;
  }

  const role = decodedData?.role;

  if (role && roleBasedPrivateRoutes[role as Role]) {
    const routes = roleBasedPrivateRoutes[role as Role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: ['/login', '/register', '/dashboard/:page*'],
};
