import React from "react";
import styled from "styled-components";
import { Box, TextField } from "@mui/material";

function InputField({ label, value, setFunction}) {
  return (
    <Box sx={{ width: "100%" }}>
      <StyledTextField
        label={label}
        fullWidth
        size= "small"
        value={value}
        onChange={(e) => {
          setFunction(e.target.value);
        }}
        required
      ></StyledTextField>
    </Box>
  );
}

export default InputField;

const StyledTextField = styled(TextField)`
  text-align: left;
`;
