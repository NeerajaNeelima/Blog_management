import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './New_blog.css'
const New_Blog= () =>{
    const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [Pending,setPending]=useState(false)
  const history =useNavigate();

  const handleSubmit =(e) =>{
    e.preventDefault();
    const blog ={title,body,author}
    setPending(true)
    fetch('http://localhost:5000/blogs',{
        method:'POST',
        headers :{"Content-Type":"application/json"},
        body :JSON.stringify(blog),
        
    })
    .then(()=>{
        setPending(false)
        history('/')
    })
    
  }
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!Pending && <button>Add Blog</button>}
        {Pending && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
}
export default New_Blog