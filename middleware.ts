// middleware.ts
export { auth as middleware } from "@/app/api/auth/authOptions";

export const config = {
  matcher: ["/((?!api/auth|_next/static|_next/image|favicon.ico|sign-in).*)"],
};
