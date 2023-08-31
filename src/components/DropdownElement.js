import React, { useEffect, useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";

function DropdownElement({ label, arr, value, setFunction }) {
  const [element, setElement] = useState("");
  useEffect(() => {
    setElement(value ? arr.indexOf(value) : "");
  }, [arr, value]);
  const handleChange = (e) => {
    const selectedIndex = e.target.value;
    console.log(selectedIndex);
    setElement(selectedIndex);
    if (setFunction && selectedIndex >= 0 && selectedIndex < arr.length) {
      setFunction(arr[selectedIndex])
    }
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
      required
      >
        {arr.map((ele, id) => (
          <MenuItem value={id}>{ele}</MenuItem>
        ))}
      </TextField>
    </Box>
  );
}

export default DropdownElement;
