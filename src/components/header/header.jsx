import React from 'react';
import styles from './header.module.css';

const Header = (props) => {
    return <header className={styles.header}>
        <img src="/images/Deokwon_dark.jpg" alt="main" className={styles.logo}/>
        <div className={styles.info}>
            <h1 className={styles.title}><span className={styles.Stitle}>DEOKWON</span> PARK</h1>
            <p className={styles.description}>WEB FRONTEND DEVELOPER</p>
            <div className={styles.linkBox}>
                <a href="mailto:ejrdnjs96@gmail.com"><i className="fas fa-envelope"></i><p>ejrdnjs96@gmail.com</p></a>
                <a href="https://github.com/DeokWonPark"><i className="fab fa-github"></i><p>GitHub</p></a>
                <div className={styles.BtnBox}>
                    <a href="tel:010-6373-9710" className={`${styles.Btn} ${styles.call}`}><i className="fas fa-phone-square-alt"></i></a>
                    <a href="https://m.facebook.com/ghrnrmwl" className={`${styles.Btn} ${styles.facebook}`}><i className="fab fa-facebook-square"></i></a>
                    <a href="http://git.kumoh.ac.kr/20150477" className={`${styles.Btn} ${styles.gitlab}`}><i className="fab fa-gitlab"></i></a>
                </div>
            </div>
        </div>
    </header>
}

export default Header;