import Head from 'next/head'
import Navbar from '../Navbar/navbar';
import styles from './style.module.layout.scss';
const Layout = (props) => {
    return <div className={styles.layoutContainer}>
               <Head>
                   <title>Posts App </title>
                   <link rel="shortcut icon" href="../../static/favicon.ico" />
               </Head>
                <Navbar />
                {props.children}
            </div>
}

export default Layout 