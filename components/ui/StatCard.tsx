import Card from "./Card";

interface Props {
    title: string;
    value: string | number;
    subtitle?: string;
    rightSlot?: React.ReactNode;
}

export default function StatCard({
    title,
    value,
    subtitle,
    rightSlot,
}: Props) {
    return (
        <Card className="flex justify-between items-center">
            <div>
                <p className="text-sm text-gray-500">{title}</p>
                <h2 className="text-3xl font-semibold">{value}</h2>
                {subtitle && (
                    <p className="text-xs text-gray-400 mt-1">{subtitle}</p>
                )}
            </div>
            {rightSlot}
        </Card>
    );
}
