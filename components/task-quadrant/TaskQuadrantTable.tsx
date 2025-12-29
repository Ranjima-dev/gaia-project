import Card from "@/components/ui/Card";
import { TaskQuadrantItem } from "@/types/task-quadrant";

type Props = {
    data: TaskQuadrantItem[];
};

export default function TaskQuadrantTable({ data }: Props) {
    return (
        <Card className="p-0 overflow-x-auto">
            <table className="w-full table-fixed border-collapse">
                <colgroup>
                    <col className="w-[40%]" />
                    <col className="w-[20%]" />
                    <col className="w-[20%]" />
                    <col className="w-[20%]" />
                </colgroup>

                {/* Header */}
                <thead className="border-b-2 border-b-[#F2F4F7]">
                    <tr className="text-sm font-normal text-[var(--button-primary)] whitespace-nowrap">
                        <th className="px-4 py-4 text-left">Task</th>
                        <th className="px-4 py-4 text-left">Suitability</th>
                        <th className="px-4 py-4 text-left">ROI</th>
                        <th className="px-4 py-4 text-left">Quadrant</th>
                    </tr>
                </thead>

                {/* Body */}
                <tbody className="text-sm">
                    {data.map((item) => (
                        <tr
                            key={item.id}
                            className="border-b-2 border-b-[#F2F4F7] last:border-none"
                        >
                            <td className="px-4 py-6 font-medium text-gray-900">
                                {item.task}
                            </td>

                            <td className="px-4 py-6 text-gray-600">
                                {item.suitability}
                            </td>

                            <td className="px-4 py-6 text-gray-600">
                                {item.roi}
                            </td>

                            <td className="px-4 py-6 text-gray-600">
                                {item.quadrant}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    );
}
