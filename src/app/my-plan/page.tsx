import type { Metadata } from "next";
import PlanContent from "@/components/plan/PlanContent";

export const metadata: Metadata = {
    title: "My Plan",
    description: "Manage today's workout plan and saved exercises.",
};

export default function MyPlanPage() {
    return (
        <section className="py-12 sm:py-16">
            <div className="mb-8">
                <h1 className="font-display text-4xl font-bold uppercase text-white sm:text-5xl">
                    My Plan
                </h1>

                <p className="mt-2 text-sm text-(--muted) sm:text-base">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>

            <PlanContent />
        </section>
    );
}