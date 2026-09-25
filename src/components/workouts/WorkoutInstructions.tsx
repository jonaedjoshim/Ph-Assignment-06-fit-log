type WorkoutInstructionsProps = {
    instructions: string[];
};

export default function WorkoutInstructions({
    instructions,
}: WorkoutInstructionsProps) {
    return (
        <section>
            <h2 className="font-display text-xl font-bold uppercase tracking-wide text-white">
                Instructions
            </h2>

            <ol className="mt-5 space-y-4">
                {instructions.map((instruction, index) => (
                    <li
                        key={`${index}-${instruction}`}
                        className="flex gap-4 text-sm leading-6 text-(--foreground)/80"
                    >
                        <span className="shrink-0 text-(--muted)">
                            {index + 1}.
                        </span>

                        <span>{instruction}</span>
                    </li>
                ))}
            </ol>
        </section>
    );
}