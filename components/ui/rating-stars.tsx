import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingStarsProps {
    rating: number;
    className?: string;
}

export function RatingStars({ rating, className }: RatingStarsProps) {
    return (
        <div className={cn("flex items-center gap-1", className)} aria-label={`Rated ${rating} out of 5`}>
            {Array.from({ length: 5 }).map((_, index) => {
                const active = index < Math.round(rating);
                return <Star key={index} className={cn("h-4 w-4", active ? "fill-amber-400 text-amber-400" : "text-white/30")} />;
            })}
        </div>
    );
}
