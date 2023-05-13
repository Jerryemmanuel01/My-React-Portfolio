import React from "react";
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Mypics from "../../images/MyPics2.png";
import Hand from "../../images/HandWave.png";
import Navbar from "../Navbar/Navbar";
import CV from "../../assets/CV.pdf";

export default function Home() {
  return (
    
      <div className="landing--pg">
        <section>
          <div className="name--sec">
            <div className="home--info">
              <h1 className="name">
                Front-End React <br /> Developer
                <img src={Hand} className="handwave" />
              </h1>
              <h5 className="dev-info">
                Hi, I'm Dominic Jerryemmanuel. A passionate <br />
                Front-End React Developer based in Enugu, <br />
                Nigeria.{" "}
              </h5>

              <div className="cv--main">
                <a href={CV} download className="cv--div">
                  Download CV
                  <FontAwesomeIcon icon={faDownload} className="downloadIcon" />
                </a>
              </div>
            </div>
            <div className="user-pic--main">
              <div className="user--pic">
                <img src={Mypics} className="my-pics"></img>
              </div>
            </div>
          </div>
          <div className="socia--handles">
            <div className="socia--handles--icon">
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </div>
            <div className="socia--handles--icon">
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </div>
            <div className="socia--handles--icon">
              <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </div>
          </div>
        </section>
      </div>
      
  
  );
}
