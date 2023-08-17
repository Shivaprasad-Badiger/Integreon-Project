import { styled } from "styled-components";
import InputField from "./InputField";
import DropdownElement from "./DropdownElement";
import StyledPhoneNumber from "./StyledPhoneNumber";
import TableSection from "./TableSection";
import { Select } from "antd";
import { Paper } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { Space } from "antd";
import { PencilSquare, Trash } from "react-bootstrap-icons";
import { useEffect, useState } from "react";

function AddMember() {
  let DepartmentArr = ["Testing", "Developement", "Design", "Human Resource"];
  let RoleArr = ["Frontend Dev", "Backend Dev", "Testing", "Design"];
  let TeamArr = ["Team A", "Team B", "Team C", "Team D"];
  // Table
  const [dataSet, setDataSet] = useState([]);

  // EDIT BUTTON ~~OPTIONAL CHAINING
  const [isEdit, setIsEdit] = useState(0);
  const [editableId, setEditableId] = useState(null);
  const [page, setPage] = useState(1);

  // DELETE BUTTON
  const deleteItem = (deleterIndex) => {
    const updatedItems = dataSet.filter((_, index) => index !== deleterIndex);
    setDataSet(updatedItems);
  };

  // SORT BY
  const [sortOrder, setSortOrder] = useState({})
  const handleSort = (value) => {
    setSortOrder({
      order: 'ascend',
      columnKey: value,
    });
  };

  // Search Bar
  const [searchDataSet, setSearchDataSet] = useState([])
  const [searchInput, setSerachInput] = useState('');
  const handleSearch = (e) => {
    setSerachInput(e.target.value);
  }
  useEffect(() => {
    setSearchDataSet(
      // dataSet.filter((data) => {
      //     return (
      //       data.firstName.toLowerCase().startsWith(searchInput.toLowerCase()) ||
      //       data.lastName.toLowerCase().startsWith(searchInput.toLowerCase()) ||
      //       data.email.toLowerCase().startsWith(searchInput.toLowerCase()) ||
      //       data.dept.toLowerCase().startsWith(searchInput.toLowerCase()) ||
      //       data.role.toLowerCase().startsWith(searchInput.toLowerCase()) ||
      //       data.team.toLowerCase().startsWith(searchInput.toLowerCase())
      //     )
      // })
      
      dataSet.filter(item =>
        ['firstName', 'role', 'team', 'dept'].some(prop =>
          item[prop].toLowerCase().startsWith(searchInput.toLowerCase())
        )
      )
    )
  }, [searchInput, dataSet])

  // TABLE DATA
  const columns = [
    {
      title: "Sl. No",
      key: "slNo",
      render: (_, __, index) => (page - 1) * 4 + index + 1,
    },
    {
      dataIndex: "firstName",
      title: "First Name",
      key: "firstName",
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
      sortOrder: sortOrder.columnKey === 'firstName' ? sortOrder.order : null,
    },
    { dataIndex: "lastName", title: "Last Name" },
    { dataIndex: "email", title: "Email Address" },
    {
      dataIndex: "dept",
      title: "Department",
      key: "dept",
      sorter: (a, b) => a.dept.localeCompare(b.dept),
      sortOrder: sortOrder.columnKey === 'dept' ? sortOrder.order : null,
    },
    {
      dataIndex: "role",
      title: "Role",
      key: "role",
      sorter: (a, b) => a.role.localeCompare(b.role),
      sortOrder: sortOrder.columnKey === 'role' ? sortOrder.order : null,
    },
    {
      dataIndex: "team",
      title: "Team",
      key: "team",
      sorter: (a, b) => a.team.localeCompare(b.team),
      sortOrder: sortOrder.columnKey === 'team' ? sortOrder.order : null,
    },
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
              datasetFunction(record);
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
  const [
    [firstName, setfirstName],
    [lastName, setlastName],
    [email, setEmail],
    [dept, setDept],
    [role, setRole],
    [phNo, setPhNo],
    [team, setTeam],
  ] = [
      useState(""),
      useState(""),
      useState(""),
      useState(""),
      useState(""),
      useState(""),
      useState(""),
    ];
  const datasetFunction = (setValues) => {
    setfirstName(setValues.firstName);
    setlastName(setValues.lastName);
    setEmail(setValues.email);
    setDept(setValues.dept);
    setRole(setValues.role);
    setPhNo(setValues.phNo);
    setTeam(setValues.team);
  };

  let data = {
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
              datasetFunction({
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
              datasetFunction({
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
            arr={DepartmentArr}
            value={dept}
            setFunction={setDept}
          />
          <DropdownElement
            label={"Role"}
            arr={RoleArr}
            value={role}
            setFunction={setRole}
          />
          <StyledPhoneNumber phNo={phNo} setPhNo={setPhNo} />
          <DropdownElement
            label={"Team Name"}
            arr={TeamArr}
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
                  onChange={(e) => handleSearch(e)}
                />
              </Paper>

              <div>
                {/* ACTUAL SELECT */}
                <Select
                  defaultValue="Sort By"
                  style={{
                    width: "95px",
                    fontSize: "5px",
                    position: "absolute",
                    opacity: "0",
                    zIndex: "1",
                  }}
                  value={null}
                  onChange={handleSort}
                  options={[
                    {
                      value: 'firstName',
                      label: 'Name',
                    },
                    {
                      value: 'dept',
                      label: 'Department',
                    },
                    {
                      value: 'role',
                      label: 'Role',
                    },
                    {
                      value: 'team',
                      label: 'Team',
                    }
                  ]}
                />

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

          <TableSection send={(searchDataSet) ? searchDataSet : dataSet} columns={columns} setPage={setPage} />
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
