import Card from "./Card";

interface Props {
    title: string;
    value: React.ReactNode;
    subtitle?: string;
    rightSlot?: React.ReactNode;
    className?: string;
}

export default function StatCard({
    title,
    value,
    subtitle,
    rightSlot,
    className,
}: Props) {
    return (
        <Card
            padding="p-6"
            className={`flex items-start justify-between ${className ?? ""}`}
        >
            <div className="space-y-2">
                <p className="text-xl text-black mb-8 font-bold">{title}</p>
                <h2 className="mt-1 flex items-center gap-1 text-3xl font-semibold text-gray-900">
                    {value}
                </h2>
                {subtitle && (
                    <p className="mt-2 text-xs text-gray-400">
                        {subtitle}
                    </p>
                )}
            </div>

            {rightSlot}
        </Card>
    );
}

