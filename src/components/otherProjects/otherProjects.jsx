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
    // const [otherProjects,setProject]=useState([
    //     {
    //         title:'Thermal Camera',
    //         description:'열화상 카메라 Improving image performance',
    //         stack:[
    //             'Python',
    //             'Tensorflow',
    //             'OpenCV',
    //         ],
    //         date:'2020. 07 ~ 2020. 10',
    //         people:'4인 팀프로젝트',
    //         development:'프로젝트 역할- Thermal Image Noise Reduction을 맡아서 구현',
    //         viewURL:null,
    //         img:null,
    //         video:'https://www.youtube.com/embed/8iH0aX5K_94',
    //         infomation:[
    //             'Noise Reduction 학습모델인 Noise2Noise모델을 사용한 Thermal Image Noise Reduction'
    //         ],
    //     },
    //     {
    //         title:'OMTC+',
    //         description:'휴대용 cctv기능을 탑재한 도난 경보장치',
    //         stack:[
    //             'Raspberry Pi',
    //             'Python',
    //             'Flask',
    //             'Firebase',
    //         ],
    //         date:'2018. 10 ~ 2018. 12',
    //         people:'2인 팀프로젝트',
    //         development:'프로젝트 역할- 도난 경보 알고리즘 구현, 웹서버 구동',
    //         viewURL:null,
    //         img:'/images/OMTCmain.PNG',
    //         video:null,
    //         infomation:[
    //             'Grove Pi 센서를 활용한 도난 위험감지 및 대응 알고리즘 구현',
    //             '도난 대응 Instargram, SMS Push Service 구현',
    //             'Flask를 이용한 웹서버를 구동시켜 웹 상에서 도난 대응 및 관리'
    //         ],
    //     },
    //     {
    //         title:'IOT Management System',
    //         description:'가정 내 IOT 디바이스들을 조회, 관리, 제어를 수행 할 수 있는 애플리케이션',
    //         stack:[
    //             'Java',
    //             'Java SWING',
    //         ],
    //         date:'2018. 10 ~ 2018. 12',
    //         people:'개인 프로젝트',
    //         development:'Java SWING을 활용한 System 개발',
    //         viewURL:'https://github.com/DeokWonPark/IOT_Management_System',
    //         img:'/images/iotmain.png',
    //         video:null,
    //         infomation:[
    //             '가정 내 IOT 디바이스들을 조회, 관리, 제어를 수행 할 수 있는 애플리케이션',
    //         ],
    //     },
    // ]);

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