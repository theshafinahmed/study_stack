import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getTasks = query({
    args: { userId: v.string() },
    handler: async (ctx, args) => {
        const tasks = await ctx.db
            .query("tasks")
            .filter((q) => q.eq(q.field("userId"), args.userId))
            .collect();

        return tasks;
    },
});

export const addTask = mutation({
    args: {
        subject: v.string(),
        task: v.string(),
        startDate: v.string(),
        endDate: v.string(),
        userId: v.string(),
    },
    handler: async (ctx, args) => {
        const task = await ctx.db.insert("tasks", {
            subject: args.subject,
            task: args.task,
            startDate: args.startDate,
            endDate: args.endDate,
            userId: args.userId,
        });
        return task;
    },
});

export const removeTask = mutation({
    args: {
        taskId: v.id("tasks"),
    },
    handler: async (ctx, args) => {
        await ctx.db.delete(args.taskId);
    },
});
