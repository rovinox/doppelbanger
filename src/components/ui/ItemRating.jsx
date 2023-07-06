import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function ItemRating({ rating }) {
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Typography component="legend">275 Reviews</Typography>
      <Rating name="disabled" readOnly value={rating} />
    </Box>
  );
}
