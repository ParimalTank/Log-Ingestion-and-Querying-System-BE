import express from "express";
import { getLogs, postLog } from "../controllers/logsController";

const router = express.Router();

router.get("/", getLogs);
router.post("/", postLog);

export default router;
