import Layout from '../components/Layout/layout';
import Posts from '../components/Posts/posts';
import getRequest from '../api/get';

const Index = () => {
    const {data} = getRequest('https://jsonplaceholder.typicode.com/posts');
  
    return <Layout>
                <Posts posts={data}/>
             </Layout>    

}      
   


export default Index;