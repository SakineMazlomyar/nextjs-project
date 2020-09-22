import axios from 'axios';
import {useEffect , useState} from 'react';

const getRequest= (url:string) => {

    const [state,setState] = useState({data: []});

    useEffect(()=>{
    
        let getPicture = async () => { 
            if( url !== undefined )  {
                let response = axios.get(url);
                let callBackResponse = await response;
                
                callBackResponse && callBackResponse.status === 200?setState({data:callBackResponse.data.length?callBackResponse.data:[callBackResponse.data]}):setState({data:[]})
            }
        }
        getPicture();
     
    },[url])

    return state

}

export default getRequest