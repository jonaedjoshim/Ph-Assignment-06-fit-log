import HeroSection from "@/components/workouts/HeroSection";
import LibrarySection from "@/components/workouts/LibrarySection";
import { getWorkouts } from "@/services/workout-service";

export default async function HomePage() {
  const workouts = await getWorkouts();

  return (
    <>
      <HeroSection />
      <LibrarySection workouts={workouts} />
    </>
  );
}
