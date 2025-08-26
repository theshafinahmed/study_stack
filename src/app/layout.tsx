import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "StudyStack",
    description:
        "StudyStack is a platform that helps you stack all your study tasks in one place. " +
        "It helps you keep track of all your study tasks, and helps you stay organized. " +
        "It also helps you stay motivated, by providing you with a sense of progress, and by helping you stay on track.",
};

export const viewport: Viewport = {
    userScalable: false,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`antialiased`}>{children}</body>
        </html>
    );
}
