import React, { useState } from 'react';
import styles from './seminar.module.css';
import SeminarItem from './seminarItem/seminarItem';

const Seminar = (props) => {
    const [seminar,setItem]=useState([
        {
            title:'',
            date:'',
            description:'',
        },
        {
            title:'',
            date:'',
            description:'',
        },
        // ai 동계단기강좌
        // 
    ])
    return <section className={styles.seminar}>
        <h1 className="title">CONFERENCE / SEMINAR</h1>
        <ul className={styles.info}>
            <li>
                {seminar.map((item)=>{
                    return <SeminarItem item={item}></SeminarItem>
                })}
            </li>
        </ul>
    </section>
}

export default Seminar;