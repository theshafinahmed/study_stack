import StudyCard from "@/lib/components/custom/StudyCard";
import Header from "@/lib/components/pages/home/Header";

function Home() {
    return (
        <main className="w-rscreen h-rscreen p-4 pt-20">
            <Header />
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-4">
                <StudyCard />
            </section>
        </main>
    );
}

export default Home;
