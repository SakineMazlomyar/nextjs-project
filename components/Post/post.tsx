interface Props { body:string, id:number, title:string, userId:number};
import css from './style.module.post.scss';
import Link from 'next/link';

const Post = (props:Props) => {
       
  
        return <div className={css.post}>
                    <span>Id: {props.id}  </span>
                    <div className={css.titleContainer}>
                        <h6>Title: {props.title}</h6>
                    </div>
                    <div className={css.bodyContainer}>
                        <p>Description: {props.body}</p>  
                    </div>
                    <div className={css.buttonViewer}>
                        <Link href={"/[id]"} as={`/${props.id}`}>
                            <a>View</a> 
                        </Link>
                    </div>
              </div>
}
        
     
  
   




export default Post;