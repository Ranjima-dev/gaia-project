interface CardProps {
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "bordered" | "shadow" | "flat";
}

export default function Card({
    children,
    className = "",
    variant = "default",
}: CardProps) {
    const base = "rounded-2xl bg-white";

    const variants = {
        default: "border border-gray-200 shadow-sm",
        bordered: "border border-gray-200",
        shadow: "shadow-md",
        flat: "",
    };

    return (
        <div className={`${base} ${variants[variant]} ${className}`}>
            {children}
        </div>
    );
}
