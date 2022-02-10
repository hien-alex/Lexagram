import React, { useState } from "react";
import "../css/Form.css";
import { Button, Paper, TextField } from "@material-ui/core";

function Form() {
  return (
    <div className="form_container">
      <br />
      <Paper className="form">
        <Button variant="outlined">Upload Image</Button>
        <div id="caption">
          <TextField id="standard-basic" label="Caption" variant="standard" />
        </div>

        <Button variant="outlined">Post</Button>
      </Paper>
    </div>
  );
}

export default Form;
