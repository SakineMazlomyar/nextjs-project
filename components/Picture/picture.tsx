import axios from 'axios';

interface Props {
    title:string,
    thumbnailUrl:string,
    albumId:number,
    url:string,
    id:string
}
const Picture = (props:Props) => {
     

        return <div  className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <div className="card">
              
              <img className="card-img-top" src={props.thumbnailUrl} alt="" />
              <div className="card-body">
                <span>Id: {props.id}  </span>
                <span>Album: {props.albumId}</span>
                <h5 className="card-title">title: {props.title}</h5>
                
                <p className="card-text">Description: Lorem Ipsum is simply dummied text of the printing and typesetting industry.</p>
                <a href={`/picture/${props.id}`} className="btn btn-outline-secondary">View Picture</a>
              </div>
            </div>
        </div>
}
        
     
  
   




export default Picture;