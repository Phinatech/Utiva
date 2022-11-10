import React from "react";
import styled from "styled-components";
import { AiFillInstagram, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsEnvelope, BsPhone } from "react-icons/bs";
import log from "./Assest/logo.svg";

const Footer2 = () => {
  return (
    <Container>
      <Wrapper>
        <Div1>
          <Logo src={log} />
          <p>
            We are the leading TECH EDUCATION company in Sub-Saharan Africa that
            helps people learn premium technology skills virtually <br /> and
            help companies hire the best talents.
          </p>
          <Icons>
            <BsTwitter />
            <BsFacebook />
            <AiFillInstagram />
            <AiFillYoutube />
            <AiFillLinkedin />
          </Icons>
          <p>🎉 💝 🌞</p>
          <span>© 2022 Utiva. All right reserved.</span>
        </Div1>
      </Wrapper>
    </Container>
  );
};

export default Footer2;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f4efef;
  align-items: center;
`;
const Wrapper = styled.div`
  /* width: 60%; */
  /* background-color: yellow; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;
const Logo = styled.img``;
const Icons = styled.div`
  color: #050794;
  width: 35%;
  font-size: 30px;
  /* background-color: green; */
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  text-align: center;
  padding-left: 200px;
`;
const Div1 = styled.div`
  p {
    font-size: 12px;
    color: #9d9d9d;
  }
`;
const Div2 = styled.div``;
