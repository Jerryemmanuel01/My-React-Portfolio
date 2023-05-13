import React from "react";
import CpImage from "../../images/ComputerImage.jpg";

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
          <p></p>
        </div>
      </div>
    </section>
  );
}
