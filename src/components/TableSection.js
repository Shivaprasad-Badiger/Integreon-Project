import React from "react";
import { Table } from "antd";

const TableSection = ({ data, columns, setPage }) => {
  return (
    <Table
      size="small"
      pagination={{
        onChange(current) {
          setPage(current);
        },
        defaultPageSize: 4,
        style: {
          margin: "5px",
        },
      }}
      columns={columns}
      dataSource={data}
    />
  );
};

export default TableSection;
