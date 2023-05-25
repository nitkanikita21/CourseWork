import styles from "./Footer.module.scss";

export default function Footer() {
    return <>
        <footer className={styles.footer}>
            <div className={styles.footer__company}>
                <h4 className={styles.footer__company__title}>CodeFactory</h4>
                <p className={styles.footer__company__desc}>Школа програмування</p>
            </div> 
            <div className={styles.footer__links}>
                <h4 className={styles.footer__links__title}>Section 1</h4>
                <p  className={styles.footer__links__link}>Test</p>
                <p  className={styles.footer__links__link}>Test</p>
                <p  className={styles.footer__links__link}>Test</p>
                <p  className={styles.footer__links__link}>Test</p>
            </div>
            <div className={styles.footer__links}>
                <h4 className={styles.footer__links__title}>Section 2</h4>
                <p  className={styles.footer__links__link}>Test</p>
                <p  className={styles.footer__links__link}>Test</p>
                <p  className={styles.footer__links__link}>Test</p>
                <p  className={styles.footer__links__link}>Test</p>
            </div>
            <div className={styles.footer__links}>
                <h4 className={styles.footer__links__title}>Section 3</h4>
                <p  className={styles.footer__links__link}>Test</p>
                <p  className={styles.footer__links__link}>Test</p>
                <p  className={styles.footer__links__link}>Test</p>
                <p  className={styles.footer__links__link}>Test</p>
            </div>
        </footer>
    </>
}