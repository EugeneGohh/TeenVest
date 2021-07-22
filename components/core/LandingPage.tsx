import React from "react";
import NavBar from "./NavBar";
import { createTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import "@fontsource/roboto/400.css";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#5D3AB7",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
});

function LandingPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
    </ThemeProvider>
  );
}

export default LandingPage;
