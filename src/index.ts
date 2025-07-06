import express from "express";
import cors from "cors";
import logsRouter from "./routes/logs";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use("/api/logs", logsRouter);

app.listen(PORT, () => {
    console.log(`🚀 Server listening at http://localhost:${PORT}`);
});
