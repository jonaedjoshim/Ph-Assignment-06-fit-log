import Image from "next/image";
import Link from "next/link";
import { FiCheck, FiX } from "react-icons/fi";
import WorkoutStats from "@/components/workouts/WorkoutStats";
import type { Workout } from "@/types/workout";

type PlanWorkoutCardProps = {
    workout: Workout;
    showDoneAction?: boolean;
};

export default function PlanWorkoutCard({
    workout,
    showDoneAction = false,
}: PlanWorkoutCardProps) {
    return (
        <article className="flex flex-col gap-5 rounded-2xl border border-(--border) bg-(--surface) p-4 sm:flex-row sm:items-center">
            <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-36">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 144px"
                    className="object-cover"
                />
            </div>

            <div className="min-w-0 flex-1">
                <h2 className="font-display text-xl font-bold uppercase text-white">
                    {workout.name}
                </h2>

                <p className="mt-1 text-sm text-(--muted)">
                    {workout.equipment}
                </p>

                <div className="mt-3">
                    <WorkoutStats
                        duration={workout.duration}
                        calories={workout.caloriesBurned}
                        rating={workout.rating}
                    />
                </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:justify-end">
                <Link
                    href={`/workouts/${workout.id}`}
                    className="btn btn-sm rounded-full border border-(--border) bg-transparent px-5 font-normal text-white shadow-none hover:bg-(--surface-light)"
                >
                    View Details
                </Link>

                {showDoneAction && (
                    <button
                        type="button"
                        className="btn btn-sm rounded-full border-none bg-(--accent) px-5 font-bold text-black shadow-none hover:bg-[#b5eb00]"
                    >
                        <FiCheck className="size-4" aria-hidden="true" />
                        Mark as Done
                    </button>
                )}

                <button
                    type="button"
                    aria-label={`Remove ${workout.name}`}
                    className="btn btn-sm btn-square btn-ghost text-(--muted) hover:text-white"
                >
                    <FiX className="size-5" aria-hidden="true" />
                </button>
            </div>
        </article>
    );
}