import Layout from '../components/Layout/layout';
import Posts from '../components/Posts/posts';
import { PostType } from '../types/type'
import axios from 'axios';
;
interface PostsTypes {
    data: PostType[]
}
export default function Index({data}: PostsTypes){
   

    return <Layout>
                <Posts posts={data}/>
             </Layout>    

}      

Index.getInitialProps = async () => {
    try{
        let response = axios.get('https://jsonplaceholder.typicode.com/posts');
        let callBackResponse = await response;
        let data:PostType[] = callBackResponse.data
       
        return callBackResponse && callBackResponse.status === 200?{data:data}:{data:[]}
    }catch(error:any) {
        return {data: []}
            
    }   
}



