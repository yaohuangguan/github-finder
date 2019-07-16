import React from 'react'
import { Link } from 'react-router-dom'
function Menu ({icon,title}) {



   
          return (
               <nav className="navbar bg-dark">
                <h2>
                    <Link to="/">
                        
                         <i className={icon}></i>
                         {title}
                        
                    </Link>
                    </h2>
                    <ul>
                         <li>
                                   <Link to='/'>Home</Link>
                         </li>
                         <li>
                              <Link to="/about">About</Link>
                         </li>
                    </ul>
               </nav>
          )
     
}
Menu.defaultProps = {
     title:'Github Finder',
     icon:'fab fa-github'
}

export default Menu
