import nextAuth from "next-auth";
import { CredentialProvider } from "next-auth/providers/credentials";
import { connectMongodb } from "@/lib/mongodb";
import User from "@/models/user";
import bcrypt from "bcryptjs";

export default nextAuth({
  providers: [
    CredentialProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials;
        try {
          // Connect to MongoDB
          await connectMongodb();

          // Find user by email
          const user = await User.findOne({ email });

          // If user not found, return null
          if (!user) {
            return null;
          }

          // Compare passwords
          const passwordsMatch = await bcrypt.compare(password, user.password);

          // If passwords don't match, return null
          if (!passwordsMatch) {
            return null;
          }

          // Return authenticated user
          return user;
        } catch (error) {
          console.error("Error authenticating user:", error);
          throw new Error("Could not authenticate user");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
});
