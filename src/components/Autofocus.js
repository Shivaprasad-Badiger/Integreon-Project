import React, { useState } from "react";
import { styled } from "styled-components";


const InputComponent = () => {
  const [otpValues, setOtpValues] = useState();

  const otpValue = (e, index) => {
    const value = e.target.value;
    if (value.length === 1 && index < otpValues.length - 1) {
      const nextInput = document.querySelector(`#input-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }

    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
  };

  return (
    <InputDiv>
      {otpValues.map((value, index) => (
        <StyledInput
          key={index}
          type="text"
          pattern="[0-9]"
          maxLength={1}
          onChange={(e) => otpValue(e, index)}
          value={value}
          id={`input-${index}`}
        />
      ))}
    </InputDiv>
  );
};


export default InputComponent;
const InputDiv = styled.div`
  display: block;
  justify-content: flex-start;
  display: flex;
  gap: 20px;
  margin: 20px;
`;

const StyledInput = styled.input`
  width: 65px;
  height: 50px;
  border: 2px solid #e3e3e3;
  border-radius: 5px;
  color: #124966;
  font-size: 30px;
  text-align: center;
`;