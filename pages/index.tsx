import Layout from '../components/Layout/layout';
import Pictures from '../components/Pictures/pictures';

import getRequest from '../api/get';
const Index = () => {
    const {data} = getRequest('https://jsonplaceholder.typicode.com/photos');

    return <Layout>
                <Pictures pictures={data.slice(0,20)}/>
             </Layout>

}
   


export default Index;