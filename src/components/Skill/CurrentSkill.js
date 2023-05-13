import React from "react";

export default function CardSkill(props) {
  return (
    <div>
      <div className="skill--div">
        <div className="skill--el--img">
          <img src={props.NowImg} alt="htmlImage" className="skimg" />
        </div>
        <p className="skill--el">{props.NowName}</p>
      </div>
    </div>
  );
};
