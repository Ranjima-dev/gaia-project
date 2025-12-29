import Card from "@/components/ui/Card";
import TaskTableRow from "./TaskTableRow";

export default function TaskDetailsTable() {
    return (
        <Card className="p-0 overflow-hidden">
            <table className="w-full table-fixed border-collapse text-left">
                <colgroup>
                    <col className="w-[35%]" />
                    <col className="w-[15%]" />
                    <col className="w-[15%]" />
                    <col className="w-[15%]" />
                    <col className="w-[12%]" />
                    <col className="w-[13%]" />
                </colgroup>
                <thead className="border-b border-b-[#F2F4F7]">
                    <tr className="text-sm font-medium text-indigo-600 whitespace-nowrap">
                        <th className="px-6 py-4">Task</th>
                        <th className="px-6 py-4">Suitability</th>
                        <th className="px-6 py-4">ROI</th>
                        <th className="px-6 py-4">Payback (mo)</th>
                        <th className="px-6 py-4">Risk</th>
                        <th className="px-6 py-4">Dev Effort</th>
                    </tr>
                </thead>

                <tbody className="text-sm">
                    <TaskTableRow
                        highlighted
                        task="Team Collaboration"
                        suitability={91}
                        roi="320.0%"
                        payback="1.8"
                        risk="Low"
                        effort="Medium"
                    />
                    <TaskTableRow
                        task="Email Communication"
                        suitability={91}
                        roi="210.0%"
                        payback="2.2"
                        risk="Low"
                        effort="Medium"
                    />
                    <TaskTableRow
                        task="File Management"
                        suitability={75}
                        roi="140.0%"
                        payback="3.0"
                        risk="Medium"
                        effort="High"
                    />
                    <TaskTableRow
                        task="Report Export / Download"
                        suitability={62}
                        roi="85.0%"
                        payback="5.4"
                        risk="Medium"
                        effort="Medium"
                    />
                    <TaskTableRow
                        task="Web Research / Browsing"
                        suitability={41}
                        roi="20.0%"
                        payback="-"
                        risk="Low"
                        effort="Low"
                    />
                </tbody>
            </table>
        </Card>
    );
}
