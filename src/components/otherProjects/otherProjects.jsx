import React, { useEffect, useState } from 'react';
import OtherItem from './otherItem/otherItem';
import ViewModal from './viewModal/viewModal';
import styles from './otherProjects.module.css';

const OtherProjects = (props) => {

    const [openModal,setOpen]=useState(false);
    const [selectItem,setItem]=useState(null);
    const [otherProjects,setProject]=useState([]);

    useEffect(async()=>{
        const loadData=await loadOtherProject();
        setProject(loadData);
    },[]);

    const loadOtherProject=async ()=>{
        const response = await fetch('/data/otherProjects.json');
        return await response.json();
    }
    
    const handleOpenModal=(item)=>{
        const html=document.querySelector("html");
        html.style.overflow = "hidden";
        setOpen(true);

        setItem(item);
    }

    const handleCloseModal=(event)=>{
        if(event.target.id==="bgbox" || event.target.id==="close" || event.target.tagName==="path"){
            const html=document.querySelector("html");
            html.style.overflow = "auto";
            setOpen(false);
        }
    }

    return <>
    <section className={styles.Other}>
        <h1 className="title">OTHER PROJECTS</h1>
        <div className={styles.projectBox}>
            <table className={styles.projectTable}>
                <thead>
                    <tr>
                    	<th className={styles.subTitle}>Project</th>
                    	<th className={styles.subTitle}>Introduce</th>
                    	<th className={styles.subTitle}>Development</th>
                    	<th className={styles.subTitle}>View more</th>
                    </tr>
                </thead>
                <tbody>
                    {otherProjects.map((item)=>{
                        return <OtherItem item={item} onOpen={handleOpenModal} key={item.title}></OtherItem>
                    })}
                </tbody>
            </table>
        </div>
    </section>
    {openModal?<div 
    className={styles.ModalBox}
    onClick={handleCloseModal}
    id="bgbox"
    >
        <ViewModal item={selectItem}></ViewModal>
    </div>:<></>}
    </>
}

export default OtherProjects;