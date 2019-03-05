import React from 'react'
import {Link , NavLink} from 'react-router-dom'

const Navbar=()=>{
    return(
            <nav className="nav-wrapper purple">
                <a href="#" className="brand-logo right">Routers</a>
                 <ul className="left">
                     <li><NavLink to="/home">Home</NavLink></li>
                     <li><NavLink to="/about">About</NavLink></li>
                     <li><NavLink to="/contact">Contact</NavLink></li>
               </ul>
             </nav>
          )
}

  export default Navbar