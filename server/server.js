import express from "express";
import cors from "cors";
import restaurantsRoutes from "./routes/restaurants.js";
const app = express();

app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log("Server is running on port 5000.");
});

app.get("/", (req, res) => {
  res.send("Backend is working");
});

app.use("/api/restaurants", restaurantsRoutes);
