import * as React from "react";

import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import { Divider, Typography } from "@mui/material";
import MuiToggleButton from "@mui/material/ToggleButton";
import { styled } from "@mui/material/styles";
const ToggleButton = styled(MuiToggleButton)({
  "&.Mui-selected, &.Mui-selected:hover": {
    color: "white",
    backgroundColor: "#282c34",
  },
  "&:hover": {
    backgroundColor: "white",
    color: "black",
  },
});

export default function ServiceTypeSelectorButtons({
  handleServiceType,
  serviceType,
  divider,
}) {
  return (
    <>
      <ToggleButtonGroup
        value={serviceType}
        color="primary"
        exclusive
        onChange={handleServiceType}
        aria-label="text alignment"
        sx={{ color: "white" }}
      >
        <ToggleButton sx={{ backgroundColor: "white" }} value="left">
          <LocalShippingIcon fontSize="large" />{" "}
          <Typography sx={{ ml: 1 }} variant="h6">
            Delivery ( 30-40) Min
          </Typography>
        </ToggleButton>
        {divider && (
          <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
        )}
        <ToggleButton sx={{ backgroundColor: "white" }} value="center">
          <DirectionsRunIcon fontSize="large" />
          <Typography sx={{ ml: 1 }} variant="h6">
            Pick up (10-20) Min{" "}
          </Typography>
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}
