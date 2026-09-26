"use client";

import { useEffect } from "react";
import { FiRefreshCw } from "react-icons/fi";

type ErrorPageProps = {
    error: Error & {
        digest?: string;
    };
    reset: () => void;
};

export default function ErrorPage({
    error,
    reset,
}: ErrorPageProps) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <section className="flex min-h-[65vh] flex-col items-center justify-center px-4 text-center">
            <p className="font-display text-sm font-bold uppercase tracking-widest text-(--accent)">
                Something went wrong
            </p>

            <h1 className="font-display mt-3 text-4xl font-bold uppercase text-white sm:text-5xl">
                Unable to load workouts
            </h1>

            <p className="mt-4 max-w-md leading-7 text-(--muted)">
                We could not load the workout data. Please try again.
            </p>

            <button
                type="button"
                onClick={reset}
                className="btn mt-7 border-none bg-(--accent) px-7 font-bold text-black shadow-none hover:bg-[#b5eb00]"
            >
                <FiRefreshCw className="size-4" aria-hidden="true" />
                Try Again
            </button>
        </section>
    );
}