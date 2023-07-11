"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";
import styles from "./UserId.module.scss";

export default function UserId() {
    const sessionData = useSession();
    const [mode, setMode] = useState(false);

    function switchMode() {
        setMode(!mode);
    }

    if (sessionData.status == "loading" || sessionData.status == "unauthenticated") {
        return <><div>...</div></>;
    }
    console.log(sessionData.status, sessionData.data);

    if (mode) {
        return <><div className={styles.root} onClick={switchMode}>{sessionData.data!!.user.id}</div></>;
    } else {
        return <><div className={styles.root} onClick={switchMode}>Настисність щоб побачити</div></>;
    }
}