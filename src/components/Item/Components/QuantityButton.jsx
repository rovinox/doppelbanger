import React from "react";
import plus from "../Pictures/icon-plus.svg";
import minus from "../Pictures/icon-minus.svg";
import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

const QuantityButton = ({ onQuant, onRemove, onAdd, isModifier }) => {
  return (
    <Box
      sx={{
        background: "#282c34",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: 30,
        borderRadius: 30,
      }}
    >
      <IconButton
        onClick={onRemove}
        disabled={onQuant === 0}
        variant="contained"
        color="error"
        aria-label="delete"
      >
        <RemoveIcon />
      </IconButton>
      <Typography sx={{ color: "white" }}>{onQuant}</Typography>
      <IconButton
        onClick={onAdd}
        disabled={onQuant === 100}
        variant="contained"
        color="error"
        aria-label="delete"
      >
        <AddIcon />
      </IconButton>
    </Box>

    // <Stack
    //   sx={{ background: "#282c34", borderRadius: 20, height: 30 }}
    //   s
    //   direction="row"
    //   spacing={0}
    // >
    //   <IconButton
    //     onClick={onRemove}
    //     disabled={onQuant === 0}
    //     variant="contained"
    //     color="error"
    //     aria-label="delete"
    //   >
    //     <RemoveIcon />
    //   </IconButton>
    //   <Typography sx={{ mt: 1 }}>{onQuant}</Typography>
    //   <IconButton
    //     onClick={onAdd}
    //     disabled={onQuant === 100}
    //     variant="contained"
    //     color="error"
    //     aria-label="delete"
    //   >
    //     <AddIcon />
    //   </IconButton>
    // </Stack>
    // <div className="amount">
    //   <IconButton
    //     onClick={onRemove}
    //     disabled={onQuant === 0}
    //     variant="contained"
    //     color="error"
    //     aria-label="delete"
    //   >
    //     <RemoveIcon />
    //   </IconButton>

    //   <p>{onQuant}</p>

    //   <IconButton
    //     onClick={onAdd}
    //     disabled={onQuant === 100}
    //     variant="contained"
    //     color="error"
    //     aria-label="delete"
    //   >
    //     <AddIcon />
    //   </IconButton>
    // </div>
  );
};

export default QuantityButton;
