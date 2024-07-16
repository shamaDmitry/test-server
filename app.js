const { default: axios } = require("axios");
const express = require("express");
var cors = require("cors");

const app = express();
const PORT = 8000;
app.use(cors());

const TABLE_URL =
  "https://emma.maryland.gov/page.aspx/en/rfp/request_browse_public";

const ITEM_URL =
  "https://emma.maryland.gov/page.aspx/en/bpm/process_manage_extranet";

app.get("/api/scrape", (req, res) => {
  axios.get(TABLE_URL).then((response) => {
    return res.json(response.data);
  });
});

app.get("/api/scrape/:id", (req, res) => {
  const id = req.params.id;

  axios.get(`${ITEM_URL}/${id}`).then((response) => {
    return res.json(response.data);
  });
});

app.get("/about", (req, res) => {
  res.send("About route 🎉 ");
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
