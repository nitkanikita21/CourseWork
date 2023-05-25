import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import NextAuth, { AuthOptions } from "next-auth"

const prisma = new PrismaClient();

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        })
    ],
    pages: {
        signIn: "/auth/signin",
        signOut: "/auth/signout",
    },
    secret: "XS9392JrSY7sd/kI+dgdhW/aq9fu0tUBTdVgwMccfVA="
} as AuthOptions;

const handler = NextAuth(authOptions)



export { handler as GET, handler as POST }