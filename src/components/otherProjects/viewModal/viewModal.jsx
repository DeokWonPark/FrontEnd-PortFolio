import React from 'react';
import styles from './viewModal.module.css';

const ViewModal = ({item}) => {
    return <div className={styles.viewModal}>
        <div className={styles.closeBox}>
            <button className={styles.close}><i id="close" className="fas fa-times"></i></button>
        </div>
        <h1 className={styles.title}>{item.title}</h1>
        {item.img &&<img src={item.img} alt="maincut"/>}
        {item.video && <iframe
        className={styles.video} 
        src={item.video} 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
        </iframe>}
        {item.viewURL && <a href={item.viewURL} className={styles.gitLink}><i className="fab fa-github"></i>GitHub repository</a>}
        <ul className={styles.infoBox}>
            {item.infomation.map((info)=>{
                return <li key={info}>{info}</li>
            })}
        </ul>
    </div>
}

export default ViewModal;