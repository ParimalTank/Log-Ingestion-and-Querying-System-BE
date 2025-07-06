import { LogEntry } from "../models/log.model";

export function filterLogs(logs: LogEntry[], query: any): LogEntry[] {
    return logs.filter((log) => {
        const matchMessage =
            !query.message || log.message.toLowerCase().includes(query.message.toLowerCase());

        const matchLevel = !query.level || log.level === query.level;

        const matchResourceId =
            !query.resourceId ||
            log.resourceId.toLowerCase().includes(query.resourceId.toLowerCase());

        const logTime = new Date(log.timestamp).getTime();
        const startTime = query.timestamp_start ? new Date(query.timestamp_start).getTime() : null;
        const endTime = query.timestamp_end ? new Date(query.timestamp_end).getTime() : null;

        const matchTime =
            (!startTime || logTime >= startTime) &&
            (!endTime || logTime <= endTime);

        return matchMessage && matchLevel && matchResourceId && matchTime;
    });
}
