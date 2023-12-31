import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { styled } from "styled-components";

function StyledPhoneNumber({ phNo, setPhNo }) {

  const inputStyle = {
    width: "100%",
    height: "40px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "10px",
    paddingLeft: "45px",
  };
  const flagStyle = {
    height: "15px",
    border: "none",
    margin: "10px 5px",
    backgroundColor: "transparent",
  };

  return (
    <div style={{ textAlign: "left" }}>
      <PhoneInput
        country={"in"}
        onChange={(num) => {
          setPhNo && setPhNo(num);
        }}
        value={phNo}
        placeholder="Mobile Number"
        inputProps={{
          style: inputStyle,
          required: true
        }}
        buttonStyle={flagStyle}
      />
      <Span>Phone Number</Span>
    </div>
  );
}

export default StyledPhoneNumber;

const Span = styled.span`
  position: absolute;
  font-size: 12px;
  padding: 0 3px;
  transform: translateY(-50px) translateX(10px);
  background-color: white;
`;
