"use client";

import Container from "@/components/auth/Container";
import styles from "./page.module.scss";
import { getProviders, signIn, useSession } from "next-auth/react";
import Button from "@/components/button/Button";


import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

export default async function SignInPage() {

    const { data: session, status } = useSession();
    const router = useRouter();

    if(status == 'authenticated') {
        router.push("/protected/user")
    }

    return <>
        <div className={styles.root}>
            <Container>
                <div className={styles.container}>
                    <h1>Вхід</h1>

                    <Button onClick={() => {
                        signIn("google", {
                            callbackUrl: "http://localhost:3000/protected/user/"
                        });
                    }}>Вхід через Google <FcGoogle size={16} /></Button>
                    <Button onClick={() => {
                        signIn("github", {
                            callbackUrl: "http://localhost:3000/protected/user/"
                        });
                    }}>Вхід через Github <BsGithub size={16} /></Button>
                </div>
            </Container>
        </div>
    </>;
}