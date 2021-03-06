import React, { useEffect, useRef, useState } from 'react';
import ProjectItem from '../projectItem/projectItem';
import styles from './project.module.css';

const Project = (props) => {
    const projectRef=useRef(null);
    const [projectItem,setItem]=useState([]);
    useEffect(async()=>{
        const loadData=await loadProject();
        setItem(loadData);

        window.addEventListener('scroll', scrollFunc);
    },[]);

    const loadProject=async ()=>{
        const response = await fetch('/data/projects.json');
        return await response.json();
    }
    const scrollFunc=async ()=>{
        if(projectRef.current===null){
            return;
        }
        if(!projectRef.current.classList.contains(styles.show)){
            const scrolly=projectRef.current.getBoundingClientRect().top;
            if(window.innerHeight > scrolly){
                projectRef.current.classList.add(styles.show);
            }
        }
        else{
            window.removeEventListener('scroll',scrollFunc);
        }
    }

    return <section className={styles.Project} ref={projectRef}>
        <h1 className="title">PROJECTS</h1>
        <div className={styles.Contents}>
            <div className={styles.inner}>
                {projectItem.map((item)=>{
                    return <ProjectItem item={item} key={item.title}></ProjectItem>
                })}
            </div>
        </div>
    </section>
}

export default Project;