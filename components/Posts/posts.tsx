import React from 'react';
import Post from '../Post/post';
import styles from './style.posts.module.scss';
import { PostType } from '../../types/type'
interface Props {
    posts:PostType[]
}

export default class Posts extends React.Component<Props, {}>{

    renderPosts = () => {
        if(this.props.posts && this.props.posts.length > 0) {
            
            return this.props.posts.map((post:{body:string, id:number, title:string, userId:number})=>
                <React.Fragment key={post.id}>
                        <Post body={post.body} id={post.id} title={post.title} userId={post.userId}/>
                </React.Fragment>
                )
        }
    }  
  

    render(){
        return (
            <div className={styles.postContainer}>
                { this.renderPosts()}
            </div>
        )
    }
}