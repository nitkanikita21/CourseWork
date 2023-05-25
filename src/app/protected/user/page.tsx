"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function CabinetPage() {
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            signIn();
        }
    });

    console.log(session?.user.name);

    return <><h1>{session?.user.name}</h1></>;
}