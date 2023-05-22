import { useParams,useNavigate } from "react-router-dom";
import useFetch from "../useEffect";
import './BlogDetails.css'
const BlogDetails = ()  => {
    const { id }=useParams()
    const {data : blogs ,isPending, error:error }=useFetch('http://localhost:5000/blogs/'+ id);
    const history=useNavigate()
    const handleDelete = () =>{
        fetch('http://localhost:5000/blogs/' + blogs.id,{
            method:'DELETE'
        }).then(()=>
        history('/')
        )
    }
    return(
        <div className="blog-details">
            {isPending && <div >Loading...</div>}
            {error && <div>{error} </div>}
            {blogs &&
            <article>
                <h2>{blogs.title}</h2>
                <p>Written by <span>{blogs.author}</span></p>
                <div>{blogs.body}</div>
                <button onClick={handleDelete}>Delete</button>
            </article>
            }
        </div>
    );
}

export default BlogDetails