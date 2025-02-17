import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function ScrollableTabsButtonForce() {
  const [value, setValue] = React.useState(0);
  const menuGroup = [
    "CHICKEN & BEEF PLATTERS",
    "SEAFOOD PLATTERS",
    "SANDWICHES",
    "CLASSICS",
    "SALADS",
    "APPETIZERS",
    "SIDES",
    "DESSERTS",
    "DRINKS",
    "EXTRAS",
  ];
  const formatString = (string) => {
    return string.replaceAll(" ", "-").toLowerCase();
  };
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    window.location.replace(`/#${formatString(menuGroup[newValue])}`);
    console.log("newValue: ", newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        {menuGroup.map((menu, index) => (
          <Tab value={index} key={index} label={menu} />
        ))}
      </Tabs>
    </Box>
  );
}
