import React from 'react';
import styles from './otherItem.module.css';

const OtherItem = ({item}) => {
    return <tr className={styles.otherItem}>
        <th>
            <h1 className={styles.title}>{item.title}</h1>
        </th>
        <td className={styles.info}>
            <p className={styles.subTitle}>{item.description}</p>
            <p>{item.development}</p>
            <div className={styles.stack}>
                {item.stack.map((skill)=>{
                    return <p className={styles.skill}>{skill}</p>
                })}
            </div>
        </td>
        <td className={styles.info}>
            <p>{item.date}</p>
            <p>{item.people}</p>
        </td>
        <td><i class="fas fa-mouse"></i></td>
    </tr>
}

export default OtherItem;