import React from "react";
import styled from "styled-components";

interface Iprops {
  wd: string;
  bg: string;
  br: string;
  title: string;
  col: string;
  bor: string;
}

const GlobalButton: React.FC<Iprops> = ({ wd, bg, br, title, col, bor }) => {
  return (
    <Button bg={bg} wd={wd} col={col} br={br} bor={bor}>
      {title}
    </Button>
  );
};

export default GlobalButton;

const Button = styled.div<{
  wd: string;
  bg: string;
  col: string;
  br: string;
  bor: string;
}>`
  width: ${({ wd }) => wd};
  height: 35px;
  background-color: ${({ bg }) => bg};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ br }) => br};
  color: ${({ col }) => col};
  font-size: 13px;
  border: ${({ bor }) => bor};
  cursor: pointer;

  :hover {
  }
`;
