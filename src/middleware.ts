import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "./middleware/withAuth";

export function mainMiddleware(req: NextRequest) {
  // const isLogin = false;
  // if (isLogin) {
  //   return NextResponse.next();
  // } else {
  //   return NextResponse.redirect(new URL("/auth/login", req.url));
  // }

  const res = NextResponse.next();
  return res;
}

// export const config = {
//   matcher: ["/products/:path*", "/about"],
// };

export default withAuth(mainMiddleware, ["/profile"]);
