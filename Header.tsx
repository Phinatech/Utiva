import React, { useState } from "react";
import styled from "styled-components";
import pics from "./Assest/logo.svg";
import Globalbutton from "./Globalbutton";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const [show, setShow] = useState<boolean>(false);
  const toggleshow = () => {
    setShow(!show);
  };

  const [show2, setShow2] = useState<boolean>(false);
  const toggleshow2 = () => {
    setShow2(!show2);
  };

  const [show3, setShow3] = useState<boolean>(false);
  const toggleshow3 = () => {
    setShow3(!show3);
  };

  return (
    <Container>
      <Wrapper>
        <Head>
          <Logo src={pics} />

          <NavHolder>
            <Nav onClick={toggleshow}>
              Schools
              <Icons>
                <IoIosArrowDown />
              </Icons>
            </Nav>
            <Nav onClick={toggleshow2}>
              Enterprise
              <Icons>
                <IoIosArrowDown />
              </Icons>
            </Nav>
            <Nav onClick={toggleshow3}>
              Company
              <Icons>
                <IoIosArrowDown />
              </Icons>
            </Nav>
          </NavHolder>

          <BtnHolder>
            <Globalbutton
              bg=" #fbaf1b;"
              wd="105px"
              br="5px"
              col="white"
              title="getstarted"
              bor="none"
            />
            <Globalbutton
              bg="#f8f9f9"
              wd="87px"
              br="5px"
              col="#292b32"
              title="Login"
              bor="1px solid #050794"
            />
          </BtnHolder>
        </Head>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  display: flex;
  z-index: 1;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f4efef; ;
`;
const Head = styled.div`
  width: 90%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const BtnHolder = styled.div`
  width: 240px;
  display: flex;
  justify-content: space-around;
`;
const Logo = styled.img``;
const Icons = styled.div`
  margin-top: 4px;
  font-size: 12px;
  margin-left: 8px;
`;
const NavHolder = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
  /* background-color: blue; */
`;
const Nav = styled.div`
  display: flex;
  font-size: 15px;
`;
