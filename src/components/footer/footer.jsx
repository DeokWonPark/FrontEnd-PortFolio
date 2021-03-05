import React from 'react';
import styles from './footer.module.css';
const Footer = (props) => {
    return <footer>
        <p>Enjoy Challenge</p>
        <p>Create By <a href="https://github.com/DeokWonPark" className={styles.link}>Duckon</a></p>
    </footer>
}

export default Footer;