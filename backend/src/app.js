import express from "express";
import cors from "cors";
import runRoute from "./routes/runRoute.js";

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));

app.use("/run", runRoute);

export default app;
