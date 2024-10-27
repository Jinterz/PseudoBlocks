//backend
import { v4 as uuidv4 } from "uuid";

const express = require("express"); //Notify use of express

const app = express(); // Allows use of Express module. app is Express application
const PORT = 3000;

// Say Hello world when someone visits the home page

// Listens to form submissions via /submit-form
app.post("/submit-form", (req, res) => {
  res.send("Form submitted");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
