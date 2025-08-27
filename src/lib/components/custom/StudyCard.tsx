"use client";

import { useTaskStore } from "@/store/useTaskStore";
import { Icon } from "@iconify/react";
import { motion } from "motion/react";
import Button from "./Button";

function StudyCard({
    id,
    subject,
    task,
    createdAt,
    dueDate,
}: {
    id: string;
    subject: string;
    task: string;
    createdAt: string;
    dueDate: string;
}) {
    const { removeTask } = useTaskStore();

    const handleClose = () => {
        removeTask(id);
    };

    return (
        <motion.div
            drag
            layout
            dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 1, y: 100 }}
            className="card bg-base-100 w-full h-min shadow-sm"
        >
            <div className="card-body">
                <div className="flex items-center justify-between">
                    <h2 className="card-title">{subject}</h2>
                    <Button
                        onClick={handleClose}
                        className="btn-ghost btn-sm text-error"
                    >
                        <Icon icon="mingcute:close-fill" className="size-6" />
                    </Button>
                </div>
                <p className="whitespace-pre-wrap">{task}</p>
                <div className="card-actions justify-between">
                    <div className="flex flex-col opacity-70">
                        <p>Created At: {createdAt}</p>
                        <p>Due Date: {dueDate}</p>
                    </div>
                    <Button className="btn-primary">Done</Button>
                </div>
            </div>
        </motion.div>
    );
}

export default StudyCard;
