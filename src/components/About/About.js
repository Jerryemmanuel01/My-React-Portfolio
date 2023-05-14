import React from "react";
import CpImage from "../../images/ComputerImage.jpg";
import { faAward, faUsers, faFolderClosed} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  return (
    <section className="about--section">
      <div className="about--page">
        <h2 className="head--txt">ABOUT ME</h2>
        <div className="abt--main--page">
          <div className="about--container">
            <div className="about-image--div">
              <img src={CpImage} alt="about Image" className="abtImage" />
            </div>
            <div className="about--info">
              <h2 className="abtInfo--header">
                A dedicated Front-End Developer based in Enugu, Nigeria
              </h2>
              <p className="abtinfo--txt">
                As a junior Front-End Developer, I possess an impressive arsenal
                of skills in HTML, CSS, JavaScript, React-js, Next-js and SCSS.
                I excel in designing and maintaining responsive websites that
                offer a smooth user experience. My expertise lies in crafting a
                dynamic, engaging interface through writing clean and optimized
                code and utilizing cutting-edge development tools and
                techniques. I am also a team player who thrives in collaborating
                with cross-functional teams to produce outstanding web
                applications.
              </p>
            </div>
          </div>

          <div className="about--card--main">
            <div className="about--card">
              <FontAwesomeIcon icon={faAward} />
              <p className="ab--card--head">Experience</p>
              <p className="ab--card--txt">3+ Years Working</p>
            </div>

            <div className="about--card">
              <FontAwesomeIcon icon={faUsers} />
              <p className="ab--card--head">Clients</p>
              <p className="ab--card--txt">50+ Worldwide</p>
            </div>

            <div className="about--card">
              <FontAwesomeIcon icon={faFolderClosed} />
              <p className="ab--card--head">Projects</p>
              <p className="ab--card--txt">30+ Completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
