import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import appRoutes from "./router/index.js";

import dbConnection from "./config/dbConnection.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

dbConnection();

app.use("/", appRoutes);
app.get("/hammad", (req, res) => {
  res.send("Hammad");
});

app.listen(3000, () => console.log("Server Running on Port: 3000"));
