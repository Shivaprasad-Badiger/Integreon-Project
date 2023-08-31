import React from "react";
import { styled } from "styled-components";



const Login = ({ loginHandleSubmit, emailValue, passwordValue}) => {
  return (
    <MainDiv>
      <StyledForm onSubmit={(e) => e.preventDefault()}>
        <StyledLegend>Hello, Welcome</StyledLegend>
        <StyledInput
          type="email"
          placeholder="Email ID"
          onChange={(e) => emailValue(e)}
          required
        />
        <StyledInput
          type="password"
          placeholder="Password"
          onChange={(e) => passwordValue(e)}
          required
        />
        <Button onClick={()=>loginHandleSubmit()}>Login</Button>
      </StyledForm>
    </MainDiv>
  );
};

export default Login;

const MainDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 75%;
  padding: 45px 10px;
  margin: 10px !important;
  left: 0;
  gap: 30px;
  background-color: #f9f9f9;
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  height: 50px;
  padding: 15px;
  border: 1px solid #757575;
  border-radius: 5px;
`;

const StyledLegend = styled.legend`
  float: left;
  width: fit-content;
  font-family: "Times New Roman", Times, serif;
  font-weight: bold;
  font-size: 30px;
`;

const Button = styled.button`
  line-height: 50px;
  border: none;
  height: 50px;
  border-radius: 5px;
  background-color: #b42597;
  color: white;
`;
