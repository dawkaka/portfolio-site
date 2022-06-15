import {FunctionComponent} from 'react'
import Image from 'next/image'

import styles from '../styles/Home.module.scss'


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
    After many years of programming and building apps, I&apos;ve used many different programming languages, frameworks, libraries and tools.
    So I&apos;m going to list the core technologies and tools I use often.
    </p>
    </div>

    <div className={styles.skillsAnimationContainer}>

    <div className={styles.skillsImages}>
    <div className={`${styles.skillImage} ${styles.sIA1}`}>
    <Image
    src="/css3.png" layout="fill"
    alt="CSS3 logo"
    />
    </div>
    <div className={`${styles.skillImage} ${styles.sIA2}`}>
    <Image
    src="/javascript.png" layout="fill"
    alt="javascript logo"
    />
    </div>
    <div className={`${styles.skillImage} ${styles.sIA3}`}>
    <Image
    src="/react.png" layout="fill"
    alt="react logo"
    />
    </div>
    <div className={`${styles.skillImage} ${styles.sIA4}`}>
    <Image
    src="/typescript.png" layout="fill"
    alt="typescript logo"
    />
    </div>
    <div className={`${styles.skillImage} ${styles.sIA5}`}>
    <Image
    src="/node.jpeg" layout="fill"
    alt="node js logo"
    />
    </div>
    <div className={`${styles.skillImage} ${styles.sIA6}`}>
    <Image
    src="/mongodb.png" layout="fill"
    alt="mongodb logo"
    />
    </div>
    <div className={`${styles.skillImage} ${styles.sIA7}`}>
    <Image
    src="/go.png" layout="fill"
    alt="go logo"
    />
    </div>
    <div className={`${styles.skillImage} ${styles.sIA8}`}>
    <Image
    src="/aws.png" layout="fill"
    alt="aws logo"
    />
    </div>
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
     React/NextJs/Native
     <span className={`${styles.skillGradient} ${styles.sIA3}`}>React/NextJs/Native</span>
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
