import type { Workout } from "@/types/workout";

type WorkoutSpecsProps = {
    workout: Workout;
};

export default function WorkoutSpecs({ workout }: WorkoutSpecsProps) {
    const specs = [
        {
            label: "Equipment",
            value: workout.equipment,
        },
        {
            label: "Difficulty",
            value: workout.difficulty,
        },
        {
            label: "Sets",
            value: workout.sets,
        },
        {
            label: "Reps",
            value: workout.reps,
        },
        {
            label: "Duration",
            value: `${workout.duration} min`,
        },
        {
            label: "Calories",
            value: `${workout.caloriesBurned} kcal`,
        },
        {
            label: "Rating",
            value: workout.rating,
        },
    ];

    return (
        <dl className="overflow-hidden rounded-2xl border border-(--border) bg-(--surface)">
            {specs.map((spec, index) => (
                <div
                    key={spec.label}
                    className={`flex items-center justify-between gap-6 px-6 py-4 ${index !== specs.length - 1
                        ? "border-b border-(--border)"
                        : ""
                        }`}
                >
                    <dt className="text-xs font-bold uppercase tracking-wider text-(--muted)">
                        {spec.label}
                    </dt>

                    <dd className="text-right text-sm text-(--foreground)">
                        {spec.value}
                    </dd>
                </div>
            ))}
        </dl>
    );
}