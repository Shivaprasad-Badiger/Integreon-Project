import React, { useState } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import Login from "./login";
import bgImage from "./image/background-image.jpg";
import image1 from "./image/integreon-hero-image.png";
import squareBack from "./image/BackSquare.png";
import cornerImg from "./image/corner.png";
import Validation from "./Validation";
import { useNavigate } from "react-router-dom";
import { setEmailRed } from "./redux/action";
import { useDispatch } from "react-redux";

const Content = ({ handleValidate }) => {
  // login submit
  const [stepOne, setStepOne] = useState(0);
  const Navigate = useNavigate();
  const loginVerification = () => {
    setStepOne(1);
  };


  // redux
  const dispatch = useDispatch();
  // login verification
  const [details, setDetails] = useState({ email: "", password: "" });
  const emailValue = (e) => {
    setDetails({ ...details, email: e.target.value });
  };
  const passwordValue = (e) => {
    setDetails({ ...details, password: e.target.value });
  };
  const LoginSubmitHandler = () => {
    details.email === "abc@gmail.com" && details.password === "123"
      ? loginVerification()
      : alert("Invalid email and password");
    dispatch(setEmailRed(details?.email))
  };


  // otp verification
  const [OTP, setOTP] = useState([]);
  const OTPSubmitHandler = () => {
    if (OTP === "12345") {
      localStorage.setItem("validate", JSON.stringify(true));
      handleValidate(JSON.parse(localStorage.getItem("validate")));
      Navigate("/UserProfile");
    }
    else alert("Invalid OTP");
  };



  return (
    <MainDiv>
      <LeftDiv>
        <Image src={image1} alt="cover pic" />
        <Square style={{ "z-index": "1" }} src={squareBack} alt="Back" />
        <Square style={{ "z-index": "3" }} src={cornerImg} alt="Back" />
        <Paragraph>
          "Integreon's expertise and willingness to innovate allows me to
          deliver increased efficiency to my key internal clients, our
          attorneys, so they can focus on higher-value work."
        </Paragraph>
      </LeftDiv>
      <RightDiv>
        {stepOne === 0 ? (
          <Login
            loginHandleSubmit={LoginSubmitHandler}
            emailValue={emailValue}
            passwordValue={passwordValue}
          />
        ) : (
          <Validation otpHandleSubmit={OTPSubmitHandler} OTP={OTP} setOTP={setOTP} />
        )}
      </RightDiv>
    </MainDiv>
  );
};
export default Content;

const MainDiv = styled.div`
height: 90vh;
  background-color: white;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-position: right;
  background-color: #f7f7f7;
  display: flex;
  @media (max-width: 426px) {
    flex-direction: column;
  }
`;
const LeftDiv = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
`;
const Image = styled.img`
  position: relative;
  padding-top: 30px;
  display: block;
  width: 75%;
  z-index: 2;
`;
const fadeIn = keyframes`
  0% {
    scale: 0;;
  }
  100% {
    scale: 1;
  }
`;
const Square = styled.img`
  position: absolute;
  display: block;
  top: 12.5%;
  height: 23vw;
  padding-left: 37%;
  animation-name: ${fadeIn};
  animation-duration: 2s;
`;
const Paragraph = styled.p`
  text-overflow: wrap;
  font-family: aktiv-grotesk, sans-serif;
  font-size: 20px;
  width: 78%;
  text-align: left;
  padding-left: 30px;
`;
const RightDiv = styled.div`
  width: 100%;
`;
