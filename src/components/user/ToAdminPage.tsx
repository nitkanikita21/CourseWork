
import Button from "@/components/button/Button";
import { AxiosClient } from "@/http/axios";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import useSWR from "swr";
import { useUser } from "../hooks/user";

const fetcher = (url: string) => AxiosClient.get(url).then(res => res.data);

export function ToAdminPage() {
    const session = useSession();
    const router = useRouter();

    console.log(session);


    const { user, error, isLoading } = useUser(session.data?.user.id);
    if (error) {
        return <h2>Нажаль ми не змогли завантажити цей елемент</h2>;
    }
    if (isLoading) {
        return <></>;
    }

    console.log("user", user);
    if (user.admin) {
        return <Button style="blue" onClick={() => {
            router.push("/protected/admin/");
        }}>Створити курс</Button>;
    } else {
        return <></>;
    }
}