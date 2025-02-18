import { useState } from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";
import ModifierGroupsItems from "./ModifierGroupsItems";

export default function ModifierGroups({ modifierGroups, setModifierGroups }) {
  return (
    <Box>
      {modifierGroups.map((group, modifierGroupIndex) => (
        <Box key={group.guid} sx={{ p: 2 }}>
          <Typography sx={{ p: 2 }} variant="h4" component="h1">
            {group.name}
          </Typography>

          <ModifierGroupsItems
            {...group}
            modifierGroupIndex={modifierGroupIndex}
            modifiers={group.modifiers}
            modifierGroups={modifierGroups}
            setModifierGroups={setModifierGroups}
          />
        </Box>
      ))}
    </Box>
  );
}
