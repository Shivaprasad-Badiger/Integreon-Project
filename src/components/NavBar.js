import React from "react";
import styled from "styled-components";
import compLogo from "./image/icon-image.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CircleNotificationsOutlinedIcon from "@mui/icons-material/CircleNotificationsOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Select, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = ({ validate, handleValidate }) => {
  const IconStyling = {
    fontSize: "30px",
    color: "white",
    fontWeight: "lighter",
  };
  const Navigate = useNavigate();
  const logoutHandler = () => {
    Navigate("/");
    handleValidate(false);
    localStorage.setItem("validate", JSON.stringify(false));
  };
  const profileHandler = () =>{
    Navigate("/UserProfile")
  }

  return (
    <NavDiv>
      <Logo src={compLogo} alt="company logo" />
      {validate && (
        <MainDiv>
          <CircleNotificationsOutlinedIcon sx={IconStyling} />
          <ProfileIconDiv>
            <AccountCircleIcon sx={IconStyling} />
            <KeyboardArrowDownIcon
              style={{ color: "#88dad8", fontSize: "20px" }}
              sx={IconStyling}
            />
            <Select
              sx={{
                position: "absolute",
                width: "50px",
                height: "30px",
                opacity: "0",
              }}
            >
              <MenuItem
                onClick={(e) => {
                  e.preventDefault();
                  profileHandler();
                }}
                value={"profile"}
              >
                Profile
              </MenuItem>
              <MenuItem
                onClick={(e) => {
                  e.preventDefault();
                  logoutHandler();
                }}
                value={"logout"}
              >
                Logout
              </MenuItem>
            </Select>
          </ProfileIconDiv>
        </MainDiv>
      )}
    </NavDiv>
  );
};

export default Navbar;

const NavDiv = styled.div`
  background-color: #282f36d8;
  height: 10vh;
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  height: 39.65px;
  width: 130px;
  object-fit: contain;
  width: fit-content;
  display: block;
  padding-left: 1vw;
`;
const MainDiv = styled.div`
  display: flex;
  position: absolute;
  gap: 30px;
  height: 10vh;
  right: 10px;
  top: 0;
  align-items: center;
  cursor: pointer;
`;
const ProfileIconDiv = styled.div`
  display: flex;
  align-items: center;
`;
