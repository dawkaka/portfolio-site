import {FunctionComponent} from 'react'

import styles from '../styles/Home.module.scss'

const Footer: FunctionComponent = () => {

  return (

    <footer style ={{display:"flex", justifyContent:"center"}}>
        <div className={styles.heroMain}>
        <div style={{textAlign:"center", color:"lightgray",
                        backgroundColor: "var(--background)", paddingBottom: "var(--gap)"}}>
      <p>dawkaka © 2022, some rights reserved.</p>
      </div>
      </div>
    </footer>

  )

}


export default Footer
