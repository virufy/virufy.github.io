import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const hostname = req.headers.get('host');

  if (hostname?.endsWith('.jp')) {
    const url = req.nextUrl.clone();

    // Rewrite the domain
    url.host = hostname.replace('.jp', '.org');

    // Prefix the path with `/jp`
    url.pathname = `/jp${url.pathname}`;

    return NextResponse.redirect(url);
  }
  console.log('triggered')

  return NextResponse.next();
}
export const config = {
  matcher: ['/:path*'],
};