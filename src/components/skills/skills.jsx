import React, { useEffect, useRef, useState } from 'react';
import SkillItem from '../skillItem/skillItem';
import styles from './skills.module.css';

const Skills = (props) => {
    const skillRef=useRef(null);
    const [skills,setSkills]=useState();
    useEffect(async ()=>{
        const loadData=await loadSkills();
        setSkills(loadData);

        window.addEventListener('scroll', scrollFunc);
    },[]);

    const loadSkills=async ()=>{
        const response = await fetch('/data/skills.json');
        return await response.json();
    }

    const scrollFunc=async ()=>{
        if(skillRef.current===null){
            return;
        }
        if(!skillRef.current.classList.contains(styles.show)){
            const scrolly=skillRef.current.getBoundingClientRect().top;
            if(window.innerHeight > scrolly){
                skillRef.current.classList.add(styles.show);
            }
        }
        else{
            window.removeEventListener('scroll',scrollFunc);
        }
    }

    const [threeOver,setThree]=useState(false);
    const [twoOver,setTwo]=useState(false);
    const [oneOver,setOne]=useState(false);

    // const [skills,setSkills]=useState(
    //     {
    //         language:[
    //             {
    //                 name:"JavaScript",
    //                 img:"/images/js.png",
    //                 level:"three",
    //             },
    //             {
    //                 name:"HTML/CSS",
    //                 img:"/images/html.png",
    //                 level:"three",
    //             },
    //             {
    //                 name:"TypeScript",
    //                 img:"/images/ts.png",
    //                 level:"two",
    //             },
    //             {
    //                 name:"Java",
    //                 img:"/images/java.png",
    //                 level:"two",
    //             },
    //             {
    //                 name:"Python",
    //                 img:"/images/Python.png",
    //                 level:"two",
    //             },
    //             {
    //                 name:"C/C++",
    //                 img:"/images/c.webp",
    //                 level:"two",
    //             },
    //         ],
    //         franwork:[
    //             {
    //                 name:`React.js`,
    //                 img:"/images/React.png",
    //                 level:"three",
    //             },
    //             {
    //                 name:`React Hooks`,
    //                 img:"/images/hooks.png",
    //                 level:"three",
    //             },
    //             {
    //                 name:"Node.js",
    //                 img:"/images/nodejs.png",
    //                 level:"two",
    //             },
    //             {
    //                 name:"Express",
    //                 img:"/images/express.png",
    //                 level:"two",
    //             },
    //             {
    //                 name:"PostCss",
    //                 img:"/images/PostCSS.png",
    //                 level:"two",
    //             },
    //             {
    //                 name:"Sass",
    //                 img:"/images/sass.png",
    //                 level:"two",
    //             },
    //             {
    //                 name:"Vue.js",
    //                 img:"/images/vuejs.png",
    //                 level:"one",
    //             },
    //             {
    //                 name:"Flask",
    //                 img:"/images/flask.png",
    //                 level:"one",
    //             },
    //         ],
    //         Database:[
    //             {
    //                 name:"MySQL",
    //                 img:"/images/MYSQL.png",
    //                 level:"two",
    //             },
    //             {
    //                 name:"MongoDB",
    //                 img:"/images/mongodb.png",
    //                 level:"one",
    //             },
    //         ],
    //         etc:[
    //             {
    //                 name:"Git/Github",
    //                 img:"/images/git.png",
    //                 level:"two",
    //             },
    //             {
    //                 name:"Firebase",
    //                 img:"/images/firebase.webp",
    //                 level:"two",
    //             },
    //             {
    //                 name:"Ubuntu",
    //                 img:"/images/ubuntu.png",
    //                 level:"two",
    //             },
    //             {
    //                 name:"Android",
    //                 img:"/images/andriod.png",
    //                 level:"one",
    //             },
    //             {
    //                 name:"Socket.io",
    //                 img:"/images/socketio.png",
    //                 level:"one",
    //             },
    //             {
    //                 name:"Dialogflow",
    //                 img:"/images/dialogflow.jpg",
    //                 level:"one",
    //             },
    //         ]
    //     }
    // )

    //console.log(JSON.stringify(skills));
    return <section className={styles.skills} ref={skillRef}>
        <div className={styles.titleBox}>
            <h1 className="title">SKILLS</h1>
            <ul className={styles.level}>
                <li className={styles.three} onMouseOver={setThree.bind(this,true)} onMouseOut={setThree.bind(this,false)}></li>
                <li className={styles.two} onMouseOver={setTwo.bind(this,true)} onMouseOut={setTwo.bind(this,false)}></li>
                <li className={styles.one} onMouseOver={setOne.bind(this,true)} onMouseOut={setOne.bind(this,false)}></li>
            </ul>
            {threeOver && <div className={`${styles.description} ${styles.threeInfo}`}><p>3: 주력기술로 사용하는 정도</p></div>}
            {twoOver && <div className={`${styles.description} ${styles.twoInfo}`}><p>2: 기술에 대한 이해가 어느정도 있음</p></div>}
            {oneOver && <div className={`${styles.description} ${styles.oneInfo}`}><p>1: 개발에 사용해본 경험이 있는 정도</p></div>}
        </div>
        <div className={styles.skillBox}>
            <div className={styles.Box}>
                <h1 className={styles.CategoryTitle}>Language</h1>
                {skills &&<SkillItem item={skills.language}></SkillItem>}
            </div>
            <div className={styles.Box}>
                <h1 className={styles.CategoryTitle}>Framework & Library</h1>
                {skills && <SkillItem item={skills.franwork}></SkillItem>}
            </div>
            <div className={styles.Box}>
                <h1 className={styles.CategoryTitle}>Database</h1>
                {skills && <SkillItem item={skills.Database}></SkillItem>}
            </div>
            <div className={styles.Box}>
                <h1 className={styles.CategoryTitle}>ETC</h1>
                {skills && <SkillItem item={skills.etc}></SkillItem>}
            </div>
        </div>
    </section>
}

export default Skills;