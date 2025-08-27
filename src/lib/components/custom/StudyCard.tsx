"use client";

import { Icon } from "@iconify/react";
import { useMutation } from "convex/react";
import { motion } from "motion/react";
import { api } from "../../../../convex/_generated/api";
import { StudyTask } from "../../../../types";
import Button from "./Button";

function StudyCard(studyTask: StudyTask) {
    const removeTask = useMutation(api.tasks.removeTask);

    const handleClose = () => {
        removeTask({ taskId: studyTask._id });
    };

    return (
        <motion.div
            layout
            transition={{
                type: "spring",
                stiffness: 1000,
                damping: 10,
                mass: 1,
            }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleX: 0, originX: "left", transition: { duration: 0.1 } }}
            className="bg-neutral text-neutral-content rounded-2xl w-full md:max-w-[400px] h-min shadow-sm"
        >
            <div className="flex flex-col p-4 gap-2">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">{studyTask.subject}</h2>
                    <Button
                        onClick={handleClose}
                        className="btn-ghost btn-sm text-error"
                    >
                        <Icon icon="mingcute:close-fill" className="size-6" />
                    </Button>
                </div>
                <p className="whitespace-pre-wrap">{studyTask.task}</p>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col text-sm opacity-70">
                        <p>Created At: {studyTask.startDate}</p>
                        <p>
                            Due Date:{" "}
                            {studyTask.endDate
                                ? studyTask.endDate
                                : "No due date"}
                        </p>
                    </div>
                    <Button className="btn-primary">Done</Button>
                </div>
            </div>
        </motion.div>
    );
}

export default StudyCard;
