import {Link} from 'react-router-dom'
import './bloglist.css'
const BlogList =({blogs}) =>{
    
    return(
        <div className='Home'>
            {
                blogs.map((blog) =>
                <div className='blog-preview' key={blog.id}>
                    <Link to={`/blog_details/${blog.id}`}>
                    <h2>{blog.title}</h2><p>Written by <span>{blog.author}</span></p>
                    </Link>
                 </div>   
                )
            }
        </div>
    );
}

export default BlogList