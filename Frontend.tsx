import React from "react";
import Proscard from "./Proscard";
import img1 from "./Assest/divimg1.png";

const Frontend = () => {
  return (
    <Proscard
      images={img1}
      text1="Become a Frontend Developer"
      text2="You’ll learn all you need to know and build the capacity to handle projects with an interesting portfolio as a frontend developer with a coaching program that focuses on fundamentals of HTML, CSS, JavaScript and React."
    />
  );
};

export default Frontend;
