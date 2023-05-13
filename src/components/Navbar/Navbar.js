import React, { useState } from "react";
import Logo from "../../images/swiftlogo.png";
import { Link } from "react-router-dom";
import { faXmark, faBars, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  // const [ischecked, setIschecked] = useState(true);
  var ischecked = false
  return (
    <div className="nav--main">
      
      <img src={Logo} className="logo--img" width="30px" />
      <input type="checkbox" id="check" />
      <label htmlFor="check">
        {ischecked ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} className="checkbtn"/>}
      </label>
      <ul className="navbar--nav"
          onClick={() => {
            ischecked = document.getElementById("check")
            ischecked.checked = false
          }}
      >
        <Link to="/" className="navlink">
          <li>Home</li>
        </Link>
        <Link to="about" className="navlink">
          <li>About</li>
        </Link>
        <Link to="skills" className="navlink">
          <li>Skills</li>
        </Link>
        <Link to="#" className="navlink">
          <li>Portfolio</li>
        </Link>
        <Link to="Contact" className="navlink">
          <li>Contact</li>
        </Link>
      </ul>
      
      {/* <button className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </button> */}
    </div>
  );
}
