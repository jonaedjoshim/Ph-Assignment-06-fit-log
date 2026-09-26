"use client";

import { useMemo, useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { toast } from "react-toastify";
import EmptyPlan from "./EmptyPlan";
import PlanMetrics from "./PlanMetrics";
import PlanWorkoutCard from "./PlanWorkoutCard";
import {
    markWorkoutAsDone,
    removeWorkoutFromList,
} from "@/lib/workout-storage";
import { useWorkoutList } from "@/lib/use-workout-list";
import {
    sortWorkouts,
    type WorkoutSortOption,
} from "@/lib/workout-utils";
import type { Workout } from "@/types/workout";

type ActiveTab = "plan" | "saved";

const sortLabels: Record<WorkoutSortOption, string> = {
    duration: "Duration",
    calories: "Calories",
    rating: "Rating",
};

export default function PlanContent() {
    const [activeTab, setActiveTab] = useState<ActiveTab>("plan");
    const [sortOption, setSortOption] =
        useState<WorkoutSortOption>("duration");

    const plan = useWorkoutList("plan");
    const saved = useWorkoutList("saved");

    const activeWorkouts = activeTab === "plan" ? plan : saved;

    const displayedWorkouts = useMemo(
        () => sortWorkouts(activeWorkouts, sortOption),
        [activeWorkouts, sortOption],
    );

    const handleMarkDone = (workout: Workout) => {
        markWorkoutAsDone(workout.id);
        toast.success(`${workout.name} marked as done.`);
    };

    const handleRemove = (workout: Workout) => {
        removeWorkoutFromList(workout.id, activeTab);

        toast.success(
            activeTab === "plan"
                ? `${workout.name} removed from today's plan.`
                : `${workout.name} removed from saved workouts.`,
        );
    };

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

                    <div className="dropdown dropdown-end">
                        <button
                            type="button"
                            tabIndex={0}
                            className="btn btn-sm min-w-28 border border-(--border) bg-(--surface) font-normal text-white shadow-none hover:bg-(--surface-light)"
                        >
                            {sortLabels[sortOption]}
                            <IoChevronDown
                                className="size-4"
                                aria-hidden="true"
                            />
                        </button>

                        <ul
                            tabIndex={-1}
                            className="menu dropdown-content z-30 mt-2 w-40 rounded-xl border border-(--border) bg-(--surface) p-2 shadow-xl"
                        >
                            {(Object.keys(sortLabels) as WorkoutSortOption[]).map(
                                (option) => (
                                    <li key={option}>
                                        <button
                                            type="button"
                                            onClick={() => setSortOption(option)}
                                            className={
                                                sortOption === option
                                                    ? "text-(--accent)"
                                                    : "text-white"
                                            }
                                        >
                                            {sortLabels[option]}
                                        </button>
                                    </li>
                                ),
                            )}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-6 space-y-4">
                {displayedWorkouts.length > 0 ? (
                    displayedWorkouts.map((workout) => (
                        <PlanWorkoutCard
                            key={workout.id}
                            workout={workout}
                            showDoneAction={activeTab === "plan"}
                            onMarkDone={handleMarkDone}
                            onRemove={handleRemove}
                        />
                    ))
                ) : (
                    <EmptyPlan />
                )}
            </div>
        </>
    );
}