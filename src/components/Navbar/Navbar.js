import React, { useState } from "react";
import Logo from "../../images/swiftlogo.png";
import { Link } from "react-router-dom";
import { faXmark, faBars, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  const [ischecked, setIschecked] = useState(false);
  return (
    <div className="nav--main">
      <Link to="/">
        <img src={Logo} className="logo--img" width="30px" />
      </Link>
      
      <input type="checkbox" id="check" />
      <label htmlFor="check"
      onClick ={() =>
          setIschecked((prev) => !prev )
        }
      >
        {ischecked ? (
          <FontAwesomeIcon icon={faXmark} className="checkbtn" />
        ) : (
          <FontAwesomeIcon icon={faBars} className="checkbtn" />
        )}
        
      </label>
      <ul
        className="navbar--nav"
        onClick={() => {
          var isChecked;
          isChecked = document.getElementById("check");
          isChecked.checked = false;
          setIschecked(false);
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
        <Link to="portfolio" className="navlink">
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
