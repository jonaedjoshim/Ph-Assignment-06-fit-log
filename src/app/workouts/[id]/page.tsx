import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import MuscleTags from "@/components/workouts/MuscleTags";
import WorkoutActions from "@/components/workouts/WorkoutActions";
import WorkoutInstructions from "@/components/workouts/WorkoutInstructions";
import WorkoutSpecs from "@/components/workouts/WorkoutSpecs";
import { getWorkoutById } from "@/services/workout-service";

type WorkoutDetailsPageProps = {
    params: Promise<{
        id: string;
    }>;
};

export async function generateMetadata({
    params,
}: WorkoutDetailsPageProps): Promise<Metadata> {
    const { id } = await params;

    if (!/^\d+$/.test(id)) {
        return {
            title: "Workout Not Found",
        };
    }

    const workout = await getWorkoutById(id);

    if (!workout) {
        return {
            title: "Workout Not Found",
        };
    }

    return {
        title: workout.name,
        description: workout.description,
    };
}

export default async function WorkoutDetailsPage({
    params,
}: WorkoutDetailsPageProps) {
    const { id } = await params;

    if (!/^\d+$/.test(id)) {
        notFound();
    }

    const workout = await getWorkoutById(id);

    if (!workout) {
        notFound();
    }

    return (
        <section className="grid gap-10 py-12 lg:grid-cols-2 lg:gap-14 lg:py-16">
            <div className="relative min-h-115 overflow-hidden rounded-2xl bg-(--surface) sm:min-h-150 lg:min-h-180">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                />
            </div>

            <div className="flex flex-col justify-center">
                <h1 className="font-display text-4xl font-bold uppercase leading-tight text-white sm:text-5xl">
                    {workout.name}
                </h1>

                <p className="mt-3 max-w-2xl leading-7 text-(--muted)">
                    {workout.description}
                </p>

                <div className="mt-5">
                    <MuscleTags muscleGroups={workout.muscleGroups} />
                </div>

                <div className="mt-7">
                    <WorkoutSpecs workout={workout} />
                </div>

                <div className="mt-8">
                    <WorkoutInstructions instructions={workout.instructions} />
                </div>

                <div className="mt-9">
                    <WorkoutActions workout={workout} />
                </div>
            </div>
        </section>
    );
}