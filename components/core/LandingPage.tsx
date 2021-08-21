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
    primary: {
      main: "#5D3AB7",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FFFFFF",
    },
    text: {
      primary: "#000000",
      secondary: "#000000",
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontWeight: 300,
      fontSize: "3rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontWeight: 300,
      fontSize: "2.75rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    h3: {
      fontWeight: 400,
      fontSize: "2.40rem",
      lineHeight: 1.167,
      letterSpacing: "0em",
    },
    h4: {
      fontWeight: 400,
      fontSize: "2.125rem",
      lineHeight: 1.235,
      letterSpacing: "0.00735em",
    },
    h5: {
      fontWeight: 400,
      fontSize: "1.5rem",
      lineHeight: 1.334,
      letterSpacing: "0em",
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.75,
      letterSpacing: "0.00938em",
    },
    button: {},
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
