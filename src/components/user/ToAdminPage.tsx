
import Button from "@/components/button/Button";
import { AxiosClient } from "@/http/axios";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import useSWR from 'swr'

const fetcher = (url: string) => AxiosClient.get(url).then(res => res.data)

export function ToAdminPage() {
    const session = useSession();
    const router = useRouter();

    const {data, error, isLoading } = useSWR(`/protected/user/${session.data?.user.id}/isAdmin`, fetcher);
    console.log(data, error, isLoading)
    if(error) {
        return <h2>Нажаль ми не змогли завантажити цей елемент</h2>
    }
    if(isLoading) {
        return <></>
    }
    
    console.log(!!data.isAdmin)
    if (!!data.isAdmin) {
        return <>
            <Button style="blue" onClick={()=>{
                router.push("/protected/admin/")
            }}>Адмін панель</Button>
        </>
    } else {
        return <></>;
    }
}