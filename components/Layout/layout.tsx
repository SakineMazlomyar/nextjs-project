import Head from 'next/head'
import Navbar from '../Navbar/navbar';
import css from './style.module.layout.scss';
const Layout = (props) => {
    return <div className={css.layoutContainer}>
               <Head>
                   <title>Posts App </title>
                   <link rel="shortcut icon" href="../../static/favicon.ico" />
               </Head>
                <Navbar />
                {props.children}
            </div>
}

export default Layout 