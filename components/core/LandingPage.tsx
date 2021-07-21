import React from "react";
import NavBar from "./NavBar";
import { createTheme, ThemeProvider } from "@material-ui/core";
import '@fontsource/roboto/400.css';

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#5D3AB7",
      contrastText: "#000000",
    },
    text: {
      primary: "#000000",
      secondary: "#000000",
    },
  },
});

function LandingPage() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
    </ThemeProvider>
  );
}

export default LandingPage;
