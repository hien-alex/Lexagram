import "./css/App.css";
import React, { useState } from "react";
import Title from "../src/components/Title.js";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import Gallery from "../src/components/Gallery.js";
import Modal from "../src/components/Modal.js";

const theme = createTheme({
  typography: {
    fontFamily: ["Zen Antique", "serif"].join(","),
  },
});

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedCaption, setSelectedCaption] = useState("");
  const [selectedTime, setSelectedTime] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Title />
        <Gallery
          setSelectedImg={setSelectedImg}
          setSelectedCaption={setSelectedCaption}
          setSelectedTime={setSelectedTime}
        />
        {selectedImg && selectedTime && (
          <Modal
            selectedImg={selectedImg}
            selectedCaption={selectedCaption}
            selectedTime={selectedTime}
            setSelectedImg={setSelectedImg}
            setSelectedCaption={setSelectedCaption}
            setSelectedTime={setSelectedTime}
          />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
