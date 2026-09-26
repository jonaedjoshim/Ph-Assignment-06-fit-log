import Link from "next/link";

export default function NotFound() {
    return (
        <section className="flex min-h-[65vh] flex-col items-center justify-center px-4 text-center">
            <p className="font-display text-xl font-bold text-(--accent)">
                404
            </p>

            <h1 className="font-display mt-3 text-5xl font-bold uppercase text-white sm:text-6xl">
                Page Not Found
            </h1>

            <p className="mt-4 max-w-md leading-7 text-(--muted)">
                The page or workout you are looking for does not exist.
            </p>

            <Link
                href="/"
                className="btn mt-7 border-none bg-(--accent) px-7 font-bold text-black shadow-none hover:bg-[#b5eb00]"
            >
                Back to Workouts
            </Link>
        </section>
    );
}