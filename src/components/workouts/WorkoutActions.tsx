"use client";

import { FiBookmark, FiCalendar } from "react-icons/fi";
import { toast } from "react-toastify";
import { addWorkoutToList } from "@/lib/workout-storage";
import type { Workout } from "@/types/workout";

type WorkoutActionsProps = {
    workout: Workout;
};

export default function WorkoutActions({
    workout,
}: WorkoutActionsProps) {
    const handleAddToPlan = () => {
        const result = addWorkoutToList(workout, "plan");

        if (result.success) {
            toast.success("Added to today's plan.");
            return;
        }

        if (result.reason === "duplicate") {
            toast.info("This workout is already in today's plan.");
            return;
        }

        toast.warning("Today's plan can contain up to five workouts.");
    };

    const handleSave = () => {
        const result = addWorkoutToList(workout, "saved");

        if (result.success) {
            toast.success("Workout saved for later.");
            return;
        }

        toast.info("This workout is already saved.");
    };

    return (
        <div className="flex flex-wrap gap-4">
            <button
                type="button"
                onClick={handleAddToPlan}
                className="btn border-none bg-(--accent) px-6 font-bold text-black shadow-none hover:bg-[#b5eb00]"
            >
                <FiCalendar className="size-4" aria-hidden="true" />
                Add to today&apos;s plan
            </button>

            <button
                type="button"
                onClick={handleSave}
                className="btn border border-(--border) bg-transparent px-6 font-medium text-white shadow-none hover:border-[var(--muted)] hover:bg-[var(--surface)]"
            >
                <FiBookmark className="size-4" aria-hidden="true" />
                Save for later
            </button>
        </div>
    );
}