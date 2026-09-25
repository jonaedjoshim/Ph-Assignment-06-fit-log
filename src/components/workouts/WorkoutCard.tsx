import Image from "next/image";
import Link from "next/link";
import MuscleTags from "./MuscleTags";
import WorkoutStats from "./WorkoutStats";
import type { Workout } from "@/types/workout";

type WorkoutCardProps = {
    workout: Workout;
};

export default function WorkoutCard({ workout }: WorkoutCardProps) {
    return (
        <Link
            href={`/workouts/${workout.id}`}
            aria-label={`View details for ${workout.name}`}
            className="group overflow-hidden rounded-2xl border border-(--border) bg-(--surface) transition duration-300 hover:-translate-y-1 hover:border-(--accent)/40"
        >
            <div className="relative aspect-video overflow-hidden bg-(--surface-light)">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            <div className="p-5">
                <MuscleTags muscleGroups={workout.muscleGroups} />

                <h2 className="font-display mt-4 text-xl font-bold uppercase tracking-wide text-white">
                    {workout.name}
                </h2>

                <p className="mt-1 text-sm text-(--muted)">
                    {workout.equipment}
                </p>

                <div className="my-4 border-t border-(--border)" />

                <WorkoutStats
                    duration={workout.duration}
                    calories={workout.caloriesBurned}
                    rating={workout.rating}
                />
            </div>
        </Link>
    );
}