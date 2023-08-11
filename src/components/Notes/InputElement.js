import React, { useState } from "react";
import { styled } from "styled-components";

function InputElement({ label }) {
  const [focus, setFocus] = useState(false);
  const [valueobj, setValueIn] = useState({ valueIn: "" });
  const [okokVal, setokokVal] = useState(false);

  const handleFocus = () => {
    setFocus(true);
  };
  const handleBlur = () => {
    setFocus(false);
  };
  const ValueInput = (e) => {
    setValueIn({ ...valueobj, valueIn: e.target.value });
  };
  const indexok = () => {
    if (valueobj.valueIn.length > 0) {
      setokokVal(true);
    } else {
      setokokVal(false);
    }
  };
  console.log(valueobj.valueIn.length, okokVal);

  return (
    <Box>
      <InputBox>
        <StyledInput
          onChange={(e) => {
            ValueInput(e);
          }}
          onFocus={() => {
            handleFocus();
            indexok();
          }}
          onBlur={() => {
            handleBlur();
            indexok();
          }}
          type="text"
          required
        />
        <StyledSpan
          onClick={() => {
            handleFocus();
          }}
          focus={focus}
          okokVal={okokVal}
        >
          {label}
        </StyledSpan>
      </InputBox>
    </Box>
  );
}

export default InputElement;

const Box = styled.div`
  box-sizing: border-box;
`;
const InputBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 350px;
  height: 40px;
  /* border: 2px solid blue; */
`;
const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  color: black;
  font-size: 16px;
  font-weight: 500;
  padding: 0 10px;
  /* border: 2px solid yellow; */
`;

const StyledSpan = styled.span`
  box-sizing: border-box;
  display: grid;
  align-content: center;
  width: fit-content;
  height: 100%;
  position: absolute;
  font-size: inherit;
  padding: 0 10px;
  transition: 0.2s;
  /* border: 2px solid red; */
  ${(props) =>
    props.focus || props.okokVal
      ? `
    transform: translateX(10px) translateY(-7px);
    box-sizing: border-box;
    font-size: 10px;
    font-weight: 700;
    background-color: white;
    padding: 0 10px;
    height: fit-content;
  `
      : ``}
`;
