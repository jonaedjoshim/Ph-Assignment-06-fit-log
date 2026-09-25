"use client";

import { useMemo, useSyncExternalStore } from "react";
import {
    getWorkoutStorageSnapshot,
    subscribeToWorkoutStorage,
    type WorkoutListType,
} from "./workout-storage";
import type { Workout } from "@/types/workout";

const getServerSnapshot = () => null;

const parseWorkouts = (snapshot: string | null): Workout[] => {
    if (!snapshot) {
        return [];
    }

    try {
        return JSON.parse(snapshot) as Workout[];
    } catch {
        return [];
    }
};

export const useWorkoutList = (type: WorkoutListType) => {
    const snapshot = useSyncExternalStore(
        subscribeToWorkoutStorage,
        () => getWorkoutStorageSnapshot(type),
        getServerSnapshot,
    );

    return useMemo(() => parseWorkouts(snapshot), [snapshot]);
};