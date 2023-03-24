import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/sideBar.css';

const SideBar = () => {
  return (
    <div>
              <nav className='nav_menu'>
                            <ul className='nav_section'>
                                          <li className='list_section'>
                                               <Link to='/profilePage' className='menu_bar'>Profile</Link>    
                                          </li>
                                          <li className='list_section'>
                                               <Link to='/post' className='menu_bar'> Post</Link>     
                                          </li>
                                          <li className='list_section'>
                                              <Link to='/gallery' className='menu_bar'>Gallery</Link>    
                                          </li>
                                          <li className='list_sections'>
                                               <Link to='/todo' className='menu_bar'>ToDo</Link>      
                                          </li>
                            </ul>
              </nav>
    </div>
  )
}

export default SideBar