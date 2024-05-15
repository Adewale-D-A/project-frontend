import { createTheme } from "@mui/material/styles";

export const themeOne = createTheme({
  palette: {
    primary: {
      main: "#10476D",
      light: "#88BFE5",
      dark: "#37739e",
      contrastText: "#ffF",
    },
    secondary: {
      main: "#385CAD",
      light: "#D8FCFF",
      dark: "#37739e",
      contrastText: "#ffF",
    },
    error: {
      main: "#E96445",
    },
    text: {
      primary: "#ffffff",
      secondary: "#10476D",
    },
  },
});

export default themeOne;
