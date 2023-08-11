import React from "react";
import { Table } from "antd";

const TableSection = ({send, columns}) => {
  return (
    <Table
      size="small"
      pagination={{
        defaultPageSize: 4,
        style: {
          margin: "5px",
        },
      }}
      columns={columns}
      dataSource={send} 
    />
  );
};

export default TableSection;

