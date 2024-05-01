import React from "react";
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.customGridContainer}>
                    <ul className={styles.paymentImages}>
                    <li className={styles.paymentImage}>
                        <img decoding="async" width="300" height="65" src="https://static-perf1.zupee.com/wp-content/uploads/2023/07/zupee-gaming-app-payment-partner-1-300x65.png" className="payment-partner Razorpay" alt="Play money earning games, Withdraw with Razorpay" />
                    </li>
                    <li className={styles.paymentImage}>
                        <img decoding="async" width="286" height="62" src="https://static-perf1.zupee.com/wp-content/uploads/2023/07/zupee-gaming-app-payment-partner-2.png" className="payment-partner justpay" alt="Play cash games, Withdraw with Jusfree" />
                    </li>
                    <li className={styles.paymentImage}>
                        <img loading="lazy" decoding="async" width="286" height="78" src="https://static-perf1.zupee.com/wp-content/uploads/2023/07/zupee-gaming-app-payment-partner-3.png" className="payment-partner cashfree" alt="Play real money earning games, Withdraw with Cashfree" />
                    </li>
                    </ul>
                    <p className={styles.disclaimerText}><b>Disclaimer – </b>Zupee is only available for people who are above 18 years of age.<br /> Zupee is available only in those Indian states where skill gaming is allowed by regulations.</p>
                </div>
            </div>
        </>
    )
}

export default Footer;