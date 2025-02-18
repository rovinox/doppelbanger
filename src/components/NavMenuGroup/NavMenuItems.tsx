import React, { useEffect, useState, useRef } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const Theme = createTheme({
  palette: { primary: { main: "#0d47a1" } },
});

const ThemeContext = ({ children }) => (
  <ThemeProvider theme={Theme}>{children}</ThemeProvider>
);

export default function ScrollableTabsButtonForce() {
  const [value, setValue] = useState(0);
  const [sections, setSections] = useState([
    { id: "CHICKEN & BEEF PLATTERS" },
    { id: "SEAFOOD PLATTERS" },
    { id: "SANDWICHES" },
    { id: "CLASSICS" },
    { id: "SALADS" },
    { id: "APPETIZERS" },
    { id: "SIDES" },
    { id: "DESSERTS" },
    { id: "DRINKS" },
    { id: "EXTRAS" },
  ]);

  const formatString = (str: string) => {
    return str.replaceAll(" ", "-").toLowerCase();
  };
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    window.location.replace(`/#${formatString(sections[newValue].id)}`);
    console.log("newValue: ", newValue);
  };

  return (
    <ThemeContext>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
        >
          {sections.map((menu, index) => (
            <Tab value={index} key={index} label={menu.id} />
          ))}
        </Tabs>
      </Box>
    </ThemeContext>
  );
}
