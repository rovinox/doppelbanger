import { useState } from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";
import QuantityButton from "./QuantityButton";
import { Typography, Box } from "@mui/material";

export default function ModifierGroupsItems({
  modifiers,
  setModifierGroups,
  modifierGroupIndex,
  modifierGroups,
  maxSelections,
}) {
  const addQuant = (event, modifierIndex) => {
    event.preventDefault();
    event.stopPropagation();
    const newModifierGroups = [...modifierGroups];
    const currentQuantity =
      newModifierGroups[modifierGroupIndex].modifiers[modifierIndex]
        ?.quantity ?? 0;
    newModifierGroups[modifierGroupIndex].modifiers[modifierIndex].quantity =
      currentQuantity + 1;
    setModifierGroups(newModifierGroups);
  };

  const removeQuant = (event, modifierIndex) => {
    event.preventDefault();
    event.stopPropagation();

    const newModifierGroups = [...modifierGroups];
    const currentQuantity =
      newModifierGroups[modifierGroupIndex].modifiers[modifierIndex]
        ?.quantity ?? 0;
    newModifierGroups[modifierGroupIndex].modifiers[modifierIndex].quantity =
      currentQuantity - 1;
    setModifierGroups(newModifierGroups);
  };

  const handleModifierSelection = ({ item, modifierIndex, event }) => {
    const newModifierGroups = [...modifierGroups];
    console.log(
      " newModifierGroups[modifierGroupIndex].modifiers[modifierIndex]",
      newModifierGroups[modifierGroupIndex].modifiers[modifierIndex]
    );
    newModifierGroups[modifierGroupIndex].modifiers = newModifierGroups[
      modifierGroupIndex
    ].modifiers.map((item, index) => {
      if (modifierIndex === index && !item.selected) {
        return { ...item, selected: true };
      } else if (modifierIndex === index && item.selected) {
        if (maxSelections === 1) {
          return { ...item, selected: false };
        } else {
          return item;
        }
      } else {
        return item;
      }
    });
    setModifierGroups(newModifierGroups);
  };
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {modifiers.map((item, modifierIndex) => (
        <Grid item xs={2} sm={4} md={4} key={item.itemGuid}>
          <Paper
            key={item.itemGuid}
            sx={{
              p: 1,
              minWidth: 100,
              background:
                item.isDefault || item?.quantity > 0 || item.selected
                  ? " #282c34"
                  : "#e3dfdfab",
              borderRadius: 5,
            }}
            onClick={(event) => {
              handleModifierSelection({ item, modifierIndex, event });
            }}
          >
            {item.price !== 0 ? (
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  sx={{
                    color:
                      item.isDefault || item?.quantity > 0 || item.selected
                        ? "white"
                        : "",
                  }}
                >
                  {item.name}
                </Typography>
                <Typography
                  sx={{
                    color:
                      item.isDefault || item?.quantity > 0 || item.selected
                        ? "white"
                        : "",
                  }}
                >
                  $ {item.price}
                </Typography>
              </Box>
            ) : (
              <Typography
                sx={{
                  color:
                    item.isDefault || item?.quantity > 0 || item.selected
                      ? "white"
                      : "",
                }}
              >
                {item.name}
              </Typography>
            )}

            {maxSelections !== 1 && (
              <QuantityButton
                modifierIndex={modifierIndex}
                onRemove={removeQuant}
                onAdd={addQuant}
                quantity={item?.quantity ?? 0}
              />
            )}
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
