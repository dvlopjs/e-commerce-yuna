import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "@/lib/db";
import bcrypt from "bcrypt";
export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET as string,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        const userFound = await db.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });
        console.log(userFound, "userFound");

        if (!userFound) {
          return null;
        }

        // if (credentials?.password) {
        //   const passwordsMatch = await bcrypt.compare(
        //     credentials.password,
        //     userFound.password
        //   );
        //   if (!passwordsMatch) {
        //     return null;
        //   }
        // }

        console.log(userFound, "userFound");
        return {
          id: userFound.id,
          email: userFound.email,
          name: userFound.name,
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/register",
  },
};
const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };
