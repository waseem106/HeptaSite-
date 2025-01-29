import React, { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    
      <>
      {!isSidebarOpen && (
        <>
        <div className='main'>
          <div className="header">
            <h3>Hepta</h3>
            <FontAwesomeIcon className='icon' icon={faBars} onClick={toggleSidebar} />
          </div>

          <div className="image-container">
            <h1>Travel & Tours</h1>
            <h4>A free template by <span><a href="">Colorlib.</a></span> Download and share!</h4>
            <button>VISIT COLORLIB</button>
          </div>

          </div>
        </>
      )}

     {isSidebarOpen && (
        <div className="sidebar">
          
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a> </li>
            <li><a href="">Services</a> </li>
            <li><a href="">Contact</a> </li>
          </ul>
          <div className="button">
          <FontAwesomeIcon icon={faX} onClick={toggleSidebar} />
          </div>
          
          {/* <button onClick={toggleSidebar}>Close</button>  */}
        </div>
      )}
    </>
  );
};

export default Header;