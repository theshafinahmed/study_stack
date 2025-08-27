"use client";

import StudyCard from "@/lib/components/custom/StudyCard";
import Header from "@/lib/components/pages/home/Header";
import { useTaskStore } from "@/store/useTaskStore";
import { Icon } from "@iconify/react";
import { AnimatePresence } from "motion/react";

function Home() {
    const { studyTasks } = useTaskStore();

    return (
        <main className="w-rscreen h-rscreen p-4 pt-20 flex flex-col">
            <Header />
            {studyTasks.length != 0 ? (
                <section className="w-full h-full overflow-y-scroll flex flex-wrap content-start gap-4">
                    <AnimatePresence>
                        {studyTasks.map((task) => (
                            <StudyCard
                                key={task.id}
                                id={task.id}
                                subject={task.subject}
                                task={task.task}
                                createdAt={task.startDate}
                                dueDate={task.endDate}
                            />
                        ))}
                    </AnimatePresence>
                </section>
            ) : (
                <section className="w-full h-full flex flex-col gap-2 items-center justify-center text-neutral-content/50">
                    <Icon
                        icon="line-md:coffee-half-empty-filled-loop"
                        className="size-20"
                    />
                    <p>No tasks yet. Create one.</p>
                </section>
            )}
        </main>
    );
}

export default Home;
