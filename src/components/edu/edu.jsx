import React from 'react';
import styles from './edu.module.css';

const Edu = (props) => {
    return <section className={styles.Edu}>
        <h1 className="title">EDUCATION</h1>
        <ul className={styles.info}>
            <li>
                <p className={styles.date}>2015. 03 ~ 2021.08</p>
                <div>
                    <p className={styles.school}>금오공과대학교</p>
                    <p className={styles.sub}>컴퓨터공학과</p>
                </div>
            </li>
            <li>
                <p className={styles.date}>2012. 03 ~ 2015.02</p>
                <div>
                    <p className={styles.school}>금오고등학교</p>
                    <p className={styles.sub}>경상북도 구미시</p>
                </div>
            </li>
        </ul>
    </section>
}

export default Edu;