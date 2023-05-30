import styles from "./page.module.scss";
import { AiFillClockCircle } from "react-icons/ai";

export default function Loading() {
    return <div className={styles.loading}>
        <div className={styles.loading__container}>
            <AiFillClockCircle className={styles.loading__centered} size={128}/>
            <h1 className={styles.loading__centered}>Loading</h1>

        </div>
    </div>;
}