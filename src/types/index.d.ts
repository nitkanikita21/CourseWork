declare module "*.scss" {
    // eslint-disable-next-line init-declarations
    const content: {[x: string]: string};
    export default content;
}


import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

export declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user?: DefaultUser & {
            id: string;
            adress: string;
        };
        token: JWT;
    }
}