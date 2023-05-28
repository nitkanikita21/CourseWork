"use client";

import Button from "@/components/button/Button";
import { ToAdminPage } from "@/components/user/ToAdminPage";
import { AxiosClient } from "@/http/axios";
import { getCsrfToken, signIn, useSession } from "next-auth/react";
import { Suspense, useEffect, useState } from "react";

export default async function CabinetPage() {
    const session = useSession();

    return <>
        <ToAdminPage/>
        <h1>{session.data?.user.name}</h1>
        <p>{session.data?.user.id}</p>
    </>;

}
