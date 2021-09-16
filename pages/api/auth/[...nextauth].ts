import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      // https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps
      scope: "read:user",
    }),
    // Still able to add more providers
  ],
  secret: process.env.SECRET,
  session: {
    jwt: true, // Use JWT
  },
  // database: process.env.DATABASE_URL,
  // pages: {
  //   signIn: "/signin",
  // },
});
