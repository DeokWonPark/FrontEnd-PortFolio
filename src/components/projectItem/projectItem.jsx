import React from 'react';
import styles from './projectItem.module.css';

const ProjectItem = ({item}) => {
    return <article className={styles.projectItem}>
        <div className={styles.cordiOuter}>
            <div className={styles.cordiinner}></div>
        </div>

        <div className={styles.titleBox}>
            <h1 className={styles.projectTitle}>{item.title}</h1>
            {item.logo && <img src={item.logo} alt="logo"/>}
        </div>
        <p className={styles.date}>{item.date}</p>
        <a href={item.git} className={styles.url}><i className="fab fa-github"></i>GitHub URL</a>
        {item.distribute && <a href={item.distribute} className={styles.url}><i className="fas fa-laptop-code"></i>Site URL</a>}
        <a href={item.git}><img className={styles.mainCut} src={item.maincut} alt="mainCut"/></a>
        <p className={styles.description}>{item.description}</p>
        <p className={styles.people}>{item.people}</p>

        <div className={styles.stack}>
            <h2 className={styles.infoTitle}>USE STACK</h2>
            <ul className={styles.stackList}>
                {item.stack.map((item)=>{
                    return <li key={item}>{item}</li>
                })}
            </ul>
        </div>
        <div className={styles.dev}>
            <h2 className={styles.infoTitle}>What I Did</h2>
            <ul className={styles.devList}>
                {item.content.map((item)=>{
                    return <li key={item}>{item}</li>
                })}
            </ul>
        </div>
    </article>
}

export default ProjectItem;