import nextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const secrect = process.env.GOOGLE_SECRET;
const id = process.env.GOOGLE_CLIENT_ID;

const handler = nextAuth({
  session: {
    strategy: "jwt",
  },

  providers: [
    GoogleProvider({
      clientId: id,
      clientSecret: secrect,
    }),
  ],
  callbacks: {},
});
export { handler as GET, handler as POST };
