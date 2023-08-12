import React, { useEffect, useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";

function DropdownElement({ label, arr, value, setFunction }) {
  const [element, setElement] = useState(null);
  useEffect(() => {
    value && value === "" ? setElement("") : setElement(arr.indexOf(value));
  }, [value]);
  const handleChange = (e) => {
    setElement(e.target.value);
    setFunction && setFunction(arr[e.target.value]);
  };
  return (
    <Box sx={{ width: "100%" }}>
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
