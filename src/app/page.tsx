import WorkoutGrid from "@/components/workouts/WorkoutGrid";
import { getWorkouts } from "@/services/workout-service";

export default async function HomePage() {
  const workouts = await getWorkouts();

  return (
    <section className="py-16">
      <div className="mb-8">
        <h1 className="font-display text-4xl font-bold uppercase text-white">
          The Library
        </h1>

        <p className="mt-1 text-sm text-(--muted)">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <WorkoutGrid workouts={workouts} />
    </section>
  );
}
