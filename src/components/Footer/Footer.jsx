import React from 'react'
import './Footer.css'

import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footermain">

          <div className="cards">
            <h2>Quick Link</h2>
            <a href="#">About Us</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Help</a>
            <a href="#">Rooms</a>
          </div>

          <div className="cards">
            <h2>Support</h2>
            <a href="#">Our Location</a>
            <a href="#">The Hosts</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Resturant</a>
          </div>

          <div className="cards">
            <h2>Contact Info</h2>
            <h3>Address:</h3>
            <p>98 West 21th Street, Suite 721 New York NY 10016</p>
            <h3>Phone:</h3>
            <p>(+1) 435 3533</p>
            <h3>Email:</h3>
            <p>info@yourdomain.com</p>
          </div>

          <div className="cards">
            <h2>Subscribe</h2>
            <p>Sign up for our newsletter</p>
            <span>
            <input type="email" name="email" placeholder='Your email...' /> <FontAwesomeIcon icon={faPaperPlane} />
            </span>
          </div>

        </div>
        <hr />
        <div className="end">
         
          <p>Copyright © 2025 All rights reserved | This template is made with <span></span>  by Colorlib</p>
          <div className="socialicons">
            <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook}  className='socialcolors' />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram}   className='socialcolors' />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter}  className='socialcolors' />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin}  className='socialcolors' />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube}  className='socialcolors' />
            </a>
           
        </div>
        </div>
    </div>
  )
}

export default Footer
