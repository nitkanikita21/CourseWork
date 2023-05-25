"use client";


import Typing from "@/components/other/Typing";
import styles from "./page.module.scss";
import classNames from "classnames";
import Button from "../components/button/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Header } from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import { signIn } from "next-auth/react";



export default function Page() {

    return <>
        <section className={classNames(styles.section, styles.hero)}>

            <h2 className={styles.title}>CodeFactory</h2>
            <div className={styles.desc}>
                <h2 className={styles.desc__title}>
                    <span>Почни свій шлях в <span className={styles.language}><Typing timeWait={5000} baseText="%text%" texts={["JavaScript", "C#", "Java", "Kotlin", "Python", "Rust", "C++", "Go", "PHP"]} /></span></span>
                </h2>

            </div>
            <Button onClick={signIn} style="green" className={styles.hero_btns}>Почати вчитися</Button>
        </section>

        <section className={classNames(styles.section)}>
            <div className={styles.learning}>
                <h2 className={styles.learning__title}>Навчання</h2>
                <Image className={styles.learning__media} src={"/root/learning/notebook.png"} alt="notebook" width={995 / 3} height={563 / 3}></Image>
                <p className={styles.learning__desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eveniet illo veniam, error consequatur nemo? Possimus, adipisci hic harum doloribus optio in dolorem nam temporibus tenetur, nostrum doloremque maxime nulla?</p>
            </div>
        </section>

        <section className={classNames(styles.section)}>
            <div className={styles.about}>
                <h2 className={styles.about__title}>Про нас</h2>
                <Image className={styles.about__media} src={"/root/learning/notebook.png"} alt="notebook" width={995 / 3} height={563 / 3}></Image>
                <p className={styles.about__desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eveniet illo veniam, error consequatur nemo? Possimus, adipisci hic harum doloribus optio in dolorem nam temporibus tenetur, nostrum doloremque maxime nulla?</p>
            </div>
        </section>
    </>;
}