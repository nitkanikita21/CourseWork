import styles from "./AuthContainer.module.scss";



export default function AuthContainer({children}: {
    children: React.ReactNode
}) {
    return <div className={styles.root}>
        {children}
    </div>
}