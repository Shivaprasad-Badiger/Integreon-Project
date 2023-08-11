import React, { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";

function DropdownElement({ label, arr , setFunction}) {
  const [element, setElement] = useState("");
  const handleChange = (e) => {
    setElement(e.target.value);
    setFunction(arr[e.target.value]);
  };
  return (
    <Box sx={{width: "100%"}}>
      <TextField
        label={label}
        value={element}
        onChange={(e) => handleChange(e)}
        style={{ textAlign: "left" }}
        fullWidth
        size="small"
        select
        // required
      >
        {arr.map((ele, id) => (
          <MenuItem value={id}>{ele}</MenuItem>
        ))}
      </TextField>
    </Box>
  );
}

export default DropdownElement;
