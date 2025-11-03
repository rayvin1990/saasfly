import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

// 直接定义完整的 authOptions，避免导入问题
const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "dummy-id",
      clientSecret: process.env.GITHUB_SECRET || "dummy-secret",
    }),
  ],
  pages: {
    signIn: "/admin/login",
  },
};

const handler = NextAuth(authOptions as any);

export { handler as GET, handler as POST };