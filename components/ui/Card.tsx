interface CardProps {
    children: React.ReactNode;
    className?: string;
    padding?: string;
    margin?: string;
}

export default function Card({
    children,
    className = "",
    padding = "p-5",
    margin = "",
}: CardProps) {
    return (
        <div
            className={`rounded-2xl bg-white border border-gray-200 shadow-sm ${padding} ${margin} ${className}`}
        >
            {children}
        </div>
    );
}
