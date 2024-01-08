// import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";

import NextAuth from "next-auth";
import User from "../../../../../models/user";

import { connecetToDb } from "../../../../../utils/database";
const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: "",
      clientSecret: "567b7d15bcf0aa45f069930a8811ad517e87950b",
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({
        email: session.user.email,
      });
      session.user.id = sessionUser._id.toString();
      return session;
    },
    //   sigin function
    async signIn({ profile }) {
      console.log(profile, "profile in singin function");
      try {
        await connecetToDb();
        // check if a uaser alerady exist
        const user = await User.findOne({
          email: profile.email,
        });
        // if not create a new user
        if (!user) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.avatar_url,
          });
        }
        return user;
      } catch (err) {
        console.log("err in routejs", err);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
