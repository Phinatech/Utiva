import React from "react";
import styled from "styled-components";
import bgimg from "./Assest/bg2.jpg";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Div1>
          <h1>
            Impact is the reason
            <br /> we exist!
          </h1>
          <p>
            <b> Utiva.impact</b> is an impact project of Utiva, a tech company
            that is powering the tech side <br />
            of <b>learning</b> for people of colour and minorities across{" "}
            <b>Africa and the world.</b>
          </p>
        </Div1>
        <Div2>
          <h2>
            Courses available in utiva <br />
            Programming school Africa.
          </h2>
          <p>
            utiva offers a wide variety of programs and courses led by leading
            industry experts .
          </p>
        </Div2>
      </Wrapper>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  width: 100%;
  background-color: #f4efef;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  /* background-color: yellow; */
  /* height: 500px; */
  flex-direction: column;
`;
const Div1 = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  background-image: url(${bgimg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 100%;
  align-items: center;
  display: flex;
  text-align: center;
  flex-direction: column;

  h1 {
    font-size: 70px;
    /* line-height: 5rem; */
    font-weight: 600;
    background: linear-gradient(
      96.18deg,
      #0b2771 7.78%,
      #08a05c 46.07%,
      #fbaf1b 85.17%
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
  p {
    line-height: 20px;
  }
`;
const Div2 = styled.div`
  width: 90%;
  margin-bottom: 30px;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  h2 {
    color: #050794;
    font-size: 25px;
    font-weight: 800;
  }
  p {
    font-size: 13px;
    opacity: 0.7;
  }
`;
