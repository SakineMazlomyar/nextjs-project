import Head from 'next/head'
import Navbar from '../Navbar/navbar';

const Layout = (props) => {
    return <div>
               <Head>
                   <title>Posts App </title>
               </Head>
                <Navbar />
                {props.children}
            </div>
}

export default Layout 