import Link from "next/link";

export default function EmptyPlan() {
    return (
        <div className="flex min-h-75 flex-col items-center justify-center rounded-2xl border border-dashed border-[var(--border)] px-6 py-16 text-center">
            <h2 className="font-display text-2xl font-bold uppercase text-white">
                Nothing Here Yet
            </h2>

            <p className="mt-2 text-sm text-(--muted)">
                Browse the library and add a lift to get today moving.
            </p>

            <Link
                href="/#library"
                className="btn mt-6 rounded-full border-none bg-(--accent) px-7 font-bold text-black shadow-none hover:bg-[#b5eb00]"
            >
                Go to workouts
            </Link>
        </div>
    );
}