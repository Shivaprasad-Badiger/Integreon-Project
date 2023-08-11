import React from "react";
import { styled } from "styled-components";
import InputField from "./InputField";
import DropdownElement from "./DropdownElement";
import StyledPhoneNumber from "./StyledPhoneNumber";
import TableSection from "./TableSection";
import { Select } from "antd";
import { Option } from "antd/es/mentions";
import { Paper } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { Space } from "antd";
import { PencilSquare, Trash } from "react-bootstrap-icons";
import { useState } from "react";

function AddMember() {
  let Department = ["Human Resource", "Developement", "Testing", "Devops"];

  // Table
  const columns = [
    { dataIndex: "slNo", title: "Sl. No" },
    {
      dataIndex: "firstName",
      title: "First Name",
      key: "firstName",
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
    },
    { dataIndex: "lastName", title: "Last Name" },
    { dataIndex: "email", title: "Email Address" },
    { dataIndex: "department", title: "Department" },
    { dataIndex: "role", title: "Role" },
    { dataIndex: "team", title: "Team" },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <StyledButton>
            <PencilSquare color="#88dad8" fontSize="20px" />
          </StyledButton>
          <StyledButton>
            <Trash color="#ff0000" fontSize="20px" />
          </StyledButton>
        </Space>
      ),
    },
  ];

  const [
    [firstName, setfirstName],
    [lastName, setlastName],
    [email, setEmail],
    [dept, setDept],
    [role, setRole],
    [team, setTeam],
  ] = [
    useState(""),
    useState(""),
    useState(""),
    useState(""),
    useState(""),
    useState(""),
  ];
 
  let data = {
    slNo: "1",
    firstName: firstName,
    lastName: lastName,
    email: email,
    department: dept,
    role: role,
    team: team,
  };
  const [dataSet, setDataSet] = useState([]);

  return (
    <MainDiv>
      <span>Team Management</span>
      <span> &nbsp;&nbsp;{">"}&nbsp;&nbsp; </span>
      <span>Add Member</span>

      <SubDiv>
        <StyledSpan>Add Member</StyledSpan>
        <hr />
        <FormDiv
          id="myForm"
          onSubmit={(e) => {
            e.preventDefault();
            setDataSet([...dataSet, data]);
          }}
        >
          <InputField label={"First Name"} setFunction={setfirstName} />
          <InputField label={"Last Name"} setFunction={setlastName} />
          <InputField label={"Email"} setFunction={setEmail} />
          <DropdownElement
            label={"Department/BU"}
            arr={Department}
            setFunction={setDept}
          />
          <DropdownElement
            label={"Role"}
            arr={Department}
            setFunction={setRole}
          />
          <StyledPhoneNumber />
          <DropdownElement
            label={"Team Name"}
            arr={Department}
            setFunction={setTeam}
          />
        </FormDiv>
        <StyledSubmit type="submit" form="myForm">
          Add Member
        </StyledSubmit>

        <hr style={{ margin: "15px 0" }} />
        <div style={{ margin: "0 40px" }}>
          <TableHeader>
            <StyledSpan2>Member List</StyledSpan2>
            <SerachDiv>
              <Paper component="form" sx={paperStyle}>
                <SearchIcon
                  sx={{ color: "white", padding: "2px 10px", fontSize: "16px" }}
                />
                <InputBase
                  placeholder="Search from members list"
                  sx={{
                    color: "white",
                    fontSize: "14px",
                    height: "fit-content",
                    width: "200px",
                    "& .MuiInputBase-input": {
                      padding: "0",
                    },
                    "& input::placeholder": {
                      color: "white",
                      opacity: "0.8",
                    },
                  }}
                />
              </Paper>

              <div>
                {/* Actual Select */}
                <Select
                  placeholder="Sort By"
                  size="small"
                  style={{
                    width: "100px",
                    fontSize: "5px",
                    position: "absolute",
                    transform: "translateY(5px)",
                    opacity: "0",
                    zIndex: "1",
                  }}
                >
                  <Option value="1">Name</Option>
                  <Option value="2">Position</Option>
                  <Option value="3">Department</Option>
                </Select>

                {/* Display Select */}
                <Paper component="form" sx={paperStyle}>
                  <IconButton
                    type="button"
                    sx={{
                      p: "5px 5px",
                      margin: "0",
                      fontSize: "14px",
                      borderRadius: "50px",
                      width: "90px",
                      height: "20px",
                    }}
                  >
                    <span style={{ color: "white" }}>Sort By</span>
                    <FilterAltOutlinedIcon
                      sx={{ color: "white", fontSize: "20px", padding: "0" }}
                    />
                  </IconButton>
                </Paper>
              </div>
            </SerachDiv>
          </TableHeader>

          <TableSection send={dataSet} columns={columns} />
        </div>
      </SubDiv>
    </MainDiv>
  );
}

export default AddMember;

const MainDiv = styled.div`
  margin-left: 4.5%;
  height: 90vh;
  background-color: #f9f8fd;
`;
const SubDiv = styled.div`
  margin: 10px;
  padding: 10px;
  background-color: white;
`;
const StyledSpan = styled.span`
  font-size: 1.3em;
  color: #88dad8;
  font-weight: bold;
  margin-left: 10px;
`;

const StyledSpan2 = styled.span`
  font-size: 1.3em;
  color: white;
  font-weight: 500;
`;
const SerachDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const FormDiv = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  row-gap: 30px;
  column-gap: 20px;
  margin: 20px 40px 0 40px;
`;
const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background-color: #88dad8;
  height: 40px;
`;
const StyledSubmit = styled.button`
  display: block;
  background-color: #88dad8;
  width: fit-content;
  padding: 10px 30px;
  font-size: medium;
  border: none;
  margin-left: auto;
  margin-right: 40px;
  color: white;
  cursor: pointer;
`;
const paperStyle = {
  display: "flex",
  backgroundColor: "transparent",
  alignItems: "center",
  justifyContent: "center",
  border: "2px solid white",
  borderRadius: "50px",
  width: "100%",
  height: "25px",
  boxShadow: "0",
};
const StyledButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  height: 25px;
`;
