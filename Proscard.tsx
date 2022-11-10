import React from "react";
import styled from "styled-components";
import { AiOutlineClockCircle } from "react-icons/ai";
import { HiOutlineArrowSmRight } from "react-icons/hi";

interface data {
  images: string;
  text1: string;
  text2: string;
}

const Proscard: React.FC<data> = ({ images, text1, text2 }) => {
  return (
    <Container>
      <Wrapper>
        <Div1>
          <i>For Early Starters</i>
          <h4>{text1}</h4>
          <p>
            {text2} <br />{" "}
          </p>
          <Div>
            <Icons>
              <AiOutlineClockCircle />{" "}
            </Icons>
            2 months
          </Div>
          <h5>
            Next class starts: <span>December 3, 2022</span>
          </h5>
          <Btndiv>
            learn more{" "}
            <Icon2>
              <HiOutlineArrowSmRight />{" "}
            </Icon2>
          </Btndiv>
        </Div1>
        <Div2>
          <Divimg src={images} />
        </Div2>
      </Wrapper>
    </Container>
  );
};

export default Proscard;

const Container = styled.div`
  width: 100%;
  height: 400px;
  background-color: #f4efef;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-bottom: 10px;
  margin-top: 50px; */
  padding-bottom: 50px;
`;
const Wrapper = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffff;
  border-radius: 5px;
`;
const Div1 = styled.div`
  width: 50%;
  /* height: 400px; */
  /* background-color: #0ec84f; */

  i {
    background-color: #cce5f0;
    padding: 2px 15px;
    border-radius: 5px;
    font-size: 10px;
  }

  h4 {
    font-size: 30px;
    font-weight: bold;
    color: #050794;
  }

  p {
    font-size: 13px;
    opacity: 0.7;
  }

  h5 {
    font-size: 13px;
    opacity: 0.7;
  }

  span {
    color: #050794;
  }
`;
const Div2 = styled.div``;
const Btndiv = styled.div`
  display: flex;
  width: 130px;
  height: 50px;

  color: #050794;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  border-radius: 5px;
  border: 1px solid rgb(251, 175, 27);

  :hover {
    font-size: 18px;
    background-color: transparent;
    font-weight: 500;
    transform: scale(1, 1);
    transition: all 350ms;
    border: 1px solid rgb(251, 175, 27);
    color: blue;
    cursor: pointer;
  }
  padding: 3px 7px;
  box-shadow: #050794 0px 50px 100px --20px, #050794 0px 30px 60px --30px;
`;
const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;
const Icon2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;
const Div = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Divimg = styled.img`
  width: 450px;
  height: 350px;
  object-fit: contain;
  margin: 10px;
`;
