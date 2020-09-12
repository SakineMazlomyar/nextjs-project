import Layout from '../../components/Layout/layout';
import { useRouter } from 'next/router';
import getRequest from '../../api/get';
import Picture from '../../components/Picture/picture';

const PicturePage = () => { 
    const router = useRouter();
    const url = router.query.pid? `https://jsonplaceholder.typicode.com/photos/${router.query.pid}`: `https://jsonplaceholder.typicode.com/photos/1`;

    
    const {data}= getRequest(url)
 
    
   return  <Layout>
                { data && data.length >0?
                data.map((picture:{ title:string,
                    thumbnailUrl:string,
                    albumId:number,
                    url:string,
                    id:string})=>{
                    return <Picture albumId={picture.albumId} id={picture.id} 
                    thumbnailUrl={picture.thumbnailUrl} title={picture.title} url={picture.url}/>
                })
                :
                ''}
         </Layout>

}

export default PicturePage;