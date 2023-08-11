import React, { useState } from "react";
import styled from "styled-components";
import InputField from "./InputField";
import ImageIcon from "./ImageIcon";
import DropdownElement from "./DropdownElement";
import ToggleOffIcon from "@mui/icons-material/ToggleOffOutlined";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import StyledPhoneNumber from "./StyledPhoneNumber";

function UserProfile() {
  // workLocation
  const workLocations = ["India", "USA", "Australia"];
  // timeZone
  const timeZones = [
    "(utc-08:00)Pacific Time (US & Canada)",
    "(UTC+05:30) Indian Standard Time (IST)",
    "(UTC+09:00) Tokyo, Seoul, Osaka, Sapporo",
  ];
  // times
  const times = [];
  for (let i = 1; i <= 12; i++) {
    times.push(`${i}:00 AM`);
    times.push(`${i}:00 PM`);
  }
  //toggle
  const [toggleState, setToggleState] = useState(true);
  const toggleIcon = (e) => {
    setToggleState(!toggleState);
    e.preventDefault();
  };

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <MainDiv>
        <StyledSpan1>
          <span>Profile Settings</span>
        </StyledSpan1>
        <SubDiv>
          <StyledSpan2>
            <span>Profile Info</span>
          </StyledSpan2>
          <FormDiv>
            <InputField label={"First Name"}/>
            <InputField label={"Last Name"} />
            <ImageIcon />
            <InputField label={"Role"} />
            <InputField label={"Email Address"}/>
            <DropdownElement label={"Work Location"} arr={workLocations}/>
            <StyledPhoneNumber/>
            <div >
              <DropdownElement label={"Time Zone"} arr={timeZones} />
              <TimeZoneDiv>
                <p style={{margin: "0"}}>Adjust for daylight saving mode automatically</p>
                <ToggleButton onClick={toggleIcon}>--</ToggleButton>
                <ToggleSpan>
                  {toggleState ? (
                    <ToggleOffIcon fontSize="medium" />
                  ) : (
                    <ToggleOnIcon fontSize="medium" />
                  )}
                </ToggleSpan>
              </TimeZoneDiv>
            </div>
            <div >
              <StyledSpan3>Work Hours</StyledSpan3>
              <ChildDiv>
                <DropdownElement label={"Start Time"} arr={times} />
                <DropdownElement label={"End Time"} arr={times} />
              </ChildDiv>
            </div>
          </FormDiv>
          <StyledSubmit>Update</StyledSubmit>
        </SubDiv>
      </MainDiv>
    </div>
  );
}

export default UserProfile;

const MainDiv = styled.div`
  box-sizing: border-box;
  height: inherit;
  background-color: #f9f8fd;
  padding: 40px 20px 30px 20px;
  margin-left: 4%;
  width: 100%;
`;
const StyledSpan1 = styled.span`
  position: absolute;
  left: 5%;
  top: 10vh;
  color: #a0a2a5;
  font-size: 16px;
  font-weight: bold;
`;
const SubDiv = styled.div`
  border-radius: 10px;
  padding: 20px 40px 40px 40px;
  /* border: 1px solid #c4c4c4; */
  background-color: white;
  text-align: center;
`;
const StyledSpan2 = styled.p`
  width: fit-content;
  margin: 0;
  font-size: large;
  font-weight: 645;
`;
const FormDiv = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
  row-gap: 40px;
  column-gap: 20px;
  margin: 40px 90px 60px 90px;
`;
const ChildDiv = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  width: 100%;
  gap: 30px;
`;
const StyledSpan3 = styled.span`
  display: block;
  color: #666666;
  width: fit-content;
  position: absolute;
  transform: translateY(-35px);
`;
const TimeZoneDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  position: absolute;
  padding-top: 10px;
`;
const ToggleButton = styled.button`
  width: fit-content;
  z-index: 1;
  opacity: 0;
`;
const ToggleSpan = styled.span`
  position: absolute;
  transform: translateY(20px);
`;
const StyledSubmit = styled.button`
  display: block;
  background-color: #88dad8;
  width: 100px;
  height: 30px;
  font-size: medium;
  border: none;
  margin-left: auto;
  color: white;
  cursor: pointer;
`;
