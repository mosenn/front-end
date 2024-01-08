import nextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const handler = nextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
});
export { handler as GET, handler as POST };
// const options = {
//   providers: [
//     GitHubProvider({
//       clientId: process.env.GITHUB_CLIENT_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//   ],
// };

// export default (req, res) => NextAuth(req, res, options);
