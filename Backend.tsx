import React from "react";
import Proscard from "./Proscard";
import img from "./Assest/divimg.png";

const Frontend = () => {
  return (
    <Proscard
      images={img}
      text1="Become a Backend Developer"
      text2="Go from zero knowledge to being able to build your own complete websites! Starting with the foundations of software engineering. Develop and deploy enterprise back-end applications following best practices using ExpresJS & NodeJS."
    />
  );
};

export default Frontend;
