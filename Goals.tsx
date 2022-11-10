import React from "react";
import styled from "styled-components";
import pics from "./Assest/fine 1.png";
import pics2 from "./Assest/fine 2.png";
import pics3 from "./Assest/fine 3.png";
import pics4 from "./Assest/fine 4.png";
import img1 from "./Assest/1.jpg";
import img2 from "./Assest/2.jpg";
import img3 from "./Assest/3.jpg";

const Goals = () => {
  return (
    <Container>
      <Head>
        <Wrapper1>
          <Img src={pics} />
          <Img src={pics2} />
          <Img src={pics3} />
          <Img src={pics4} />
        </Wrapper1>
        <Wrapper2>
          <Div1>
            <Roundimg>
              <Round src={img1} />
              <Round2 src={img2} />
              <Round3 src={img3} />
              <Round4 src={img3} />
            </Roundimg>
            <h1>1 million</h1>
            <p>Young Nigeria</p>
          </Div1>
          <Div2>
            <h1>Our Goals</h1>
            <p>
              To enable <span>1,000,000 young Africans</span> access
              aspirational work oppotunities through <br />
              <span>maeket-driven premium learning programmes</span>,
              equippingthem with digital skils and <br />
              pre-work experience for the purpose of improving livelihood &{" "}
              <br />
              socio-cultural barriers by 2030.
            </p>
          </Div2>
        </Wrapper2>
      </Head>
    </Container>
  );
};

export default Goals;
const Container = styled.div`
  /* width: 100%; */
  /* height: 400px; */
  /* background-color: red; */
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;
const Wrapper1 = styled.div`
  /* background-color: red; */

  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* width: 100%; */
`;
const Head = styled.div`
  /* width: 100%; */
  /* background-color: #f4efef; */
  /* display: flex;
  justify-content: center; */
  /* align-items: center; */
  /* flex-direction: column; */
`;
const Img = styled.img`
  width: 337px;
  height: 300px;
  object-fit: cover;
`;
const Wrapper2 = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  /* width: 90%; */
  margin-top: 40px;
  margin-bottom: 10px;
  align-items: center;
`;
const Div1 = styled.div`
  width: 280px;
  /* background-color: white; */
  line-height: 10px;

  h1 {
    color: #10a662;
    font-weight: 800;
    font-size: 35px;
  }
`;
const Div2 = styled.div`
  width: 40%;

  h1 {
    color: #05079d;
    font-size: 38px;
  }

  p {
    font-size: 13px;
    opacity: 0.7;
  }
  span {
    font-weight: 800;
    color: black;
  }
`;
const Roundimg = styled.div`
  display: flex;
  align-items: center;
`;
const Round = styled.img`
  height: 33px;
  width: 33px;
  border: 0.5px solid white;
  border-radius: 50px;
`;
const Round2 = styled.img`
  height: 33px;
  width: 33px;
  border: 0.5px solid white;
  border-radius: 50px;
  margin-left: -7px;
`;
const Round3 = styled.img`
  height: 33px;
  width: 33px;
  border: 0.5px solid white;
  border-radius: 50px;
  margin-left: -7px;
`;
const Round4 = styled.img`
  height: 33px;
  width: 33px;
  border: 0.5px solid white;
  border-radius: 50px;
  margin-left: -7px;
`;
