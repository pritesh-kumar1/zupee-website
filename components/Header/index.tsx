import React, {useState} from "react";
import styles from './Header.module.css';

const Header = () => {
    return (
        <>
            <header className={styles.fantasyHeaderSection}>
                <div className={styles.customGridContainer}>
                    <div className={styles.loginBox}>
                        <img decoding="async" className="logo" src="https://static-perf1.zupee.com/wp-content/uploads/2024/01/real-money-earning-app-zupee-logo.png" alt="Best cash earning games on Zupee" width="180px" height="66px" />
                    </div>
                </div>  
            </header>
        </>
    )
}

export default Header;