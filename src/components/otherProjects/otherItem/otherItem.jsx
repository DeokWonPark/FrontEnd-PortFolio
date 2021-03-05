import React from 'react';
import styles from './otherItem.module.css';

const OtherItem = ({item,onOpen}) => {
    return <tr className={styles.otherItem}>
        <th>
            <h1 className={styles.title}>{item.title}</h1>
        </th>
        <td className={styles.info}>
            <p className={styles.subTitle}>{item.description}</p>
            <p>{item.development}</p>
            <div className={styles.stack}>
                {item.stack.map((skill)=>{
                    return <p className={styles.skill} key={skill}>{skill}</p>
                })}
            </div>
        </td>
        <td className={styles.info}>
            <p>{item.date}</p>
            <p>{item.people}</p>
        </td>
        <td><button onClick={onOpen.bind(this,item)} className={styles.more}><i className="fas fa-mouse"></i></button></td>
    </tr>
}

export default OtherItem;