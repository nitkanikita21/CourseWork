"use client";


import classNames from "classnames";
import styles from "./Button.module.scss";

export default function Button({
    className = "", style = null, onClick = ()=>{}, children
}: {
    className?: string,
    style?: string | null,
    onClick?: ()=> void,
    children?: React.ReactNode
}) {
    return <>
        <div onClick={onClick} className={classNames(styles.button, className, style != null ? styles[`button__${  style}`] : "")}>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    </>;
}