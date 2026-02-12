import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());

const SWIGGY_URL =
"https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6275609&lng=77.2784081&restaurantId=1171351&catalog_qa=undefined&query=Biryani&submitAction=ENTER";

app.get("/menu", async (req, res) => {
  try {
    const response = await fetch(SWIGGY_URL, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept": "application/json",
      },
    });

    const text = await response.text();

    // Debug
    console.log(text.slice(0, 200));

    if (!text.startsWith("{")) {
      return res.status(500).json({
        error: "Swiggy blocked request",
      });
    }

    const data = JSON.parse(text);

    res.json(data);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Backend crashed" });
  }
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
