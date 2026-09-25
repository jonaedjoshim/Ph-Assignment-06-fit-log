import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "My Plan",
};

export default function MyPlanPage() {
    return (
        <section className="py-16">
            <h1 className="font-display text-4xl font-bold uppercase">
                My Plan
            </h1>
        </section>
    );
}