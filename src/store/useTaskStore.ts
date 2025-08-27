import { create } from "zustand";

export type StudyTask = {
    id: string;
    subject: string;
    task: string;
    startDate: string;
    endDate: string;
};

interface TaskState {
    studyTasks: StudyTask[];
    addTask: (studyTask: StudyTask) => void;
    removeTask: (id: string) => void;
}

export const useTaskStore = create<TaskState>((set) => ({
    studyTasks: [],
    addTask: (studyTask: StudyTask) => {
        set((state) => ({
            studyTasks: [...state.studyTasks, studyTask],
        }));
    },
    removeTask: (id: string) => {
        set((state) => ({
            studyTasks: state.studyTasks.filter((task) => task.id !== id),
        }));
    },
}));
