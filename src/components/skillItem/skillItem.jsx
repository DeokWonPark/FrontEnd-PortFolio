import React, { memo, useEffect, useState } from 'react';
import styles from './skillItem.module.css';

const SkillItem = memo(({item}) => {
    const [itemList,setList]=useState([]);
    useEffect(()=>{
        const list=[];
        for(let i=0;i<item.length;i+=3){
            list.push(item.slice(i,i+3));
        }
        setList(list);
    },[item])
    return <div className={styles.gridBox}>
        {itemList.map((items)=>{
            return <ul className={styles.itemBox} /*key={items[index++].name}*/>
                {items.map((item)=>{
                    return <li key={item.name} className={styles.item}>
                        <img src={item.img} alt="skill" className={styles.itemImg}/>
                        <p className={styles.itemName}>{item.name}</p>
                        <div className={`${styles.itemLevel} ${styles[item.level]}`}></div>
                    </li>
                })}
            </ul>
        })}
    </div>
})

export default SkillItem;