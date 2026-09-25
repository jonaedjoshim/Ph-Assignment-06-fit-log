import { getWorkouts } from "@/services/workout-service";

export default async function HomePage() {
  const workouts = await getWorkouts();

  return (
    <section className="py-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-(--accent)">
        Workout Library
      </p>

      <h1 className="font-display mt-4 text-5xl font-bold uppercase">
        FitLog
      </h1>

      <p className="mt-4 text-(--muted)">
        {workouts.length} workouts loaded
      </p>
    </section>
  );
}
