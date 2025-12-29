type TaskTableRowProps = {
    task: string;
    suitability: number;
    roi: string;
    payback: string;
    risk: string;
    effort: string;
    highlighted?: boolean;
};

export default function TaskTableRow({
    task,
    suitability,
    roi,
    payback,
    risk,
    effort,
    highlighted = false,
}: TaskTableRowProps) {
    const dotColor =
        suitability >= 85
            ? "bg-green-500"
            : suitability >= 60
                ? "bg-yellow-500"
                : "bg-red-500";

    return (
        <tr
            className={`border-b border-b-[#F2F4F7] last:border-none ${highlighted ? "bg-[#FFF9ED]" : ""
                }`}
        >
            <td className="px-6 py-6 font-medium text-gray-900">
                {task}
            </td>

            <td className="px-6 py-6 flex items-center gap-2">
                <span className={`h-3 w-3 rounded-full ${dotColor}`} />
                <span className="text-indigo-600 font-medium">
                    {suitability}
                </span>
            </td>

            <td className="px-6 py-6 text-gray-600">{roi}</td>
            <td className="px-6 py-6 text-gray-600">{payback}</td>
            <td className="px-6 py-6 text-gray-600">{risk}</td>
            <td className="px-6 py-6 text-gray-600">{effort}</td>
        </tr>
    );
}
