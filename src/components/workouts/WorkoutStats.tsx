import { FiClock, FiStar } from "react-icons/fi";
import { IoFlameOutline } from "react-icons/io5";

type WorkoutStatsProps = {
    duration: number;
    calories: number;
    rating: number;
};

export default function WorkoutStats({
    duration,
    calories,
    rating,
}: WorkoutStatsProps) {
    return (
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-(--muted)">
            <span className="flex items-center gap-1.5">
                <FiClock className="size-4" aria-hidden="true" />
                {duration} min
            </span>

            <span className="flex items-center gap-1.5">
                <IoFlameOutline className="size-4" aria-hidden="true" />
                {calories} kcal
            </span>

            <span className="flex items-center gap-1.5">
                <FiStar className="size-4" aria-hidden="true" />
                {rating}
            </span>
        </div>
    );
}