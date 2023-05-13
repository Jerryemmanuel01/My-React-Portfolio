import React from "react";
import DataSkill from "./DataSkillI";
import CurrentSkill from "./CurrentSkill";
import LeaningSkill from "./LearningSkill";

export default function Skill() {

  const nowCard = DataSkill.map((item) =>{
    console.log(item.LearningImg);
    return(
        <CurrentSkill 
          NowImg = {item.NowImg}
          NowName = {item.Nowname}
        />       
    )
  });
  const learningCard = DataSkill.map(({LearningImg, LeaningName}) => {
    return(
      <LeaningSkill 
        learningImg = {LearningImg}
        learningname = {LeaningName}
      />
          
    )
  })
  return (
    <div className="skill--page">
      <h2 className="head--txt skill-head-txt">SKILLS</h2>
      <h3 className="now--using--txt">NOW USING:</h3>
      <div className="now--using">
        {nowCard}
      </div>

      <h3 className="now--using--txt learning--txt">LEARNING:</h3>
      <div className="now--using learning-div">
        {learningCard}
      </div>
    </div>
  );
}
