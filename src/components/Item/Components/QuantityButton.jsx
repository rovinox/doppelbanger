import React from "react";
import plus from "../Pictures/icon-plus.svg";
import minus from "../Pictures/icon-minus.svg";
import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const QuantityButton = ({ onQuant, onRemove, onAdd }) => {
  return (
    <div className="amount">
      <Button
        onClick={onRemove}
        disabled={onQuant === 0}
        variant="contained"
        color="error"
      >
        <RemoveIcon />
      </Button>
      {/* <button className="minus" onClick={onRemove} disabled={onQuant === 0}>
        <img src={minus} alt="icon-minus" />
      </button> */}
      <p>{onQuant}</p>
      {/* <button className="plus" onClick={onAdd} disabled={onQuant === 100}>
        <img src={plus} alt="icon-plus" />
      </button> */}
      <Button
        onClick={onAdd}
        disabled={onQuant === 100}
        variant="contained"
        color="error"
      >
        <AddIcon />
      </Button>
    </div>
  );
};

export default QuantityButton;
