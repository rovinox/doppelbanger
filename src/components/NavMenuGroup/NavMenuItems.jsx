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

export default function ScrollableTabsButtonForce({
  sections,
  value,
  handleChange,
}) {
  return (
    <ThemeContext>
      <Box
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          // position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
        >
          {sections &&
            sections.map((menu, index) => (
              <Tab
                sx={{ fontSize: 16 }}
                value={index}
                key={index}
                label={menu.name}
              />
            ))}
        </Tabs>
      </Box>
    </ThemeContext>
  );
}
