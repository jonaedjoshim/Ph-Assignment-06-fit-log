import Image from "next/image";
import Link from "next/link";
import { FiArrowDownRight } from "react-icons/fi";

export default function HeroSection() {
    return (
        <section className="mt-8 grid min-h-110 items-center gap-10 overflow-hidden rounded-2xl border border-(--border) bg-(--surface) px-6 py-10 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-14 lg:py-12">
            <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-(--accent)">
                    Workout Library
                </p>

                <h1 className="font-display mt-5 max-w-2xl text-5xl font-bold uppercase leading-[1.05] text-white sm:text-6xl lg:text-7xl">
                    Train with intent. Log every set.
                </h1>

                <p className="mt-5 max-w-xl text-sm leading-6 text-(--muted) sm:text-base">
                    FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                    into today&apos;s plan, and watch the week&apos;s work add up.
                </p>

                <Link
                    href="#library"
                    className="btn mt-7 border-none bg-(--accent) px-6 font-bold text-black shadow-none hover:bg-[#b5eb00]"
                >
                    <FiArrowDownRight className="size-4" aria-hidden="true" />
                    Browse Workouts
                </Link>
            </div>

            <div className="flex items-center justify-center">
                <Image
                    src="/images/banner.png"
                    alt="Athlete performing a workout"
                    width={500}
                    height={400}
                    priority
                    className="max-h-85 w-auto object-contain"
                />
            </div>
        </section>
    );
}