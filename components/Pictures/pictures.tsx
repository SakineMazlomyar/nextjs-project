import React from 'react';
import Picture from '../Picture/picture'
interface Props {
    pictures:any
}
interface State {

}

export default class Pictures extends React.Component<Props, State>{
    constructor(props:Props){
        super(props);
        this.state = {

        }
    }

    renderPictures = () => {
        if(this.props.pictures && this.props.pictures.length > 0) {
            
            return this.props.pictures.map((picture)=>{
                return <Picture id={picture.id} url={picture.url} thumbnailUrl={picture.thumbnailUrl} title={picture.title} albumId={picture.albumId}/>
                      
            })
        }
    }


    render(){
        return (
            <div className="container-fluid mt-2">
                <div className="row">
                { this.renderPictures( )}
                </div>
            </div>
        )
    }
}