import React from "react";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import styled from "styled-components";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import { Link } from "react-router-dom";

const SideBar = ({ validate }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [width, setWidth] = useState("4%");
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    setWidth(collapsed ? "15%" : "4%");
  };
  const NavArr = [
    {
      name: "Dashboard",
      path: "/DashBoard",
      icon: <DashboardOutlinedIcon sx={{ color: "white" }} />,
    },
    {
      name: "Add Member",
      path: "/AddMember",
      icon: <PersonAddAltOutlinedIcon sx={{ color: "white" }} />,
    },
  ];
  return (
    <div>
      {validate && (
        <Drawer
          sx={{
            "& .MuiDrawer-paper": {
              color: "white",
              backgroundColor: "#1c1c24",
              transition: "0.3s",
              width: width,
              boxSizing: "border-box",
              display: "block",
              // overflow: "hidden",
              height: "90vh",
              marginTop: "10vh",
            },
          }}
          variant="persistent"
          anchor="left"
          open={true}
        >
          <List>
            {NavArr.map((data) => (
              <ListItem disablePadding>
                <Link
                  to={data.path}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "10px",
                  }}
                >
                  <Button>
                    {data.icon}
                    {!collapsed && <StyledSpan>{data.name}</StyledSpan>}
                  </Button>
                </Link>
              </ListItem>
            ))}
          </List>
          <DrawerHeader>
            <IconButton onClick={toggleCollapsed}>
              {collapsed ? (
                <KeyboardDoubleArrowRightIcon sx={{ color: "white" }} />
              ) : (
                <KeyboardDoubleArrowLeftIcon sx={{ color: "white" }} />
              )}
            </IconButton>
          </DrawerHeader>
        </Drawer>
      )}
    </div>
  );
};

export default SideBar;

const DrawerHeader = styled.div`
  position: absolute;
  width: fit-content;
  right: 0;
  bottom: 50px;
  background-color: #3a364d;
`;
const Button = styled.button`
  display: flex;
  background: none;
  border: none;
  width: 100%;
  height: 20px;
  color: white;
  gap: 30px;
  align-items: center;
`;
const StyledSpan = styled.span`
  font-size: 16px;
`;
