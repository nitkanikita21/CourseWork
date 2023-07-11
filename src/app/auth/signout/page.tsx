"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Signout() {
    const router = useRouter();
    useEffect(() => {
        signOut({ redirect: false });
        router.push("/");
    });

    return <></>;
}