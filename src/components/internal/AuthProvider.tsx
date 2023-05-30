"use client";

import { Session } from "next-auth";
import { SessionProvider, getSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function AuthProvider({
    children
}: {
    children: React.ReactNode
}) {
    const [session, setSession] = useState<Session | null>();

    useEffect(() => {
        (async () => {
            setSession(await getSession());
        })();
    });

    return <SessionProvider session={session}>{children}</SessionProvider>;
}