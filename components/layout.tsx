import {FunctionComponent, ReactNode} from 'react'
import Head from 'next/head'

import styles from "../styles/Home.module.scss"
import NavBar from './navbar'
import Footer from './footer'

const Layout: FunctionComponent<{children: ReactNode}> = ({children}) => {
    return (
        <div style={{width: '100vw'}}>
        <Head>
          <title>Yussif Mohammed | A flexible software engineer</title>
          <meta name="description" content="Yussif Mohammed, A flexible software developer's portfolio" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta property="og:url" content="https://dawkaka.vercel.app/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Yussif Mohammed"/>
          <meta property="og:description" content="Yussif Mohammed, A flexible software developer"/>
          <meta property="og:image" content="https://dawkaka.vercel.app/mo.jpg" />
          <meta property="og:image:alt" content="Yussif Mohammed"/>
          <meta property="og:image:height" content="400" />
          <meta property="og:image:width" content="520" />
          <meta property="og:locale" content="en_GH" />
          <meta property="og:site_name" content="Dawkaka" />
          <meta charSet="utf-8" />
        </Head>
        <NavBar />
        {children}
        <Footer />
        </div>
    )
}


export default Layout
