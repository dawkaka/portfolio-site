import {FunctionComponent} from 'react'


import styles from '../styles/Home.module.scss'

const Education: FunctionComponent = () => {


  return (

    <div className={styles.heroMain}>
    <section className={styles.eduSect} id="education">
    <div className={styles.headerCenter}>
    <h1 className={styles.headerBig}>Education</h1>
    </div>


    <div className={styles.workCotentContainer}>
     <div className={styles.lineContainer}>
     <div className={styles.line}></div>
     </div>

     <div className={styles.workContainer}>

     <div className={styles.workInfo}>
      <h2>Salaga Senior High School.</h2>
      <p>2013 - 2016</p>
     </div>

     <div className={`${styles.workResp}`}>
     <h4>Hightlights</h4>
     <ul className={styles.respContainer}>
     <li className={styles.resp}>WASSCE, A1 in Core Mathematics.</li>
     <li className={styles.resp}>WASSCE, A1 in Elective Mathematics.</li>
     <li className={styles.resp}>WASSCE, B2 in Phyiscs.</li>
     <li className={styles.resp}>WASSCE, B2 in Intergrated Science.</li>
     </ul>
     </div>

     </div>


     <div className={styles.workContainer}>

     <div className={styles.workInfo}>
     <h2>NURSING TRAINING COLLAGE, KPEMBE.</h2>
     <p>2017 - 2020</p>
     </div>

     <div className={`${styles.workResp} ${styles.workLast}`}>
     <h4>Hightlights</h4>

     <ul className={styles.respContainer}>
     <li className={styles.resp}>Second class upper due to lack of interest.</li>
     </ul>

     </div>

     </div>

     <div className={styles.workContainer}>

     <div className={styles.workInfo}>
     <h2>INTERNET</h2>
     <p>2018 - Current</p>
     </div>

     <div className={`${styles.workResp} ${styles.workLast}`}>
     <h4>Hightlights</h4>

     <ul className={styles.respContainer}>
     <li className={styles.resp}>All the programming skill I have now, I learnt on the internet</li>
     </ul>

     </div>

     </div>


     <div className={styles.lineContainer}>
     <div className={`${styles.line} ${styles.line2}`}></div>
     </div>
 </div>





    </section>
    </div>
  )
}


export default Education
