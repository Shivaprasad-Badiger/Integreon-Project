// import React from "react";
// import { Select } from "antd";
// import { Option } from "antd/es/mentions";
// import { Paper } from "@mui/material";
// import IconButton from "@mui/material/IconButton";
// import SearchIcon from "@mui/icons-material/Search";
// import { InputBase } from "@mui/material";
// import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

// function TableHeader() {
//   return (
//     <div>
//       <TableHeader>
//         <span style={{ fontSize: "1.3em", color: "white", fontWeight: "500" }}>
//           Member List
//         </span>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             gap: "20px",
//           }}
//         >
//           <Paper component="form" sx={paperStyle}>
//             <SearchIcon
//               sx={{ color: "white", padding: "2px 10px", fontSize: "16px" }}
//             />
//             <InputBase
//               placeholder="Search from members list"
//               sx={{
//                 color: "white",
//                 fontSize: "14px",
//                 height: "fit-content",
//                 width: "200px",
//                 "& .MuiInputBase-input": {
//                   padding: "0",
//                 },
//                 "& input::placeholder": {
//                   color: "white",
//                   opacity: "0.8",
//                 },
//               }}
//             />
//           </Paper>

//           <div>
//             <Select
//               placeholder="Sort By"
//               size="small"
//               style={{
//                 width: "100px",
//                 fontSize: "5px",
//                 position: "absolute",
//                 opacity: "0",
//                 zIndex: "1",
//               }}
//             >
//               <Option value="1">Name</Option>
//               <Option value="2">Position</Option>
//               <Option value="3">Department</Option>
//             </Select>
//             <Paper component="form" sx={paperStyle}>
//               <IconButton
//                 type="button"
//                 sx={{
//                   p: "5px 5px",
//                   margin: "0",
//                   fontSize: "14px",
//                   borderRadius: "50px",
//                   width: "90px",
//                   height: "20px",
//                 }}
//               >
//                 <span style={{ color: "white" }}>Sort By</span>
//                 <FilterAltOutlinedIcon
//                   sx={{ color: "white", fontSize: "20px", padding: "0" }}
//                 />
//               </IconButton>
//             </Paper>
//           </div>
//         </div>
//       </TableHeader>
//     </div>
//   );
// }

// export default TableHeader;

// const paperStyle = {
//   display: "flex",
//   backgroundColor: "transparent",
//   alignItems: "center",
//   justifyContent: "center",
//   border: "2px solid white",
//   borderRadius: "50px",
//   width: "100%",
//   height: "25px",
//   boxShadow: "0",
// };
