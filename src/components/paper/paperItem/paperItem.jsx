import React from 'react';
import styles from './paperItem.module.css';

const PaperItem = ({paper}) => {
    return <div className={styles.paperItem}>
        <h1 className={styles.title}>{paper.title}</h1>
        <h2 className={styles.entitle}>{paper.enTitle}</h2>
        <p className={styles.people}>{paper.people}</p>
        <span className={styles.description}>{paper.description}</span>
        <a href={paper.paperURL} className={styles.paperLink}><i className="far fa-copy"></i>Paper Link</a>
    </div>
}

export default PaperItem;