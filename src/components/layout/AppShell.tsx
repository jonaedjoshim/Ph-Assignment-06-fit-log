import type { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type AppShellProps = {
    children: ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="mx-auto w-full max-w-7xl flex-1 px-4 sm:px-6 lg:px-8">
                {children}
            </main>

            <Footer />
        </div>
    );
}