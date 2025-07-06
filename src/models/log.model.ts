// src/schemas/log.schema.ts

import { z } from "zod";

export const LogEntrySchema = z.object({
    level: z.enum(["info", "warn", "error"]),
    message: z.string().min(1),
    resourceId: z.string().min(1),
    timestamp: z.string().refine((val) => !isNaN(Date.parse(val)), {
        message: "Invalid timestamp format",
    }),
    traceId: z.string().min(1),
    spanId: z.string().min(1),
    commit: z.string().min(1),
    metadata: z.record(z.any()).refine((val) => typeof val === "object" && !Array.isArray(val), {
        message: "Metadata must be an object",
    }),
});

export type LogEntry = z.infer<typeof LogEntrySchema>;
