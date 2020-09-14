import React from 'react';
import Picture from '../Picture/picture'

interface PictureType {id:string, url:string, thumbnailUrl:string, title:string, albumId:number}
interface Props {
    pictures:PictureType[]
}

export default class Pictures extends React.Component<Props, {}>{

    renderPictures = () => {
        if(this.props.pictures && this.props.pictures.length > 0) {
            
            return this.props.pictures.map((picture)=>{
                return <Picture id={picture.id} url={picture.url} thumbnailUrl={picture.thumbnailUrl} title={picture.title} albumId={picture.albumId}/>
                      
            })
        }
    }


    render(){
        return (
            <div className="container-fluid">
                <div className="row">
                { this.renderPictures()}
                </div>
            </div>
        )
    }
}