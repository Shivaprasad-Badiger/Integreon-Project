import React from "react";
import DonutComponent1 from "./dashBoardComps/DonutComponent1";
import { styled } from "styled-components";
import TableSection from "./TableSection";
import ColumnChart from "./dashBoardComps/ColumnChart";
import { Border } from "react-bootstrap-icons";

function DashBoard() {
  const columns = [
    {
      title: "Request No",
      key: "rqNo",
    },
    {
      title: "Request Type",
      key: "rqType",
    },
    {
      title: "Date",
      key: "date",
    },
    {
      title: "Petitioner",
      key: "petitioner",
    },
    {
      title: "Benificiary",
      key: "benificiary",
    },
    {
      title: "Status",
      key: "status",
    },
  ];
  return (
    <div style={{ marginLeft: "4%", backgroundColor: '#fafafa', height: '90vh' }}>
      <span> Dahboard Overview </span>
      <DonutChartDiv>
        <DonutComponent1 />
        <DonutComponent1 />
        <DonutComponent1 />
        <DonutComponent1 />
      </DonutChartDiv>
      <MainDiv style={{ display: "flex", gap: "20px" }}>
        <div style={{ width: "70%" }}>
          <header style={{ display: "flex", justifyContent: "space-between", marginBottom: '10px' }}>
            <div>
              <StyledButton>1W</StyledButton>
              <StyledButton>1M</StyledButton>
              <StyledButton>6M</StyledButton>
              <StyledButton>1Y</StyledButton>
            </div>
            <div style={{
              backgroundColor: '#f0f0f0',
              border: 'none',
              padding: '0 10px',
              borderRadius: '30px',
              height: '20px'
            }}>
              <StyledButton2>Total Requests</StyledButton2>
              <StyledButton2>E-Receipts</StyledButton2>
              <StyledButton2>E-Approvals</StyledButton2>
            </div>
            <div>
              <StyledButton>♟️FilterBy</StyledButton>
            </div>
          </header>
          <TableSection columns={columns} />
        </div>
        <div
          style={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <ColumnChart />
          <DonutComponent1 />
        </div>
      </MainDiv>
    </div>
  );
}

export default DashBoard;

const DonutChartDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 15vh);
  column-gap: 70px;
  margin: 0 20px;
`;
const MainDiv = styled.div`
  margin: 20px 20px;
`;
const StyledButton = styled.button`
background-color: white;
border: none;
padding: 2px;
margin: 2px;
`;

const StyledButton2 = styled.button`
  border: none;
  padding: 0 10px;
  &:hover{
    background-color: white;
    border-radius: 30px;
  }
`;
