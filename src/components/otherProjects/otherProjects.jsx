import React, { useState } from 'react';
import OtherItem from './otherItem/otherItem';
import styles from './otherProjects.module.css';

const OtherProjects = (props) => {

    const [otherProjects,setProject]=useState([
        {
            title:'Thermal Camera',
            description:'열화상 카메라 Improving image performance',
            stack:[
                'Python',
                'Tensorflow',
                'OpenCV',
            ],
            date:'2020. 07 ~ 2020. 10',
            people:'4인 팀프로젝트',
            development:'프로젝트 역할- Thermal Image Noise Reduction을 맡아서 구현',
            viewURL:null,
            img:'',
            infomation:[
                'Noise Reduction 학습모델인 Noise2Noise모델을 사용한 Thermal Image Noise Reduction'
            ],
        },
        {
            title:'OMTC+',
            description:'휴대용 cctv기능을 탑재한 도난 경보장치',
            stack:[
                'Raspberry Pi',
                'Python',
                'Flask',
                'Firebase',
            ],
            date:'2018. 10 ~ 2018. 12',
            people:'2인 팀프로젝트',
            development:'프로젝트 역할- 도난 경보 알고리즘 구현, 웹서버 구동',
            viewURL:null,
            img:'',
            infomation:[
                'Grove Pi 센서를 활용한 도난 위험감지 및 대응 알고리즘 구현',
                '도난 대응 Instargram, SMS Push Service 구현',
                'Flask를 이용한 웹서버를 구동시켜 웹 상에서 도난 대응 및 관리'
            ],
        },
        {
            title:'IOT Management System',
            description:'가정 내 IOT 디바이스들을 조회, 관리, 제어를 수행 할 수 있는 애플리케이션',
            stack:[
                'Java',
                'Java SWING',
            ],
            date:'2018. 10 ~ 2018. 12',
            people:'개인 프로젝트',
            development:'Java SWING을 활용한 System 개발',
            viewURL:null,
            img:'',
            infomation:[
                '가정 내 IOT 디바이스들을 조회, 관리, 제어를 수행 할 수 있는 애플리케이션',
            ],
        },
    ]);

    return <section className={styles.Other}>
        <h2 className="title">Other Projects</h2>
        <div className={styles.projectBox}>
            <table className={styles.projectTable}>
                <thead>
                    <th className={styles.subTitle}>Project</th>
                    <th className={styles.subTitle}>Introduce</th>
                    <th className={styles.subTitle}>Development</th>
                    <th className={styles.subTitle}>View more</th>
                </thead>
                <tbody>
                    {otherProjects.map((item)=>{
                        return <OtherItem item={item}></OtherItem>
                    })}
                </tbody>
            </table>
        </div>
    </section>
}

export default OtherProjects;