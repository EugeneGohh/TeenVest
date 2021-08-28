import React from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import NavBar from "./NavBar";
import Header from "./Header";
import Catalog from "./Catalog";
import Footer from "./Footer";
import "@fontsource/roboto/400.css";

let theme = createTheme({
  palette: {
    mode: "light",
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: "#0F0E17",
      light: "#42a5f5",
      dark: "#ff8906",
      contrastText: "##0f0e17",
    },
    secondary: {
      main: "#ff8906",
      light: "#ba68c8",
      dark: "#7b1fa2",
      contrastText: "#fff",
    },
    text: {
      primary: "#FFF",
      secondary: "#FFF",
      disabled: "#000",
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: "Proxima Nova, Roboto, Arial, sans-serif",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: "Proxima Nova",
      fontWeight: 500,
      fontSize: "3.85rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontFamily: "Proxima Nova",
      fontWeight: 300,
      fontSize: "3.75rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    h3: {
      fontFamily: "Proxima Nova",
      fontWeight: 400,
      fontSize: "2.45rem",
      lineHeight: 1.167,
      letterSpacing: "0em",
    },
    h4: {
      fontFamily: "Proxima Nova",
      fontWeight: 400,
      fontSize: "2.125rem",
      lineHeight: 1.235,
      letterSpacing: "0.00735em",
    },
    h5: {
      fontFamily: "Proxima Nova",
      fontWeight: 400,
      fontSize: "1.5rem",
      lineHeight: 1.334,
      letterSpacing: "0em",
    },
    subtitle1: {
      fontFamily: "Proxima Nova",
      fontWeight: 400,
      fontSize: "1.05rem",
      lineHeight: 1.75,
      letterSpacing: "0.00938em",
    },
    subtitle2: {
      fontFamily: "Proxima Nova",
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.75,
      letterSpacing: "0.00714em",
    },
    body1: {
      fontFamily: "Proxima Nova",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
    body2: {
      fontFamily: "Proxima Nova",
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: 1.43,
      letterSpacing: "0.001071em",
    },
    button: {
      fontFamily: "Proxima Nova",
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.75,
      letterSpacing: "0.02857em",
      textTransform: "uppercase",
    },
    caption: {
      fontFamily: "Proxima Nova",
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 1.66,
      letterSpacing: "0.03333em",
    },
    overline: {
      fontFamily: "Proxima Nova",
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 2.66,
      letterSpacing: "0.0833em",
      textTramsform: "uppercase",
    },
  },
});

theme = responsiveFontSizes(theme);

function LandingPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Header />
      <Catalog />
      <Footer />
    </ThemeProvider>
  );
}

export default LandingPage;
