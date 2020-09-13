import Layout from '../../components/Layout/layout';
import { useRouter } from 'next/router';
import getRequest from '../../api/get';
import Picture from '../../components/Picture/picture';

const PicturePage = () => { 
    const router = useRouter();
    const url = router.query.pid? `https://jsonplaceholder.typicode.com/photos/${router.query.pid}`: `https://jsonplaceholder.typicode.com/photos/1`;

    
    const {data}= getRequest(url)
 
    
   return  <Layout>
                { data && data.length > 0 ?
                data.map((picture:{ title:string,
                    thumbnailUrl:string,
                    albumId:number,
                    url:string,
                    id:string})=>{
                    return  <div className="container-fluid">
                                <div className="row p-2">
                                <div className="col-lg-6">
                                    <h2>Single Picture</h2>
                                    <p className="lead">Lorem Ipsum is simply dummied text of the printing and typesetting industry. </p>
                                    <p className="lead">Lorem Ipsum is simply dummied text of the printing and typesetting industry. </p>
                                    <p className="lead">Lorem Ipsum is simply dummied text of the printing and typesetting industry. </p>
                                    <br />
                                    <a href="#" className="btn btn-light m-1">Take Action</a>
                                </div>




                                    <div className="col-lg-6">
                                    <img className="img-fluid"  src={picture.url} alt="" />
                                    </div>
              
                                </div>
                            </div>
                })
                :
                ''}
         </Layout>

}

export default PicturePage;