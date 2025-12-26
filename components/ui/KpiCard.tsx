interface KpiCardProps {
    title: string;
    value: string;
}

export default function KpiCard({ title, value }: KpiCardProps) {
    return (
        <div className="rounded-3xl bg-white px-4 py-5 border border-gray-200 shadow-sm">
            <p className="text-[13px] font-semibold text-gray-400 mb-4">
                {title}
            </p>
            <p className="text-[22px] font-bold text-indigo-500">
                {value}
            </p>
        </div>
    );
}
