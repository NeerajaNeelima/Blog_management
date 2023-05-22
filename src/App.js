
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import New_Blog from './New_Blog/New_blog';
import BlogDetails from './BlogDetails/BlogDetails';

function App() {
  return (
    <div className="App">
      
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route  exact path="/" element={<Home />}/>
      <Route path="/new_blog" element={<New_Blog />}/>
      <Route path="/blog_details/:id" element={<BlogDetails />}/>
      
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
