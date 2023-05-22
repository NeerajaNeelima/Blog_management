import { NavLink } from 'react-router-dom'
import {useState} from 'react'
import './Navbar.css'
import Hamburger from '../Hamburger/hamburger'


    const Navbar = () => {
        const [showNavbar, setShowNavbar] = useState(false)
      
        const handleShowNavbar = () => {
          setShowNavbar(!showNavbar)
        }
        return (
            <nav className="navbar">
              <div className="container">
                <div className="logo">
                  <h3>Blogs</h3>
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                  <Hamburger />
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                  <ul>
                    <li>
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/new_blog">New Blog</NavLink>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </nav>
          )
        }
    


export default Navbar