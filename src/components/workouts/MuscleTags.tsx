type MuscleTagsProps = {
    muscleGroups: string[];
};

export default function MuscleTags({ muscleGroups }: MuscleTagsProps) {
    return (
        <div className="flex flex-wrap gap-2">
            {muscleGroups.map((muscle) => (
                <span
                    key={muscle}
                    className="rounded-full bg-(--accent) px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-black"
                >
                    {muscle}
                </span>
            ))}
        </div>
    );
}