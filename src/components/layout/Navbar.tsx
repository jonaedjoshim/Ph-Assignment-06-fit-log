"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useWorkoutList } from "@/lib/use-workout-list";

const navItems = [
    {
        label: "Workouts",
        href: "/",
    },
    {
        label: "My Plan",
        href: "/my-plan",
    },
];

export default function Navbar() {
    const pathname = usePathname();
    const plan = useWorkoutList("plan");
    const saved = useWorkoutList("saved");

    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === "/";
        }

        return pathname.startsWith(href);
    };

    return (
        <header className="border-b border-(--border)">
            <nav
                className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8"
                aria-label="Main navigation"
            >
                <Link
                    href="/"
                    className="flex shrink-0 items-center gap-2"
                    aria-label="FitLog home"
                >
                    <Image
                        src="/images/logo.png"
                        alt=""
                        width={28}
                        height={28}
                        priority
                        className="size-7 object-contain"
                    />

                    <span className="font-display text-xl font-bold tracking-wide text-white">
                        FITLOG
                    </span>
                </Link>

                <div className="hidden items-center gap-3 md:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            aria-current={isActive(item.href) ? "page" : undefined}
                            className={`rounded-full px-5 py-2 text-sm transition-colors ${isActive(item.href)
                                    ? "bg-(--accent)/10 font-semibold text-(--accent)"
                                    : "text-(--foreground)/70 hover:text-(--accent)"
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                <div className="hidden items-center gap-6 sm:flex">
                    <Link
                        href="/my-plan"
                        className="flex items-center gap-2 text-sm text-(--foreground)/80"
                    >
                        <span>Plan</span>

                        <span className="flex size-6 items-center justify-center rounded-full bg-(--accent) text-xs font-bold text-black">
                            {plan.length}
                        </span>
                    </Link>

                    <Link
                        href="/my-plan"
                        className="flex items-center gap-2 text-sm text-(--muted)"
                    >
                        <span>Saved</span>

                        <span className="flex size-6 items-center justify-center rounded-full border border-(--border) text-xs">
                            {saved.length}
                        </span>
                    </Link>
                </div>

                <div className="dropdown dropdown-end md:hidden">
                    <button
                        type="button"
                        tabIndex={0}
                        aria-label="Open navigation menu"
                        aria-haspopup="menu"
                        className="btn btn-square btn-ghost text-white"
                    >
                        <HiOutlineMenuAlt3 className="size-6" aria-hidden="true" />
                    </button>

                    <ul
                        tabIndex={-1}
                        role="menu"
                        className="menu dropdown-content z-50 mt-3 w-56 rounded-xl border border-(--border) bg-(--surface) p-2 shadow-xl"
                    >
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={
                                        isActive(item.href)
                                            ? "font-semibold text-(--accent)"
                                            : "text-(--foreground)/70"
                                    }
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}

                        <li className="mt-2 border-t border-(--border) pt-2 sm:hidden">
                            <Link href="/my-plan">
                                Plan
                                <span className="badge border-none bg-(--accent) text-black">
                                    {plan.length}
                                </span>
                            </Link>
                        </li>

                        <li className="sm:hidden">
                            <Link href="/my-plan">
                                Saved
                                <span className="badge badge-outline border-(--border)">
                                    {saved.length}
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}