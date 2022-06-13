import {FunctionComponent, CSSProperties} from 'react'


import styles from '../styles/Home.module.css'

const NavItem: FunctionComponent<{title: string; styleColor: string}> = ({title, styleColor}) => {
  const handleClick = () => {
    const sec = document.getElementById(title.toLowerCase())
    if(!sec) return
    sec.scrollIntoView()
  }
  return (
     <li onClick={handleClick}
     className={`${styles.navLink} ${styles.textNormal}`}
     style={{'--styleColor': styleColor} as CSSProperties}
     >
     {title}.
     </li>
  )
}

const NavBar: FunctionComponent = () => {

   return(
     <div className={styles.heroMain}>
     <header>
     <nav className={styles.flexBetween}>
     <div className={styles.logoContainer}>
     <h1 className={styles.logo}>Dawkaka</h1>
     </div>
     <ul className={styles.navLinksContainer}>
     <NavItem title="Work" styleColor ="var(--success)" />
     <NavItem title="Skills" styleColor ="white" />
     <NavItem title="Projects" styleColor ="var(--pink)" />
     <NavItem title="Education" styleColor ="var(--yellow)" />
     </ul>
     </nav>
     </header>
     </div>
   )
}

export default NavBar
