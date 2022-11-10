import React from "react";
import styled from "styled-components";
import pic1 from "./Assest/bundle.png";
import pic2 from "./Assest/move.png";
import pic3 from "./Assest/flutter.png";
import pic4 from "./Assest/pay.png";
import pic5 from "./Assest/mono.jpeg";
import pic6 from "./Assest/cowrywise.png";
import pic7 from "./Assest/bamboo.png";
import pic8 from "./Assest/nomba.jpeg";
import pic9 from "./Assest/teamapt..png";
import pic10 from "./Assest/prospa.png";
import pic11 from "./Assest/piggy.png";
import pic12 from "./Assest/thrive.jpeg";
import pic13 from "./Assest/credpal.png";
import pic14 from "./Assest/auto.png";
import pic15 from "./Assest/palmpay.jpeg";
import pic16 from "./Assest/Kuda.png";
import pic17 from "./Assest/opay.webp";
import pic18 from "./Assest/okra.png";

const sponers = () => {
  return (
    <Container>
      <Wrapper>
        <Div1>Our Talents Work With Many of these Leading Tech Companies.</Div1>
        <Div2>
          <Logo src={pic1} />
          <Logo src={pic2} />
          <Logo src={pic3} />
          <Logo src={pic4} />
          <Logo src={pic5} />
          <Logo src={pic6} />
          <Logo src={pic7} />
          <Logo src={pic8} />
          <Logo src={pic9} />
          <Logo src={pic10} />
          <Logo src={pic11} />
          <Logo src={pic12} />
          <Logo src={pic13} />
          <Logo src={pic14} />
          <Logo src={pic15} />
          <Logo src={pic16} />
          <Logo src={pic17} />
          <Logo src={pic18} />
        </Div2>
        <Div3>
          <Btn>New ⚡</Btn>
          <h5>
            HP Inc to support Utiva's mission to empower African women.
            <span> Head more</span>
          </h5>
        </Div3>
      </Wrapper>
    </Container>
  );
};

export default sponers;
const Container = styled.div`
  width: 100%;
  /* padding-bottom: 20px; */
`;
const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 0.5fr 2fr 0.5fr;
`;
const Div1 = styled.div`
  padding: 20px;

  font-size: 15px;
  color: #292b32;
`;
const Div2 = styled.div`
  /* background-color: yellow; */
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  padding: 20px;
  grid-gap: 5px;
`;

const Logo = styled.img`
  /* background-color: yellow; */
  object-fit: contain;
  width: 120px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Div3 = styled.div`
  display: flex;
  padding: 10px;
  /* background-color: green; */
  font-size: 15px;

  h5 {
    color: skyblue;
    padding-left: 10px;
  }

  span {
    cursor: pointer;
    color: blue;
  }
`;
const Btn = styled.div`
  background: linear-gradient(90deg, #61db99, #08a05c);
  height: 30px;
  width: 70px;
  margin-top: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: none;
  color: white;
  cursor: pointer;
`;
