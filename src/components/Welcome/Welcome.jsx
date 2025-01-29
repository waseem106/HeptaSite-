import React from "react";
import "./Welcome.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="left">
        <img src="../../../public/images/slider-2.jpg" alt="" />
      </div>
      <div className="right">
        <h1>Welcome To Our Website</h1>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean. 
        </p>
        <p>A small river named Duden flows by their place and
          supplies it with the necessary regelialia.</p>
        <div className="watch-icon">
         <FontAwesomeIcon  className="icon" icon={faPlay} />
          <a href="#">WATCH THE VIDEO</a></div>
        </div>
    </div>
  ); 
};

export default Welcome;
