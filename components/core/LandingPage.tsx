import React from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import NavBar from "./NavBar";
import Header from "./Header";
import Catalog from "./Catalog";
import Courses from "./Courses";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import "@fontsource/roboto/400.css";

const theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple!
      },
    },
  },
  palette: {
    mode: "light",
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: "#5D3AB7",
      light: "#42a5f5",
      dark: "#1565co",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FFFFFF",
      light: "#ba68c8",
      dark: "#7b1fa2",
      contrastText: "#fff",
    },
    text: {
      primary: "#000000",
      secondary: "#000000",
      disabled: "#000",
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: "Proxima Nova",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: "Proxima Nova",
      fontWeight: 300,
      fontSize: "3rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontFamily: "Proxima Nova",
      fontWeight: 300,
      fontSize: "2.75rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    h3: {
      fontFamily: "Proxima Nova",
      fontWeight: 400,
      fontSize: "2.40rem",
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
      fontSize: "1rem",
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

function LandingPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Header />
      <Catalog />
      <Courses />
      <Testimonial />
      <Footer />
    </ThemeProvider>
  );
}

export default LandingPage;
