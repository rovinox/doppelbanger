import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function TextFieldArea() {
  return (
    <div style={{ padding: " 10px 50px" }}>
      {" "}
      <TextField
        id="outlined-textarea"
        label="Special Instructions"
        placeholder="We'll do our best to accommodate special requests but may not be able to honor all substitutes. Extra charges may apply."
        multiline
        rows={4}
        fullWidth
      />
    </div>
  );
}
