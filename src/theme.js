import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "Open Sans",
  },
  palette: {
    background: { default: "#F3F3F4" },
    primary: { main: "#06aa48" },
    secondary: { main: "#808080" },
    title: { main: "#676A6C" },
    subtitle: { main: "RGB(255, 255 ,255, 0.8)" },
    white: { main: "#ffffff" },
    black: { main: "#000000" },
    error: { main: "#ff0000" },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 800,
      lg: 1100,
      xl: 1436,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          paddingBottom: 10,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          flex: 1,
        },
      },
    },
  },
});
