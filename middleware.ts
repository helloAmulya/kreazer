import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {

  const { isAuthenticated } = getKindeServerSession();

  //  if the user is not authenticated,redirect to login page
  if (!(await isAuthenticated())) {
    return NextResponse.redirect(
      new URL(
        "/api/auth/login?post_login_redirect_url=/dashboard",
        request.url,
      ),
    );
  }

  return NextResponse.next();
}

// set the path to redirect after verfication / logging
export const config = {
  matcher: ["/dashboard"],
};
