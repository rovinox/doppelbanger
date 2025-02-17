import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

import QuantityButton from "./QuantityButton";

export default function ResponsiveStack({ group, onQuant, onAdd, onRemove }) {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 1, sm: 1, md: 1 }}
    >
      {group.map((item) => (
        <Paper
          key={item.itemGuid}
          sx={{
            p: 2,

            background: item.selected ? "#e3dfdfab" : "none",
          }}
        >
          {item.name}
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
