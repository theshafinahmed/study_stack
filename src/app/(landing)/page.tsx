import GetStartedButton from "@/lib/components/pages/landing/GetStartedButton";

function Landing() {
    return (
        <main className="w-rscreen h-rscreen flex flex-col items-center justify-center gap-4">
            <h1 className="text-5xl font-bold">StudyStack</h1>
            <GetStartedButton />
        </main>
    );
}

export default Landing;
