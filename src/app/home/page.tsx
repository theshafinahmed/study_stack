"use client";

import StudyCard from "@/lib/components/custom/StudyCard";
import Header from "@/lib/components/pages/home/Header";
import { useTaskStore } from "@/store/useTaskStore";

function Home() {
    const { studyTasks } = useTaskStore();

    return (
        <main className="w-rscreen h-rscreen p-4 pt-20 flex flex-col">
            <Header />
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-4 overflow-y-auto">
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
            </section>
        </main>
    );
}

export default Home;
