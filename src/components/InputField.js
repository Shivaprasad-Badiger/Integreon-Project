import React, { useState } from "react";
import styled from "styled-components";
import { Box, TextField } from "@mui/material";

function InputField({ label, value, setFunction, type }) {
  const [inputValue, setInputValue] = useState("");
  return (
    <Box sx={{ width: "100%" }}>
      <StyledTextField
        label={label}
        fullWidth
        size="small"
        type={type}
        value={(value) ? value : inputValue}
        onChange={(e) => {
          (setFunction) ? setFunction(e.target.value) : setInputValue(e.target.value);
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
