import type { Workout } from "@/types/workout";

const API_URL = "https://api.abcz.workers.dev/api/fitlog";

export const getWorkouts = async (): Promise<Workout[]> => {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch workouts");
    }

    return response.json();
};

export const getWorkoutById = async (
    id: string | number,
): Promise<Workout | null> => {
    const response = await fetch(`${API_URL}/${id}`);

    if (response.status === 404) {
        return null;
    }

    if (!response.ok) {
        throw new Error("Failed to fetch workout");
    }

    return response.json();
};