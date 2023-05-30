"use client";

import CoursesList from "@/components/user/CoursesList";
import { ToAdminPage } from "@/components/user/ToAdminPage";
import { useSession } from "next-auth/react";
import styles from "./styles.module.scss";
import UserId from "@/components/user/UserId";

export default async function CabinetPage() {
    const session = useSession();


    return <>
        <div className={styles.root}>
            
            <h1>Вітаю, {session.data?.user.name}!</h1>
            <p>Ваш ід: <UserId/></p>
            <ToAdminPage />
            <CoursesList />
        </div>
    </>;

}
