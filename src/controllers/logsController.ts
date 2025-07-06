import { Request, Response } from "express";
import { readLogs, writeLogs } from "../db/jsonDb";
import { filterLogs } from "../utils/filterLogs";
import { LogEntrySchema } from "../models/log.model";

export const getLogs = async (req: Request, res: Response): Promise<void> => {
    try {
        const allLogs = await readLogs();

        // Sort logs by timestamp in descending order
        const sortedLogs = allLogs.sort((a, b) =>
            new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        );

        // Apply filters
        const filtered = await filterLogs(sortedLogs, req.query);

        res.status(200).json({ logs: filtered, total: filtered.length });
    } catch (error) {
        console.error("Error fetching logs:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const postLog = (req: Request, res: Response): void => {
    try {
        const parsed = LogEntrySchema.safeParse(req.body);
        if (!parsed.success) {
            res.status(400).json({
                error: "Validation failed",
                details: parsed.error.errors,
            });
            return;
        }

        const newLog = parsed.data;
        const logs = readLogs();
        logs.push(newLog);
        writeLogs(logs);

        res.status(201).json({ message: "Log created successfully." });
    } catch (error) {
        console.error("Error saving log:", error);
        res.status(500).json({ error: "Internal server error." });
    }
};