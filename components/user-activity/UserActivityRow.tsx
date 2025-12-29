import { UserActivityRow as Row } from "@/types/user-activity";

type Props = {
    row: Row;
    selected: boolean;
    onToggle: () => void;
};

export default function UserActivityRow({
    row,
    selected,
    onToggle,
}: Props) {
    return (
        <tr
            className={`border-b-2 border-b-[#F2F4F7] last:border-none ${selected ? "bg-[#F7F9FF]" : ""
                }`}
        >
            <td className="px-3 py-3">
                <input
                    type="checkbox"
                    checked={selected}
                    onChange={onToggle}
                    className="h-4 w-4"
                />
            </td>

            <td className="px-3 py-3 font-medium text-gray-900 whitespace-nowrap">
                {row.user}
            </td>

            <td className="px-3 py-3 text-gray-600">
                {row.hours}
            </td>

            <td className="px-3 py-3 text-gray-600">
                {row.tasks}
            </td>

            <td className="px-3 py-3 text-gray-600">
                {row.efficiency}
            </td>

            <td className="px-3 py-3 text-gray-600">
                {row.apps}
            </td>

            <td className="px-3 py-3 text-gray-600">
                {row.candidates}
            </td>
        </tr>
    );
}
