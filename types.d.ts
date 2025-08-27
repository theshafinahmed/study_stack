import { Id } from "./convex/_generated/dataModel";

export type StudyTask = {
    _id: Id;
    userId: string;
    subject: string;
    task: string;
    startDate: string;
    endDate: string;
};
