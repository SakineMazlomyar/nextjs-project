import Layout from '../components/Layout/layout';
import css from '../scss-pages/style.module.scss';
import axios from 'axios';
import { PostType } from '../types/type';
import { NextPageContext } from 'next';

interface Post {
    post:PostType
}
export default function PostPage ({post}: Post) {

   return  <Layout>
                { post.body !== "" && post.title !== "" ?
                  <div key={post.id} className={css.singlePost}>
    
                                <div className={css.firstContainer}>
                                    <span>Post Id: {post.id}</span>
                                    <span>Title: {post.title} </span>
                                </div>
                                <div className={css.secondContainer}>
                                    <p>Description: {post.body}</p>
                                </div>
                                   
                            </div>
                :''}
         </Layout>

}
PostPage.getInitialProps = async ({query, req}: NextPageContext) => {
   
    try{
        let response = axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
        let callBackResponse = await response;
            
        return callBackResponse && callBackResponse.status === 200?{post:callBackResponse.data}:{post:{ body:"", id:0,title:"",userId:0}}
    }catch(error:any) {
        return {post:{ body:"", id:0,title:"",userId:0}}
            
    }   
}


