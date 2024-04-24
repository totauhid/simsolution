import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Email Address",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },

      async authorize(credentials, req) {
        if (
          credentials?.email == process.env.EMAIL &&
          credentials?.password == process.env.PASSWORD
        ) {
          const user = {
            id: "ID",
            email: process.env.EMAIL,
            password: process.env.PASSWORD,
          };

          return user;
        } else {
          return null;
        }
      },
    }),
  ],

  pages: {
    signIn: "/signin",
  },

  secret: process.env.NEXTAUTH_SECRET,
};
