import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

import QuantityButton from "./QuantityButton";
import { Typography } from "@mui/material";

export default function ResponsiveStack({ group, onQuant, onAdd, onRemove }) {
  return (
    <Stack
      //direction={{ xs: "column", sm: "row" }}
      direction="row"
      spacing={{ xs: 1, sm: 1, md: 1 }}
      sx={{
        // flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "baseline",
      }}
      // direction="row"
      // spacing={2}
      // sx={{
      //   justifyContent: "flex-start",
      //   alignItems: "flex-start",
      //   flexWrap: "wrap",
      // }}
    >
      {group.map((item) => (
        <Paper
          key={item.itemGuid}
          sx={{
            p: 2,
            minWidth: 200,
            background: item.selected ? " #282c34" : "#e3dfdfab",
          }}
        >
          <Typography sx={{ color: item.selected ? "white" : "", p: 1 }}>
            {item.name}
          </Typography>
          <QuantityButton
            isModifier={true}
            onQuant={onQuant}
            onRemove={onRemove}
            onAdd={onAdd}
          />
        </Paper>
      ))}
    </Stack>
  );
}
