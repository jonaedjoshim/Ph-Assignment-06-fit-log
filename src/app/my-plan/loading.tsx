export default function Loading() {
    return (
        <div
            className="flex min-h-[60vh] items-center justify-center"
            role="status"
            aria-label="Loading workouts"
        >
            <div className="flex flex-col items-center gap-4">
                <span className="loading loading-spinner loading-lg text-(--accent)" />

                <p className="font-display uppercase tracking-wider text-(--muted)">
                    Loading workouts...
                </p>
            </div>
        </div>
    );
}