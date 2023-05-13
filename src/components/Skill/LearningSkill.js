import React from "react";

export default function LeaningSkill(props) {
  return (
    <div>
      <div className="skill--div">
        <div className="skill--el--img">
          <img src={props.learningImg} alt="htmlImage" className="skimg" />
        </div>
        <p className="skill--el">{props.learningname}</p>
      </div>
    </div>
  );
}
