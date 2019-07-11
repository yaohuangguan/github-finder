import React from 'react'

function Menu ({icon,title}) {



   
          return (
               <nav className="navbar bg-dark">
                    <h1>
                    <i className={icon}></i>
                    {title}
                    </h1>
               </nav>
          )
     
}
Menu.defaultProps = {
     title:'Github Finder',
     icon:'fab fa-github'
}

export default Menu
