import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { styled } from "styled-components";

function TableSection() {
  const columns = [
    { id: "slNo", name: "Sl. No" },
    { id: "firstName", name: "First Name" },
    { id: "lastName", name: "Last Name" },
    { id: "email", name: "Email Address" },
    { id: "department", name: "Department" },
    { id: "role", name: "Role" },
    { id: "team", name: "Team" },
    { id: "actions", name: "Actions" },
  ];

  const rows = [
    {
      slNo: "1",
      firstName: "Shiv",
      lastName: "Badiger",
      email: "shiv@gmail.com",
      department: "Development",
      role: "React Developer",
      team: "Integreon",
      actions: "E and D",
    },
    {
      slNo: "2",
      firstName: "Shiv",
      lastName: "Badiger",
      email: "shiv@gmail.com",
      department: "Development",
      role: "React Developer",
      team: "Integreon",
      actions: "E and D",
    },
    {
      slNo: "3",
      firstName: "Shiv",
      lastName: "Badiger",
      email: "shiv@gmail.com",
      department: "Testing",
      role: "React Developer",
      team: "Integreon",
      actions: "E and D",
    },
    {
      slNo: "4",
      firstName: "Shiv",
      lastName: "Badiger",
      email: "shiv@gmail.com",
      department: "Devops",
      role: "React Developer",
      team: "Integreon",
      actions: "E and D",
    },
    {
      slNo: "5",
      firstName: "Shiv",
      lastName: "Badiger",
      email: "shiv@gmail.com",
      department: "Devops",
      role: "React Developer",
      team: "Integreon",
      actions: "E and D",
    },
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <Paper sx={{ width: "100%" }}>
        <FilterDiv>
            <h3>Member List</h3>
            <div style={{display: "flex", height:"fit-content",gap:"20px" }}>
                <input type="search" placeholder="Serach from member list"/>
                <select>
                    <option>Name</option>
                    <option>Sl. No</option>
                    <option>Department</option>
                    <option>Role</option>
                </select>
            </div>
        </FilterDiv>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column) => {
                  return <TableCell sx={cellStyle} key={column.id}>{column.name}</TableCell>;
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, i) => (
                <TableRow key={i}>
                  {columns.map((column) => (
                    <TableCell sx={cellStyle} key={column.id}>{row[column.id]}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}

export default TableSection;

const cellStyle = {
    padding: "8px"
}
const FilterDiv = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: aqua;
    color: white;
    align-items: center;
    height: 40px;
    padding: 0 20px;
`