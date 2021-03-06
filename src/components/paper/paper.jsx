import React, { useEffect, useRef, useState } from 'react';
import styles from './paper.module.css';
import PaperItem from './paperItem/paperItem';

const Paper = (props) => {
    const paperRef=useRef(null);
    const [papers,setPaper]=useState([]);

    useEffect(async()=>{
        const loadData=await loadPaper();
        setPaper(loadData);

        window.addEventListener('scroll', scrollFunc);
    },[]);

    const loadPaper=async ()=>{
        const response = await fetch('/data/papers.json');
        return await response.json();
    }
    const scrollFunc=async ()=>{
        if(paperRef.current===null){
            return;
        }
        if(!paperRef.current.classList.contains(styles.show)){
            const scrolly=paperRef.current.getBoundingClientRect().top;
            if(window.innerHeight > scrolly){
                paperRef.current.classList.add(styles.show);
            }
        }
        else{
            window.removeEventListener('scroll',scrollFunc);
        }
    }
    
    return <section className={styles.paper} ref={paperRef}>
        <h1 className="title">PAPERS</h1>
        <ul className={styles.paperBox}>
            {papers.map((paper)=>{
                return <PaperItem paper={paper} key={paper.title}></PaperItem>
            })}
        </ul>
    </section>
}

export default Paper;