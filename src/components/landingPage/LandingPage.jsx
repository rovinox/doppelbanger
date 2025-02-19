import React, { useState, useEffect } from "react";
import ItemListContainer from "../Item/ItemListContainer";
import LandingBanner from "./LandingBanner";
import demoData from "../../mockData/responseData.json";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Navbar from "../NavBar/NavBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Theme = createTheme({
  palette: { primary: { main: "#0d47a1" } },
});

const ThemeContext = ({ children }) => (
  <ThemeProvider theme={Theme}>{children}</ThemeProvider>
);

export default function LandingPage() {
  const [items, setItems] = useState(null);
  const [sections, setSections] = useState([]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    try {
      const newSections = demoData.paginatedMenuItems.menus[0].groups.map(
        (item) => ({ name: item.name, guid: item.guid })
      );

      setSections(newSections);
      setItems(demoData.paginatedMenuItems.menus[0].groups);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    document.getElementById(sections[newValue].guid)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!sections.length) return;

    const sectionElements = sections.map((section) =>
      document.getElementById(section.guid)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = sections.findIndex(
              (section) => section.guid === entry.target.id
            );
            if (index !== -1) {
              setValue(index);
            }
          }
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.5 } // Change active tab when 50% of a section is visible
    );

    sectionElements.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, [sections]);

  return (
    <ThemeContext>
      <div>
        <Navbar sections={sections} value={value} handleChange={handleChange} />

        <LandingBanner />
        {items && items.map((item) => <ItemListContainer {...item} />)}
      </div>
    </ThemeContext>
  );
}
