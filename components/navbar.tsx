import {FunctionComponent, CSSProperties} from 'react'


import styles from '../styles/Home.module.scss'

const NavItem: FunctionComponent<{title: string; styleColor: string}> = ({title, styleColor}) => {
  const handleClick = () => {
    const container = document.querySelector(`.${styles.navLinksContainer}`)
    const lines = Array.from(document.querySelectorAll(`.${styles.humLine}`))
    if(!container) return
    container.classList.remove(`${styles.smallScreenNav}`)
    if(!lines || lines.length < 2) return
    lines[0].classList.remove(`${styles.humLine1}`)
    lines[1].classList.remove(`${styles.humLine2}`)
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

  const showSmallScreenMenu = () => {

    const container = document.querySelector(`.${styles.navLinksContainer}`)
    const lines = Array.from(document.querySelectorAll(`.${styles.humLine}`))
    if(!container) return
    if(Array.from(container.classList).includes(`${styles.smallScreenNav}`)) {
      container.classList.remove(`${styles.smallScreenNav}`)
      lines[0].classList.remove(`${styles.humLine1}`)
      lines[1].classList.remove(`${styles.humLine2}`)
    }else {
      container.classList.add(`${styles.smallScreenNav}`)
      lines[0].classList.add(`${styles.humLine1}`)
      lines[1].classList.add(`${styles.humLine2}`)
    }
  }

   return(

     <header className={styles.header}>
     <div className={styles.heroMain}>
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
     <div className={styles.humburgerContainer} onClick={showSmallScreenMenu}>
     <div className={styles.humLine}></div>
     <div className={styles.humLine}></div>
     </div>
     </nav>
     </div>
      </header>
   )
}

export default NavBar
