import fs from "fs";
import path from "path";
import { LogEntry } from "../models/log.model";

const DB_PATH = path.join(__dirname, "../../logs.json");

export const readLogs = (): LogEntry[] => {
    try {
        const data = fs.readFileSync(DB_PATH, "utf-8");
        return JSON.parse(data) as LogEntry[];
    } catch (err) {
        console.error("Error reading logs:", err);
        return [];
    }
};

export const writeLogs = (logs: LogEntry[]): void => {
    fs.writeFileSync(DB_PATH, JSON.stringify(logs, null, 2));
};
