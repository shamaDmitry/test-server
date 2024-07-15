const { default: axios } = require("axios");
const express = require("express");

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  axios
    .get("https://emma.maryland.gov/page.aspx/en/rfp/request_browse_public")
    .then((response) => {
      console.log("res", response);
    });

  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About route 🎉 ");
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
