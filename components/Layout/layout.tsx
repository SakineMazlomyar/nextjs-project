import Head from 'next/head'
import Navbar from '../Navbar/navbar';

const Layout = (props) => {
    return <div className="conainer-fluid">
               <Head>
                   <title>Pictures App </title>
                   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>
               </Head>
                <Navbar />
                {props.children}
                
            </div>
}

export default Layout 