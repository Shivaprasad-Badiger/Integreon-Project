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
  const [dataSet, setDataSet] = useState([]);

  // edit section
  const [isEdit, setIsEdit] = useState(0);
  const [editableId, setEditableId] = useState(null);
  const [page, setPage] = useState(1);
  // optional chaining
  const columns = [
    {
      title: "Action",
      key: "action",
      render: (_, __, index) => (page - 1) * 4 + index + 1,
    },
    {
      dataIndex: "firstName",
      title: "First Name",
      key: "firstName",
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
    },
    { dataIndex: "lastName", title: "Last Name" },
    { dataIndex: "email", title: "Email Address" },
    { dataIndex: "dept", title: "Department" },
    { dataIndex: "role", title: "Role" },
    { dataIndex: "team", title: "Team" },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <StyledButton
            onClick={(e) => {
              e.preventDefault();
              setIsEdit(1);
              dataSet.forEach((data, index) => {
                if (data.email === record.email) {
                  setEditableId(index);
                }
              });
              setFunction(record);
            }}
          >
            <PencilSquare color="#88dad8" fontSize="20px" />
          </StyledButton>
          <StyledButton
            onClick={(e) => {
              e.preventDefault();
              dataSet.forEach((data, index) => {
                if (data.email === record.email) {
                  deleteItem(index);
                }
              });
            }}
          >
            <Trash color="#ff0000" fontSize="20px" />
          </StyledButton>
        </Space>
      ),
    },
  ];
  const deleteItem = (deleterIndex) => {
    const updatedItems = dataSet.filter((_, index) => index !== deleterIndex);
    setDataSet(updatedItems);
  };
  const [
    [slNo, setSlNo],
    [firstName, setfirstName],
    [lastName, setlastName],
    [email, setEmail],
    [dept, setDept],
    [role, setRole],
    [phNo, setPhNo],
    [team, setTeam],
  ] = [
    useState(0),
    useState(""),
    useState(""),
    useState(""),
    useState(""),
    useState(""),
    useState(""),
    useState(""),
  ];
  const setFunction = (setValues) => {
    setSlNo(slNo + 1);
    setfirstName(setValues.firstName);
    setlastName(setValues.lastName);
    setEmail(setValues.email);
    setDept(setValues.dept);
    setRole(setValues.role);
    setPhNo(setValues.phNo);
    setTeam(setValues.team);
  };

  let data = {
    slNo: slNo,
    firstName: firstName,
    lastName: lastName,
    email: email,
    dept: dept,
    role: role,
    phNo: phNo,
    team: team,
  };

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
            if (!isEdit) {
              setDataSet([...dataSet, data]);
              setFunction({
                slNo: slNo + 1,
                firstName: "",
                lastName: "",
                email: "",
                dept: "",
                role: "",
                phNo: "91",
                team: "",
              });
            } else {
              const tempObject = {
                slNo: slNo,
                firstName: firstName,
                lastName: lastName,
                email: email,
                dept: dept,
                role: role,
                phNo: phNo,
                team: team,
              };
              const tempDataSet = [...dataSet];
              tempDataSet[editableId] = tempObject;
              setDataSet(tempDataSet);
              setFunction({
                slNo: slNo,
                firstName: "",
                lastName: "",
                email: "",
                dept: "",
                role: "",
                phNo: "91",
                team: "",
              });
              setIsEdit(!isEdit);
            }
          }}
        >
          <InputField
            label={"First Name"}
            value={firstName}
            setFunction={setfirstName}
          />
          <InputField
            label={"Last Name"}
            value={lastName}
            setFunction={setlastName}
          />
          <InputField
            label={"Email"}
            value={email}
            setFunction={setEmail}
            type={"email"}
          />
          <DropdownElement
            label={"Department/BU"}
            arr={Department}
            value={dept}
            setFunction={setDept}
          />
          <DropdownElement
            label={"Role"}
            arr={Department}
            value={role}
            setFunction={setRole}
          />
          <StyledPhoneNumber phNo={phNo} setPhNo={setPhNo} />
          <DropdownElement
            label={"Team Name"}
            arr={Department}
            value={team}
            setFunction={setTeam}
          />
        </FormDiv>
        <StyledSubmit type="submit" form="myForm">
          {isEdit ? "Edit Member" : "Add Member"}
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

          <TableSection send={dataSet} columns={columns} setPage={setPage} />
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
