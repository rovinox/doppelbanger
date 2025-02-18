import React from "react";
import plus from "../Pictures/icon-plus.svg";
import minus from "../Pictures/icon-minus.svg";
import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

const QuantityButton = ({
  quantity,
  onRemove,
  onAdd,
  modifierIndex,
  height,
}) => {
  if (quantity === 0) return null;
  return (
    <Box
      sx={{
        background: "#282c34",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: height ?? 30,
        borderRadius: 30,
      }}
    >
      <IconButton
        onClick={(event) => {
          onRemove(event, modifierIndex);
        }}
        disabled={quantity === 0}
        variant="contained"
        color="error"
        aria-label="delete"
      >
        <RemoveIcon />
      </IconButton>
      <Typography sx={{ color: "white" }}>{quantity}</Typography>
      <IconButton
        onClick={(event) => {
          onAdd(event, modifierIndex);
        }}
        disabled={quantity === 100}
        variant="contained"
        color="error"
        aria-label="delete"
      >
        <AddIcon />
      </IconButton>
    </Box>
  );
};

export default QuantityButton;
