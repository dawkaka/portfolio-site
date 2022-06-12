import {FunctionComponent} from 'react'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

const imageD = 100;



const Skills: FunctionComponent = () => {


  return (
    <>

    <div className={styles.heroMain}>
    <section id="skills" className={styles.skillsSect}>
    <div className={styles.headerCenter}>
    <h1 className={styles.headerBig}>Skills</h1>
    </div>
    <div className={styles.textCenter}>
    <p className={`${styles.textNormal} ${styles.text70}`}>
    After many years of programming and building apps, I've used many different programming languages, frameworks, libraries and tools.
    So I'm going to list the core technologies and tools I use often.
    </p>
    </div>

    <div className={styles.skillsAnimationContainer}>

    <div className={styles.skillsImages}>
    <img className={`${styles.skillImage} ${styles.sIA1}`} src="/javascript.png" />
    <img className={`${styles.skillImage} ${styles.sIA2}`} src="/javascript.png" />
    <img className={`${styles.skillImage} ${styles.sIA3}`} src="/react.png" />
    <img className={`${styles.skillImage} ${styles.sIA4}`} src="/typescript.png" />
    <img className={`${styles.skillImage} ${styles.sIA5}`} src="/node.jpeg"/>
    <img className={`${styles.skillImage} ${styles.sIA6}`} src="/mongodb.png" />
    <img className={`${styles.skillImage} ${styles.sIA7}`} src="/go.png" />
    <img className={`${styles.skillImage} ${styles.sIA8}`} src="/aws.png" />
    </div>

     <ul className={styles.skillsList}>
     <li className={`${styles.skill} ${styles.sIA1}`}>
     HTML5/CSS3
     <span className={`${styles.skillGradient} ${styles.sIA1}`}>HTML5/CSS3</span>
     </li>
     <li className={`${styles.skill} ${styles.sIA2}`}>
     JavaScript
     <span className={`${styles.skillGradient} ${styles.sIA2}`}>JavaScript</span>
     </li>
     <li className={`${styles.skill} ${styles.sIA3}`}>
     React/NextJs
     <span className={`${styles.skillGradient} ${styles.sIA3}`}>React/NextJs</span>
     </li>
     <li className={`${styles.skill} ${styles.sIA4}`}>
     TypeScript
     <span className={`${styles.skillGradient} ${styles.sIA4}`}>TypeScript</span>
     </li>
     <li className={`${styles.skill} ${styles.sIA5}`}>
     NodeJs
     <span className={`${styles.skillGradient} ${styles.sIA5}`}>NodeJs</span>
     </li>
     <li className={`${styles.skill} ${styles.sIA6}`}>
     MongoDB
     <span className={`${styles.skillGradient} ${styles.sIA6}`}>MongoDB</span>
     </li>

     <li className={`${styles.skill} ${styles.sIA7}`}>
     Go
     <span className={`${styles.skillGradient} ${styles.sIA7}`}>Go</span>
     </li>

     <li className={`${styles.skill} ${styles.sIA8}`}>
     AWS
     <span className={`${styles.skillGradient} ${styles.sIA8}`}>AWS</span>
     </li>
     </ul>
     </div>
     </section>
     </div>

    </>
  )
}


export default Skills
