import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-auto border-t border-(--border)">
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-5 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
                <Link
                    href="/"
                    className="flex items-center gap-2"
                    aria-label="FitLog home"
                >
                    <Image
                        src="/images/logo.png"
                        alt=""
                        width={22}
                        height={22}
                        className="size-5 object-contain"
                    />

                    <span className="font-display text-sm font-bold tracking-wide text-white">
                        FITLOG
                    </span>
                </Link>

                <p className="max-w-lg text-center text-xs leading-5 text-(--muted) sm:text-right">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>
            </div>
        </footer>
    );
}