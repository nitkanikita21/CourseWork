declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}


import NextAuth from "next-auth"

export declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            /** The user's postal address. */
            address: string
        } & DefaultSession["user"]
    }
}