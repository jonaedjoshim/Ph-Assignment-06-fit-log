import type { Workout } from "@/types/workout";

export type WorkoutListType = "plan" | "saved";

const storageKeys: Record<WorkoutListType, string> = {
    plan: "fitlog-plan",
    saved: "fitlog-saved",
};

const storageEvent = "fitlog-storage";
const planLimit = 5;

export const getStoredWorkouts = (type: WorkoutListType): Workout[] => {
    if (typeof window === "undefined") {
        return [];
    }

    const stored = localStorage.getItem(storageKeys[type]);

    if (!stored) {
        return [];
    }

    try {
        return JSON.parse(stored) as Workout[];
    } catch {
        return [];
    }
};

export const getWorkoutStorageSnapshot = (type: WorkoutListType) => {
    if (typeof window === "undefined") {
        return null;
    }

    return localStorage.getItem(storageKeys[type]);
};

export const subscribeToWorkoutStorage = (callback: () => void) => {
    const handleChange = () => {
        callback();
    };

    window.addEventListener("storage", handleChange);
    window.addEventListener(storageEvent, handleChange);

    return () => {
        window.removeEventListener("storage", handleChange);
        window.removeEventListener(storageEvent, handleChange);
    };
};

const notifyStorageChange = () => {
    window.dispatchEvent(new Event(storageEvent));
};

export const addWorkoutToList = (
    workout: Workout,
    type: WorkoutListType,
) => {
    const workouts = getStoredWorkouts(type);
    const exists = workouts.some((item) => item.id === workout.id);

    if (exists) {
        return {
            success: false,
            reason: "duplicate" as const,
        };
    }

    if (type === "plan" && workouts.length >= planLimit) {
        return {
            success: false,
            reason: "limit" as const,
        };
    }

    localStorage.setItem(
        storageKeys[type],
        JSON.stringify([...workouts, workout]),
    );

    notifyStorageChange();

    return {
        success: true,
        reason: "added" as const,
    };
};

export const removeWorkoutFromList = (
    workoutId: number,
    type: WorkoutListType,
) => {
    const workouts = getStoredWorkouts(type);
    const updatedWorkouts = workouts.filter(
        (workout) => workout.id !== workoutId,
    );

    localStorage.setItem(
        storageKeys[type],
        JSON.stringify(updatedWorkouts),
    );

    notifyStorageChange();
};

export const markWorkoutAsDone = (workoutId: number) => {
    removeWorkoutFromList(workoutId, "plan");
};