import type { Workout } from "@/types/workout";

export type WorkoutSortOption = "duration" | "calories" | "rating";

export const sortWorkouts = (
    workouts: Workout[],
    option: WorkoutSortOption,
) => {
    return [...workouts].sort((firstWorkout, secondWorkout) => {
        if (option === "duration") {
            return secondWorkout.duration - firstWorkout.duration;
        }

        if (option === "calories") {
            return (
                secondWorkout.caloriesBurned -
                firstWorkout.caloriesBurned
            );
        }

        return secondWorkout.rating - firstWorkout.rating;
    });
};