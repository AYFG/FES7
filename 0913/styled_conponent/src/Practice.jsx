import React from "react";
import styled, { css } from "styled-components";

const One = css`
  width: 50px;
  height: 50px;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: 2px solid gray;
`;
const Two = css`
  color: black;
  border-radius: 10px;
`;
const Three = css`
  background-color: green;
  border-radius: 10px;
`;
const Box = styled.div`
  ${One}
`;
const Box2 = styled.div`
  ${One}
  ${Two}
`;
const Box3 = styled.div`
  ${One}
  ${Three}
`;
export default function Practice() {
  return (
    <div>
      <Box>버튼1</Box>
      <Box2>버튼2</Box2>
      <Box3>버튼3</Box3>
    </div>
  );
}
