import {FunctionComponent, useEffect} from 'react'

import styles from '../styles/Home.module.scss'

const Work: FunctionComponent = () => {

  return (
    <div className={styles.heroMain}>
     <section id="work" className={`${styles.skewSection} ${styles.workSect}`}>
     <div>
     <div className={styles.headerCenter}>
     <h1 className={styles.headerBig}>Work</h1>
     </div>

     <div className={styles.workCotentContainer}>
      <div className={styles.lineContainer}>
      <div className={styles.line}></div>
      </div>

      <div className={styles.workContainer}>

      <div className={styles.workInfo}>
       <h2>FREELANCE, Frontend Developer.</h2>
       <p>2018 - 2020</p>
      </div>

     <article>
      <div className={`${styles.workResp}`}>
      <h4>Responsibilities</h4>
      <ul className={styles.respContainer}>
      <li className={styles.resp}>Built a ton of Beautiful, Fast and Responsive websites for clients.</li>
      <li className={styles.resp}>Devoloped a fullstack voting web app for a collage.</li>
      </ul>
      </div>
     </article>
      </div>


      <div className={styles.workContainer}>

      <div className={styles.workInfo}>
      <h2>TOONJI, Software Engineer.</h2>
      <p>2020 - Current</p>
      </div>

     <article>
      <div className={`${styles.workResp} ${styles.workLast}`}>
      <h4>Responsibilities</h4>
      <ul className={styles.respContainer}>
      <li className={styles.resp}>Built the entire frontend with React.</li>
      <li className={styles.resp}>Made use of flutterwave&apos;s Api to allow users to buy &apos;toonji coins&apos;.</li>
      <li className={styles.resp}>Built a ton of fast and beautiful React components to make development easier.</li>
      <li className={styles.resp}>Handled Authentication and Authorization</li>
      <li className={styles.resp}>Made use of websockets to build a real-time quiz feature</li>
      <li className={styles.resp}>Implemented awards feature using MongoDb Transactions</li>
      <li className={styles.resp}>Handled server, server configurations, files etc. using AWS EC2, Nginx and AWS S3.</li>
      <li className={styles.resp}>Built the TOONJI mobile app with React Native</li>
      </ul>
      </div>
      </article>
      
      </div>

      <div className={styles.lineContainer}>
      <div className={`${styles.line} ${styles.line2}`}></div>
      </div>

     </div>

     </div>
     </section>
     </div>
  )
}




export default Work
