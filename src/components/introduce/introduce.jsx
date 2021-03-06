import React from 'react';
import styles from './introduce.module.css';

const Introduce = (props) => {
    return <section className={styles.introduce}>
        <h1 className="title">INTRODUCE</h1>
        <span className={styles.paragraph}>
            <p>
                안녕하십니까 <strong>신입 웹 프론트엔드 개발자</strong>를 준비하고 있는 <strong>개발자 박덕원</strong>입니다.
                현재는 React.js에 매력을 느껴 <strong>React</strong>를 사용해서 가장 활발한 개발을 진행하고 있습니다.
                저는 확장성있는 코드/ 의존성이 제거된 코드/ 렌더링 방식과 같은 코드의 <strong>성능이슈</strong>에 관심이 있습니다.
            </p>
            <p>
                요즘은 코드의 버그나 테스팅에 용이한 코드를 작성하기 위해 <strong>TypeScript</strong>를 공부하고 있습니다.
                그리고 TypeScript를 React와 함께 사용해서 프로젝트를 진행할 예정에 있습니다.
            </p>
            <p>
                또한, 최근에 <strong>CSR(Client Side Rendering)</strong>과 <strong>SSR(Server Side Rendering)</strong>에 관심이 생겨서 <strong>Next.js</strong>를 사용한 SSR방식의
                애플리케이션을 개발해 볼 예정입니다.
            </p>
            <p>
                개발을 하면서 프레임워크나 라이브러리를 사용할 때 이것이 왜 만들어졌고, 왜 많이 사용되는지에 대한 <strong>개발 목적과 이유</strong>를 알고 사용하는 것과
                모르고 사용하는 것에는 큰 차이가 있다고 생각합니다. 이처럼 항상 코드를 작성하거나 라이브러리를 사용할 때 이유를 생각하면서 코드를 작성해 나가도록 노력하고 있습니다.
            </p>
            <ul className={styles.tag}>
                <li>#FrontEnd</li>
                <li>#React</li>
                <li>#Developer</li>
                <li>#Hello</li>
                <li>#Duckon</li>
            </ul>
        </span>
    </section>
}

export default Introduce;