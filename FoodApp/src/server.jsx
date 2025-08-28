const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(cors());

app.get("/api/restaurants", async (req, res) => {
  const response = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );
  const data = await response.json();
  res.json(data);
});

app.get("/api/menu/:id", async (req, res) => {
  const restaurantId = req.params.id;
  const response = await fetch(
    `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9628669&lng=77.57750899999999&restaurantId=${restaurantId}`
  );
  const data = await response.json();
  res.json(data);
});

app.listen(5000, () => console.log("Proxy server running on port 5000"));
