import React from "react";
import "./App.css";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import NavBar from "./components/NavBar.js";

import ApiContextProvider from "./context/ApiContext.js";
import Main from "./components/Main.js";

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff', // インディゴのカラーコード
    },
    secondary: {
      main: "#f44336",
    },
  },
  typography: {
    fontFamily: '"Comic Neue",cursive',
  },
});

function App() {
  return (
    <ApiContextProvider>
      <MuiThemeProvider theme={theme}>
        <NavBar />
        <Main />
      </MuiThemeProvider>
    </ApiContextProvider>
  );
}

export default App;
