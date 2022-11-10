import React from "react";
import styled from "styled-components";
import pics from "./Assest/logo.svg";
import { BsFacebook, BsTwitter, BsEnvelope, BsPhone } from "react-icons/bs";
import { AiFillInstagram, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <FirstDiv>
          <Logo src={pics} />

          <p>
            We are the leading TECH EDUCATION company with students from over 30
            countries and a leading UK accreditation to deliver the best digital
            workforce training.
          </p>
          <Icons>
            <BsFacebook />
            <AiFillInstagram />
            <AiFillLinkedin />
            <AiFillYoutube />
            <BsTwitter />
          </Icons>
        </FirstDiv>
        <SecondDiv>
          <Box1>
            <h5>Top Courses</h5>
            <Nav>Data Accelation</Nav>
            <Nav>Data Accelation</Nav>
            <Nav>Data Science Fellowship</Nav>
            <Nav>Product Incubator</Nav>
            <Nav>Product Accelerator</Nav>
            <Nav>UI/UX Design</Nav>
          </Box1>
          <Box1>
            <h5>Grow with Utiva</h5>
            <Nav>Business</Nav>
            <Nav>Impact</Nav>
            <Nav>Data Accelation</Nav>
            <Nav>Data Accelation</Nav>
            <Nav>Data Accelation</Nav>
          </Box1>
          <Box1>
            <h5>Top course</h5>
            <Nav>Data Accelation</Nav>
            <Nav>Data Accelation</Nav>
            <Nav>Data Accelation</Nav>
            <Nav>Data Accelation</Nav>
            <Nav>Data Accelation</Nav>
          </Box1>
          <Box1>
            <h5>Top course</h5>
            <Nav>Data Accelation</Nav>
            <Nav>Data Accelation</Nav>
            <Nav>Data Accelation</Nav>
            <Nav>Data Accelation</Nav>
            <Nav>Data Accelation</Nav>
          </Box1>
          <Box1>
            <h5>Top course</h5>
            <Nav>Data Accelation</Nav>
            <Nav>Data Accelation</Nav>
            <Nav>Data Accelation</Nav>
            <Nav>Data Accelation</Nav>
            <Nav>Data Accelation</Nav>
          </Box1>
          <Box1>
            <h5>Top course</h5>
            <Nav>Data Accelation</Nav>
            <Nav>Data Accelation</Nav>
            <Nav>Data Accelation</Nav>
            <Nav>Data Accelation</Nav>
            <Nav>Data Accelation</Nav>
          </Box1>
          <Box1>
            <h5>Top course</h5>
            <Nav>
              <Icon>
                <BsEnvelope />
              </Icon>
              Data Accelation
            </Nav>
            <Nav>
              <Icon>
                <BsPhone />
              </Icon>
              +44 749 538 0293
            </Nav>
            <Nav>
              <Icon>
                <BsPhone />
              </Icon>
              +44 749 538 0293
            </Nav>
            <Nav>
              <Icon>
                <BsPhone />
              </Icon>
              +44 749 538 0293
            </Nav>
          </Box1>
          <Box1></Box1>
        </SecondDiv>

        <br />
        <br />
        <br />
        <CopyPg>
          <span>&copy; 2022 Utiva. All right reserved.</span>
        </CopyPg>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  /* height: 400px; */
  background-color: #d6d6e9;
`;
const Wrapper = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  padding: 30px;

  flex-wrap: wrap;
`;
const FirstDiv = styled.div`
  width: 300px;
  /* height: 200px; */
  /* background-color: red; */
  margin-top: 40px;
`;
const SecondDiv = styled.div`
  /* background-color: green; */
  width: 60%;
  /* height: 200px; */
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
`;

const Logo = styled.img`
  p {
    color: black;
  }
`;
const Icons = styled.div`
  color: #050794;
  width: 70%;
  font-size: 25px;
  display: flex;
  /* background-color: red; */
  justify-content: space-between;
`;

const Box1 = styled.div`
  /* background-color: #b35757; */
`;
const Nav = styled.div`
  padding-bottom: 20px;
  font-size: 12px;
  color: rgb(129, 132, 141);

  :hover {
    color: gold;
    cursor: pointer;
  }
`;

const Icon = styled.div`
  :hover {
    color: black;
  }
`;

const CopyPg = styled.div`
  /* background-color: red; */
  width: 100%;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: silver;
  margin-top: 50px;
`;
