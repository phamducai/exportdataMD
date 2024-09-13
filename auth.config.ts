import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  trustHost:true,
  pages: {
    signIn:'/login',
  },
  providers: [
    // Your providers here
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      console.log(auth,"auth")
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return Response.redirect(new URL('/dashboard', nextUrl));
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
} satisfies NextAuthConfig;
