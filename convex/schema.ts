import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    tasks: defineTable({
        subject: v.string(),
        task: v.string(),
        startDate: v.string(),
        endDate: v.string(),
        userId: v.string(),
    }),
});
