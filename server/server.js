// server/index.js
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
