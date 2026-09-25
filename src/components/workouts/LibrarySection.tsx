import WorkoutGrid from "./WorkoutGrid";
import type { Workout } from "@/types/workout";

type LibrarySectionProps = {
    workouts: Workout[];
};

export default function LibrarySection({
    workouts,
}: LibrarySectionProps) {
    return (
        <section id="library" className="scroll-mt-24 py-16 sm:py-20">
            <div className="mb-8">
                <h2 className="font-display text-4xl font-bold uppercase text-white sm:text-5xl">
                    The Library
                </h2>

                <p className="mt-1 text-sm text-(--muted)">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>

            <WorkoutGrid workouts={workouts} />
        </section>
    );
}