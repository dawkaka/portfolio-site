import {FunctionComponent} from 'react'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

const imageD = 100;



const Skills: FunctionComponent = () => {


  return (
    <section id="skills" className={styles.skillsSect}>
    <div className={styles.heroMain}>
    <div className={styles.headerCenter}>
    <h1 className={styles.headerBig}>Skills</h1>
    </div>
    <div className={styles.textCenter}>
    <p className={styles.text70}>
    After many years of programming and building apps, I've used many different programming languages, frameworks, libraries and tools.
    So I'm going to list the core technologies and tools I use often.
    </p>
    </div>

    <div className={styles.skillsAnimationContainer}>

    <div className={styles.skillsImages}>
    <img className={`${styles.skillImage} ${styles.sIA1}`} src="/javascript.png" />
    <img className={`${styles.skillImage} ${styles.sIA2}`} src="/javascript.png" />
    <img className={`${styles.skillImage} ${styles.sIA3}`} src="/typescript.png" />
    <img className={`${styles.skillImage} ${styles.sIA4}`} src="/react.png" />
    <img className={`${styles.skillImage} ${styles.sIA5}`} src="/go.png" />
    <img className={`${styles.skillImage} ${styles.sIA6}`} src="/node.jpeg"/>
    <img className={`${styles.skillImage} ${styles.sIA7}`} src="/aws.png" />
    <img className={`${styles.skillImage} ${styles.sIA8}`} src="/mongodb.png" />
    </div>

     <ul className={styles.skillsList}>
     <li className={styles.skill}>HTML5/CSS3</li>
     <li className={styles.skill}>React/NextJs</li>
     <li className={styles.skill}>JavaScript</li>
     <li className={styles.skill}>TypeScript</li>
     <li className={styles.skill}>NodeJs</li>
     <li className={styles.skill}>Go</li>
     <li className={styles.skill}>MongoDB</li>
     <li className={styles.skill}>AWS</li>
     </ul>
    </div>

     </div>

    </section>
  )
}


export default Skills
