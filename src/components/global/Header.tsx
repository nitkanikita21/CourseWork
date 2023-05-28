"use client";

import Button from "../button/Button";
import styles from "./Header.module.scss";
import { signIn, signOut, useSession } from "next-auth/react";

export function Header() {
    const { data: session, status } = useSession();

    if (status == "authenticated") {
        return <>
            <div className={styles.root}>
                <h1 className={styles.logo}>
                    {"<CodeFactory/>"}
                </h1>
                <h1 className={styles.links}>

                </h1>
                <Button className={styles.end_block} onClick={()=>{
                    signOut();
                }} >Вихід</Button>

            </div>
        </>;
    }

    if (status == "loading") {
        return <>
            <div className={styles.root}>
                <h1 className={styles.logo}>
                    {"<CodeFactory/>"}
                </h1>
                <h1 className={styles.links}>

                </h1>

            </div>
        </>;
    }


    return <>
        <div className={styles.root}>
            <h1 className={styles.logo}>
                {"<CodeFactory/>"}
            </h1>
            <h1 className={styles.links}>

            </h1>
            <Button className={styles.end_block} onClick={signIn} >Вхід</Button>

        </div>
    </>;
}