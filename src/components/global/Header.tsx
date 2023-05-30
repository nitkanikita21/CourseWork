"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Button from "../button/Button";
import styles from "./Header.module.scss";
import { useRouter } from "next/navigation";
import classNames from "classnames";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

export function Header() {
    const { data: session, status } = useSession();
    const router = useRouter();

    const logo = <h1 className={styles.logo} onClick={() => { router.push("/"); }}>
        {"<CodeFactory/>"}
    </h1>;

    const [isMobMenu, setMobMenu] = useState(false);

    const menuButton = <AiOutlineMenu onClick={()=>{setMobMenu(true);}} className={styles.mob_menu__button} size={48}></AiOutlineMenu>;
    let menu = <></>;

    if (isMobMenu) {
        menu = <div className={styles.mob_menu}>
            <h3>Меню</h3>
            {status == "authenticated" ? <>
                <Button className={classNames(styles.mob_menu__btn_menu)} onClick={() => {
                    router.push("/protected/user");
                }} >{session.user.name}</Button>
                <Button className={classNames(styles.mob_menu__btn_menu)} onClick={() => {
                    signOut();
                }} >Вихід</Button>
            </> : <>
                <Button className={classNames(styles.mob_menu__btn_menu)} onClick={() => {
                    signIn();
                }} >Вхід</Button>
            </>}

            <Button style={"red"} className={classNames(styles.mob_menu__btn_menu)} onClick={() => {
                setMobMenu(false);
            }}>Закрити меню</Button>
        </div>;
    }


    if (status == "authenticated") {
        return <>
            <div className={styles.root}>
                {logo}
                {menuButton}
                {menu}
                <h1 className={styles.links}>

                </h1>
                <div className={classNames(styles.end_block, styles.end_with_userinfo)}>
                    <Button className={classNames(styles.btn)} onClick={() => {
                        router.push("/protected/user");
                    }} >{session.user.name}</Button>
                    <Button className={classNames(styles.btn)} onClick={() => {
                        signOut();
                    }} >Вихід</Button>
                </div>


            </div>
        </>;
    }

    if (status == "loading") {
        return <>
            <div className={styles.root}>
                {logo}
                <h1 className={styles.links}>

                </h1>

            </div>
        </>;
    }


    return <>
        <div className={styles.root}>
            {logo}
            {menuButton}
            {menu}
            <h1 className={styles.links}>

            </h1>
            <Button className={classNames(styles.end_block, styles.btn)} onClick={signIn} >Вхід</Button>

        </div>
    </>;
}