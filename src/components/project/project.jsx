import React, { useState } from 'react';
import ProjectItem from '../projectItem/projectItem';
import styles from './project.module.css';

const Project = (props) => {
    const [projectItem,setItem]=useState([
        {
            title:'프랜차이즈 페이지 - 갈비쌈 냉면',
            date:'2021. 02. 02 ~ 개발중',
            git:'https://github.com/DeokWonPark/Franchise-site',
            distribute:'https://603f161b0881beb40a676ab5--coldnoodles.netlify.app/',
            maincut:'/images/fsProject.png',
            logo:'/images/fslogo.png',
            description:'프랜차이즈 갈비쌈 냉면 웹사이트 개발',
            people:'개인 프로젝트',
            content:[
                '하단의 놀력 이벤트 기능에서 경품 당첨 기능을 추가한 고도화 개발',
                '하단의 놀력 이벤트 기능에서 경품 당첨 기능을 추가한 고도화 개발',
                '하단의 놀력 이벤트 기능에서 경품 당첨 기능을 추가한 고도화 개발',
                '하단의 놀력 이벤트 기능에서 경품 당첨 기능을 추가한 고도화 개발',
            ],
            stack:[
                'JavaScript',
                'HTML/CSS',
                'React js / React Hooks',
                'PostCSS',
                'React-Router',
                'Firebase',
                'Cloudinary',
            ],
        },
        {
            title:'Business Card Maker',
            date:'2021. 01. 31 ~ 2021. 02. 23',
            git:'https://github.com/DeokWonPark/CARD-MAKER',
            distribute:'https://deokwonpark.github.io/CARD-MAKER/',
            maincut:'/images/cardmain.png',
            logo:'/images/cardlogo.png',
            description:'웹상에서 인터넷 명함을 생성해주는 웹애플리케이션 제작',
            people:'개인 프로젝트',
            content:[
                '하단의 놀력 이벤트 기능에서 경품 당첨 기능을 추가한 고도화 개발',
                '하단의 놀력 이벤트 기능에서 경품 당첨 기능을 추가한 고도화 개발',
                '하단의 놀력 이벤트 기능에서 경품 당첨 기능을 추가한 고도화 개발',
                '하단의 놀력 이벤트 기능에서 경품 당첨 기능을 추가한 고도화 개발',
            ],
            stack:[
                'JavaScript',
                'HTML/CSS',
                'React js / React Hooks',
                'PostCSS',
                'React-Router',
                'Firebase',
                'Cloudinary',
            ],
        },
        {
            title:'YouTube Clone',
            date:'2021. 01. 23 ~ 2021. 01. 30',
            git:'https://github.com/DeokWonPark/YouTube_Colne',
            distribute:'https://deokwonpark.github.io/YouTube_Colne/',
            maincut:'/images/youtubemain.png',
            logo:'/images/youtubelogo.png',
            description:'기존의 YouTube에 기능을 추가한 YouTube Clone Site 제작',
            people:'개인 프로젝트',
            content:[
                '하단의 놀력 이벤트 기능에서 경품 당첨 기능을 추가한 고도화 개발',
                '하단의 놀력 이벤트 기능에서 경품 당첨 기능을 추가한 고도화 개발',
                '하단의 놀력 이벤트 기능에서 경품 당첨 기능을 추가한 고도화 개발',
                '하단의 놀력 이벤트 기능에서 경품 당첨 기능을 추가한 고도화 개발',
            ],
            stack:[
                'JavaScript',
                'HTML/CSS',
                'React js',
                'PostCSS',
            ],
        },
        {
            title:'Ideal Generator',
            date:'2020. 03. 26 ~ 2020. 06. 24',
            git:'https://github.com/DeokWonPark/Ideal_Generator',
            distribute:'https://youtu.be/B2tjb92XHr0',
            maincut:'/images/idealmain.png',
            logo:'/images/ideallogo_.PNG',
            description:'User의 이상형월드컵 게임을 통해 얻은 이상형 정보를 가지고 가상의 이상형인물을 생성하는 애플리케이션',
            people:'4인 팀프로젝트 - 웹 프론트엔드와 백엔드 전반의 풀스택 개발을 담당',
            content:[
                '하단의 놀력 이벤트 기능에서 경품 당첨 기능을 추가한 고도화 개발',
                '하단의 놀력 이벤트 기능에서 경품 당첨 기능을 추가한 고도화 개발',
                '하단의 놀력 이벤트 기능에서 경품 당첨 기능을 추가한 고도화 개발',
                '하단의 놀력 이벤트 기능에서 경품 당첨 기능을 추가한 고도화 개발',
            ],
            stack:[
                'JavaScript',
                'HTML/CSS',
                'jQuery',
                'Python',
                'Node.js',
                'Express',
                'MySQL',
            ],
        },
        {
            title:'DIY AI Assistant Chat Bot',
            date:'2019. 09. 09 ~ 2019. 12. 08',
            git:'https://github.com/DeokWonPark/DIY-AI-Assistant',
            distribute:'https://youtu.be/dPIIl8PJrY8',
            maincut:'/images/chatBotmain.png',
            logo:'/images/chatBotlogo.PNG',
            description:'음악을 추천해주고 채팅을 도와주는 챗봇의 기능이 포함된 실시간 채팅 애플리케이션',
            people:'2인 팀프로젝트 - 웹 프론트엔드 개발과, API연동, front-back 데이터 통신을 담당',
            content:[
                '하단의 놀력 이벤트 기능에서 경품 당첨 기능을 추가한 고도화 개발',
                '하단의 놀력 이벤트 기능에서 경품 당첨 기능을 추가한 고도화 개발',
                '하단의 놀력 이벤트 기능에서 경품 당첨 기능을 추가한 고도화 개발',
                '하단의 놀력 이벤트 기능에서 경품 당첨 기능을 추가한 고도화 개발',
            ],
            stack:[
                'JavaScript',
                'HTML/CSS',
                'Vue.js',
                'Python',
                'Node.js',
                'DialogFlow',
                'Socket.io',
            ],
        },
    ])
    return <section className={styles.Project}>
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