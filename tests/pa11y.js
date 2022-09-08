import pa11y from "pa11y";
import express from "express";
import cors from "cors";
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.static("pages"));

app.get("/test", async (_, res) => {
  const results = await pa11y("https://tfl-api-eight.vercel.app");
  res.status(200).json(results);
});
app.listen(port, () => console.log(`Server started on ${port}`));
