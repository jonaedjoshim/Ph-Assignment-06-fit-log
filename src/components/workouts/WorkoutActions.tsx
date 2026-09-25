import { FiBookmark, FiCalendar } from "react-icons/fi";

export default function WorkoutActions() {
    return (
        <div className="flex flex-wrap gap-4">
            <button
                type="button"
                className="btn border-none bg-(--accent) px-6 font-bold text-black shadow-none hover:bg-[#b5eb00]"
            >
                <FiCalendar className="size-4" aria-hidden="true" />
                Add to today&apos;s plan
            </button>

            <button
                type="button"
                className="btn border border-(--border) bg-transparent px-6 font-medium text-white shadow-none hover:border-(--muted) hover:bg-(--surface)"
            >
                <FiBookmark className="size-4" aria-hidden="true" />
                Save for later
            </button>
        </div>
    );
}