import React from "react";
import { styled } from "styled-components";
import WestIcon from "@mui/icons-material/West";

function Validation({ otpHandleSubmit, otpValue }) {
  return (
    <MainDiv>
      <SubDiv>
        <StyledH>Enter OTP</StyledH>
        <Paragraph>
          A 5-Digit code has been sent to
          <span style={{ color: "#b42597" }}> richard@integreon.com</span>
        </Paragraph>
        <InputDiv>
          <StyledInput type="text" pattern="[0-9]" maxLength={1} id="1" onChange={(e) => {otpValue(e, 1)}} autoFocus/>
          <StyledInput type="text" pattern="[0-9]" maxLength={1} id="2" onChange={(e) => {otpValue(e, 2)}} />
          <StyledInput type="text" pattern="[0-9]" maxLength={1} id="3" onChange={(e) => {otpValue(e, 3)}} />
          <StyledInput type="text" pattern="[0-9]" maxLength={1} id="4" onChange={(e) => {otpValue(e, 4)}} />
          <StyledInput type="text" pattern="[0-9]" maxLength={1} id="5" onChange={(e) => {otpValue(e, 5)}} />
        </InputDiv>
        <Button onClick={() => otpHandleSubmit()}>Verify & Login</Button>
        <BottomDiv>
          <Span>
            <WestIcon />
            &nbsp;&nbsp;
            <RefButton href="./login.js">Go Back</RefButton>
          </Span>
          <Span>
            <RefButton>Resend OTP</RefButton>
          </Span>
        </BottomDiv>
      </SubDiv>
    </MainDiv>
  );
}

export default Validation;

const MainDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const SubDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 75%;
  padding: 24px 10px;
  background-color: #f9f9f9;
`;
const StyledH = styled.div`
  color: #124966;
  font-weight: 500;
  font-size: 30px;
  width: fit-content;
  margin: 25px;
  margin-top: 0;
`;
const Paragraph = styled.p`
  font-weight: 500;
  width: fit-content;
  margin-left: 25px;
  font-size: 16px;
`;
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
const Button = styled.button`
  line-height: 50px;
  font-size: 20px;
  border: none;
  height: 50px;
  border-radius: 5px;
  background-color: #b42597;
  color: white;
  margin: 10px 5px;
`;
const BottomDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Span = styled.span`
  box-sizing: border-box;
  display: flex;
  color: #55595a;
  margin: 0px 10px;
  line-height: 30px;
`;

const RefButton = styled.a`
  color: #55595a;
  font-size: 16px;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0);
  text-decoration: underline;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
