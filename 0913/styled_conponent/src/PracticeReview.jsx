import React from "react";
import styled, { css } from "styled-components";

// const Btn = styled.button`
//   background-color: blue;
//   color: white;
// `;

// // Btn 스타일드컴포넌트를 확장 ,styled(확장하고 싶은 컴포넌트)
// const Btn2 = styled(Btn)`
//   color: black;
//   border-radius: 5px;
//   border: none;
// `;

// const Btn3 = styled(Btn2)`
//   background-color: rgba(144, 238, 144, 1);
//   border-radius: 5px;
//   color: white;
// `;

// // V2
// const BorderNone = css`
//   border: none;
// `;

// const BorderRadius = css`
//   border-radius: 8px;
// `;

// const BoxShadow = css`
//   box-shadow: 0 0 5px #33333333;
// `;
// const Btn = styled.button`
//   background-color: blue;
//   color: white;
// `;

// const Btn2 = styled(Btn)`
//   ${BorderNone};
//   ${BorderRadius};
//   ${BoxShadow};
//   color: black;
// `;

// const Btn3 = styled(Btn)`
//   ${BorderNone};
//   ${BorderRadius};
//   ${BoxShadow};
//   background-color: rgba(144, 238, 144, 1);
// `;

// V3
const BorderNone = css`
  border: none;
`;

const BorderRadius = css`
  border-radius: 8px;
`;

const BoxShadow = css`
  box-shadow: 0 0 5px #33333333;
`;
const Btn = styled.button`
  background-color: blue;
  color: white;
`;

const ExtendedBtn = styled(Btn)`
  ${BorderNone};
  ${BorderRadius};
  ${BoxShadow};
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
`;

export default function PracticeReview() {
  return (
    <div>
      <Btn>버튼1</Btn>
      <ExtendedBtn color="black" bgColor="royalblue">
        ExtendedBtn
      </ExtendedBtn>
      <ExtendedBtn color="white" bgColor="rgba(144, 238, 144, 1)">
        ExtendedBtn
      </ExtendedBtn>
    </div>
  );
}
