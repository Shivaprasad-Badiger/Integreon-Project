import React from "react";
import DonutComponent1 from "./dashBoardComps/DonutComponent1";
import { styled } from "styled-components";
import TableSection from "./TableSection";
import ColumnChart from "./dashBoardComps/ColumnChart";
import DonutComponent2 from "./dashBoardComps/DonutComponent2";
import DonutComponent3 from "./dashBoardComps/DonutComponent3";
import TuneIcon from '@mui/icons-material/Tune';

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
    <div
      style={{ marginLeft: "4%", backgroundColor: "#f5f5f5", height: '89vh'}}
    >
      <p style={{margin: '5px 20px', color: '#9fa1a2', fontSize: '14px'}}> Dahboard&nbsp; &gt; &nbsp;  Overview </p>
      <DonutChartDiv>
        <DonutComponent1 />
        <DonutComponent2 />
        <DonutComponent2 />
        <DonutComponent1 />
      </DonutChartDiv>
      <MainDiv style={{ display: "flex", gap: "20px" }}>
        <LeftDiv>
          <StyledHeader>
            <ButtonDiv1>
              <StyledButton>1W</StyledButton>
              <StyledButton>1M</StyledButton>
              <StyledButton>6M</StyledButton>
              <StyledButton>1Y</StyledButton>
            </ButtonDiv1>
            <ButtonDiv2>
              <StyledButton2>Total Requests</StyledButton2>
              <StyledButton2>E-Receipts</StyledButton2>
              <StyledButton2>E-Approvals</StyledButton2>
            </ButtonDiv2>
            <div>
              <StyledButton><TuneIcon fontSize="small"/> &nbsp; &nbsp; FilterBy</StyledButton>
            </div>
          </StyledHeader>
          <TableSection columns={columns} />
        </LeftDiv>
        <RightDiv>
          <ColumnChart />
          <DonutComponent3 />
        </RightDiv>
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
  height: fit-content;
`;
const MainDiv = styled.div`
  margin: 20px;
`;
const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const StyledButton = styled.button`
  background-color: white;
  border: 1px solid #d5d5d5;
  width: fit-content;
  display: flex;
  align-items: center;
`;

const StyledButton2 = styled.button`
  border: none;
  padding: 0 10px;
  &:hover {
    background-color: white;
    border-radius: 30px;
    height: 25px;
  }
`;
const ButtonDiv1 = styled.div`
  display: flex;
`;
const ButtonDiv2 = styled.div`
  background-color: #eaeaea;
  border: none;
  padding: 0 2.5px;
  border-radius: 30px;
  height: 30px;
  display: flex;
  align-items: center;
`;
const LeftDiv = styled.div`
  width: 70%;
`;
const RightDiv = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
