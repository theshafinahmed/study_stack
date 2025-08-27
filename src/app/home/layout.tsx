import GetStartedButton from "@/lib/components/pages/landing/GetStartedButton";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Icon } from "@iconify/react";

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <SignedIn>{children}</SignedIn>
            <SignedOut>
                <main className="w-rscreen h-rscreen flex flex-col items-center justify-center gap-4">
                    <Icon icon="streamline:sad-face-remix" className="size-24" />
                    <p>You are not logged in yet. Click the button below to get started.</p>
                    <GetStartedButton />
                </main>
            </SignedOut>
        </>
    );
}
