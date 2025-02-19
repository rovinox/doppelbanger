import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import SearchBar from "./SearchBar";
import CartWidget from "../Cart/CartWidget";
import Logo from "./Logo";
import MenuNavList from "./MenuNavList";
import ThemeContext from "../../context/ThemeContext";
const NavBar = (props) => {
  const pages = ["Home", "About", "Contact", "Shop"];

  return (
    <ThemeContext>
      <AppBar position="sticky" sx={{ bgcolor: "none" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Logo />
            <MenuNavList pages={pages} />
            {/* <Container maxWidth="xs" disableGutters>
              <SearchBar />
            </Container> */}
            <CartWidget />
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeContext>
  );
};

export default NavBar;
