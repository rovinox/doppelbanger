import { createTheme, ThemeProvider } from "@mui/material/styles";

const lightTheme = createTheme({ palette: { mode: "light" } });
const darkTheme = createTheme({ palette: { mode: "dark" } });
const Theme = createTheme({ palette: { primary: { main: "##D9D9D9" } } });

const ThemeContext = ({ children, dark }) => (
  // <ThemeProvider theme={dark ? darkTheme : lightTheme}>
  <ThemeProvider theme={Theme}>{children}</ThemeProvider>
);

export default ThemeContext;
