import Layout from '../components/Layout/layout';
import Pictures from '../components/Pictures/pictures';

import getRequest from '../api/get';
const Index = () => {
    const {data} = getRequest('https://jsonplaceholder.typicode.com/photos');

    return <Layout>
                <div>   
                    {console.log(data)}
                    <Pictures pictures={data.slice(0,10)}/>
                </div>
             </Layout>

}
   


export default Index;