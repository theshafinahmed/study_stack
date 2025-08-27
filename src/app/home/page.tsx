"use client";

import StudyCard from "@/lib/components/custom/StudyCard";
import Header from "@/lib/components/pages/home/Header";
import { useAuth } from "@clerk/nextjs";
import { Icon } from "@iconify/react";
import { useQuery } from "convex/react";
import { AnimatePresence } from "motion/react";
import { api } from "../../../convex/_generated/api";

function Home() {
    const { userId } = useAuth();

    const studyTasks = useQuery(
        api.tasks.getTasks,
        userId ? { userId } : "skip"
    );

    return (
        <main className="w-rscreen h-rscreen p-4 pt-20 flex flex-col">
            <Header />
            {userId && studyTasks && studyTasks.length != 0 ? (
                <section className="w-full h-full overflow-y-scroll flex flex-wrap content-start gap-4">
                    <AnimatePresence>
                        {studyTasks.map((task) => (
                            <StudyCard
                                key={task._id}
                                _id={task._id}
                                subject={task.subject}
                                task={task.task}
                                startDate={task.startDate}
                                endDate={task.endDate}
                                userId={userId}
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
