import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default (req, res) =>
  NextAuth(req, res, {
    session: {
      jwt: true, // Use JWT
    },
    jwt: {
      secret: process.env.JWT_SECRET,
    },
    providers: [
      Providers.GitHub({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
      // Still able to add more providers
    ],
    database: process.env.DATABASE_URL,
    pages: {
      signIn: "/signin",
    },
  });
