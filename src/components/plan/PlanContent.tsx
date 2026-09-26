"use client";

import { useState } from "react";
import EmptyPlan from "./EmptyPlan";
import PlanMetrics from "./PlanMetrics";
import PlanWorkoutCard from "./PlanWorkoutCard";
import { useWorkoutList } from "@/lib/use-workout-list";

type ActiveTab = "plan" | "saved";

export default function PlanContent() {
    const [activeTab, setActiveTab] = useState<ActiveTab>("plan");

    const plan = useWorkoutList("plan");
    const saved = useWorkoutList("saved");

    const displayedWorkouts = activeTab === "plan" ? plan : saved;

    return (
        <>
            <PlanMetrics workouts={plan} />

            <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div
                    role="tablist"
                    aria-label="Workout lists"
                    className="inline-flex w-fit rounded-xl border border-(--border) bg-(--surface) p-1"
                >
                    <button
                        type="button"
                        role="tab"
                        aria-selected={activeTab === "plan"}
                        onClick={() => setActiveTab("plan")}
                        className={`rounded-lg px-5 py-2 text-sm transition ${activeTab === "plan"
                                ? "bg-(--surface-light) font-semibold text-white"
                                : "text-(--muted)"
                            }`}
                    >
                        Today&apos;s Plan
                    </button>

                    <button
                        type="button"
                        role="tab"
                        aria-selected={activeTab === "saved"}
                        onClick={() => setActiveTab("saved")}
                        className={`rounded-lg px-5 py-2 text-sm transition ${activeTab === "saved"
                                ? "bg-(--surface-light) font-semibold text-white"
                                : "text-(--muted)"
                            }`}
                    >
                        Saved
                    </button>
                </div>

                <div className="flex items-center gap-3 text-sm">
                    <span className="text-(--muted)">Sort By</span>

                    <button
                        type="button"
                        className="btn btn-sm border border-(--border) bg-(--surface) font-normal text-white shadow-none"
                    >
                        Duration
                    </button>
                </div>
            </div>

            <div className="mt-6 space-y-4">
                {displayedWorkouts.length > 0 ? (
                    displayedWorkouts.map((workout) => (
                        <PlanWorkoutCard
                            key={workout.id}
                            workout={workout}
                            showDoneAction={activeTab === "plan"}
                        />
                    ))
                ) : (
                    <EmptyPlan />
                )}
            </div>
        </>
    );
}