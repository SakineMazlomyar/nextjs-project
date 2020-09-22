import Layout from '../../components/Layout/layout';
import { useRouter } from 'next/router';
import getRequest from '../../api/get';
import css from './style.module.pid.scss';

const PostPage = () => { 
    const router = useRouter();
    const url = router.query.pid? `https://jsonplaceholder.typicode.com/posts/${router.query.pid}`: `https://jsonplaceholder.typicode.com/posts/1`;

    
    const {data}= getRequest(url)
 
    
   return  <Layout>
                { data && data.length > 0 ?
                data.map((post:{
                    body:string, id:number, title:string, userId:number
                })=>{
                    return  <div key={post.id} className={css.singlePost}>
    
                                <div className={css.firstContainer}>
                                    <span>Post Id:{post.id}</span>
                                    <span>Title:{post.title} </span>
                                </div>
                                <div className={css.secondContainer}>
                                    <p>Description: {post.body}</p>
                                </div>
                                   
                            </div>
                }):
                ''}
         </Layout>

}

export default PostPage;