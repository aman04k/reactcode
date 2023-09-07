import React from 'react'
import {Link} from 'react-router-dom'
import OIP from './OIP.jpeg'

function Header(){
    return(
        <> 
         <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <img src={OIP} width="200px" />
         </ul>
         </>
        
    )
}
export default Header;