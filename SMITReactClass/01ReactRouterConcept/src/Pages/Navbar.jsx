import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      
      <ul>
        <li>
        <Link to="/" className='link'>Home</Link>
        </li>

        <li>
        <Link to="/contact" className='link'>Contact</Link>
        </li>

        <li>
        <Link to="/mobile" className='link'>About Us </Link>
        </li>

      </ul>
    </div>
  )
}

export default Navbar
