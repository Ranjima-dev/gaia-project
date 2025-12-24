import { cn } from "@/lib/utils";

export default function Card({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={cn(
                "rounded-2xl bg-white border border-gray-200 shadow-sm p-5",
                className
            )}
        >
            {children}
        </div>
    );
}
