import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
 
const Navbar = () =>{
    return(
        <nav class="nav-wrapper">
            <div className="container">
                <ul>
                    <Link to="/Home"><li>Home</li></Link>
                    <Link to="/Programprops1"><li>About</li></Link>
                    <Link to="/Programprops2"><li>programs</li></Link>
                    <Link to="/Keyfeatures"><li>Key features</li></Link>
                    <Link to="/Teamprops"><li>Team</li></Link>
                    <Link to="/Contactus"><li>contact</li></Link>
 
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;