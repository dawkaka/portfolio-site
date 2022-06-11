import {FunctionComponent, ReactNode} from 'react'
import Head from 'next/head'

import styles from "../styles/Home.module.css"
import NavBar from './navbar'

const Layout: FunctionComponent<{children: ReactNode[]}> = ({children}) => {
    return (
        <div className={`${styles.container}`}>
        <Head>
          <title>Yussif Mohammed | A flexible software engineer</title>
          <meta name="description" content="My portfolio" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <NavBar />
        {children}
        </div>
    )
}


export default Layout
