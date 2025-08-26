"use client";

import StudyCard from "@/lib/components/custom/StudyCard";
import Header from "@/lib/components/pages/home/Header";

function Home() {
    return (
        <main className="w-rscreen h-rscreen p-4 flex flex-col">
            <Header />
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-4 overflow-y-auto">
                <StudyCard
                    subject="Math"
                    task="Do the math"
                    createdAt={new Date().toLocaleDateString()}
                    dueDate={new Date().toLocaleDateString()}
                />
            </section>
        </main>
    );
}

export default Home;
