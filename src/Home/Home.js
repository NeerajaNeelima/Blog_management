import BlogList from '../BlogList/Bloglist'
import './Home.css'

import useFetch from '../useEffect'

const Home =() =>{
    const {data:blogs,isPending,error:error}=useFetch('http://localhost:5000/blogs');
    return(
    <>

    <div className="Header">
    <h1>All Blogs</h1>
    </div>
    {error && <div>{error}</div>}
    {isPending &&<div>Loading.....</div>}
    {blogs && <BlogList blogs={blogs}/>}
    </>
    );
}

export default Home;