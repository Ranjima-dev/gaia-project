interface SemiGaugeProps {
    value: number;
    max: number;
    label: string;
}

export function SemiGauge({
    value,
    max,
    label,
}: SemiGaugeProps) {
    const radius = 80;
    const strokeWidth = 16;
    const circumference = Math.PI * radius;
    const progress = Math.min(value / max, 1);
    const offset = circumference * (1 - progress);

    return (
        <div className="relative w-56 h-28">
            <svg viewBox="0 0 200 120" className="w-full h-full">
                <path
                    d="M 20 100 A 80 80 0 0 1 180 100"
                    fill="none"
                    stroke="#E6E6F5"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                />

                <path
                    d="M 20 100 A 80 80 0 0 1 180 100"
                    fill="none"
                    stroke="var(--button-primary)"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                />
            </svg>

            {/* Centered text */}
            <div className="absolute top-10 inset-0 flex items-center justify-center">
                <span className="text-xl font-semibold text-gray-900">
                    {label}
                </span>
            </div>
        </div>
    );
}
