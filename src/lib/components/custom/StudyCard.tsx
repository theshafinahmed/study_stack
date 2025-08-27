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
                    <h2 className="text-2xl font-bold">{subject}</h2>
                    <Button
                        onClick={handleClose}
                        className="btn-ghost btn-sm text-error"
                    >
                        <Icon icon="mingcute:close-fill" className="size-6" />
                    </Button>
                </div>
                <p className="whitespace-pre-wrap">{task}</p>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col text-sm opacity-70">
                        <p>Created At: {createdAt}</p>
                        <p>Due Date: {dueDate ? dueDate : "No due date"}</p>
                    </div>
                    <Button className="btn-primary">Done</Button>
                </div>
            </div>
        </motion.div>
    );
}

export default StudyCard;
