import "./css/App.css";
import React, { useState } from "react";
import Title from "../src/components/Title.js";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import Gallery from "../src/components/Gallery.js";

const theme = createTheme({
  typography: {
    fontFamily: ["Zen Antique", "serif"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Title />
        <Gallery />
      </div>
    </ThemeProvider>
  );
}

export default App;
