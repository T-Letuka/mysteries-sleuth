import nextAuth from "next-auth";
import { CredentialProvider } from "next-auth/providers/credentials";
import { connectMongodb } from "@/lib/mongodb";
import User from "@/models/user";

export const auth = {
  providers: [
    CredentialProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials;
        try {
          await connectMongodb();
          const user = User.findOne({ email });
          if (!user) {
            return null;
          }
          return user;
        } catch (error) {
          console.log("Cannot authenticate User");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTHSECRET,
  pages: {
    Login: "/Login",
  },
};

const handler = nextAuth(auth);
export { handler as GET, handler as POST };
