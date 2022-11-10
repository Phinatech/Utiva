import React from "react";
import Proscard from "./Proscard";
import img3 from "./Assest/divimg3.png";

const Frontend = () => {
  return (
    <Proscard
      images={img3}
      text1="Become a Full-Stack Developer"
      text2="Go from zero knowledge to being able to build your technology platforms! Starting with the foundations of software engineering. By the end of this program you would have mastered a specialization and learn the art of effective collaboration to solve real world problems."
    />
  );
};

export default Frontend;
