import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GridProps {
    children: ReactNode;
    className?: string;
}

export const GridContainer = ({ children, className }: GridProps) => {
    return (
        <div
            className={cn(
                "grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-6 md:gap-8 mx-auto max-w-[1200px] px-4 md:px-8",
                className
            )}
        >
            {children}
        </div>
    );
};
