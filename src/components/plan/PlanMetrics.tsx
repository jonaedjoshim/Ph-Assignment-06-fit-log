import type { Workout } from "@/types/workout";

type PlanMetricsProps = {
    workouts: Workout[];
};

export default function PlanMetrics({ workouts }: PlanMetricsProps) {
    const minutes = workouts.reduce(
        (total, workout) => total + workout.duration,
        0,
    );

    const calories = workouts.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0,
    );

    const metrics = [
        {
            label: "Exercises",
            value: workouts.length,
            accent: true,
        },
        {
            label: "Minutes",
            value: minutes,
            accent: false,
        },
        {
            label: "Calories",
            value: calories,
            accent: false,
        },
    ];

    return (
        <div className="grid overflow-hidden rounded-2xl border border-(--border) bg-(--surface) sm:grid-cols-3">
            {metrics.map((metric, index) => (
                <div
                    key={metric.label}
                    className={`px-6 py-8 sm:px-8 ${index !== metrics.length - 1
                        ? "border-b border-(--border) sm:border-b-0 sm:border-r"
                        : ""
                        }`}
                >
                    <p className="text-xs text-(--muted)">{metric.label}</p>

                    <p
                        className={`font-display mt-2 text-4xl font-bold ${metric.accent ? "text-(--accent)" : "text-white"
                            }`}
                    >
                        {metric.value}
                    </p>
                </div>
            ))}
        </div>
    );
}