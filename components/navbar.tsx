import {FunctionComponent} from 'react'


import styles from '../styles/Home.module.css'

const NavBar: FunctionComponent = () => {

   return(
     <div className={styles.heroMain}>
     <header>
     <nav className={styles.flexBetween}>
     <div className={styles.logoContainer}>
     <h1 className={styles.logo}>Dawkaka</h1>
     </div>
     <ul className={styles.navLinksContainer}>
     <li className={`${styles.navLink} ${styles.textNormal}`}>Home.</li>
     <li className={`${styles.navLink} ${styles.textNormal}`}>Projects.</li>
     <li className={`${styles.navLink} ${styles.textNormal}`}>Skills.</li>
     <li className={`${styles.navLink} ${styles.textNormal}`}>Work.</li>
     </ul>
     </nav>
     </header>
     </div>
   )
}

export default NavBar
