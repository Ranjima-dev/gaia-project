import Card from "@/components/ui/Card";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const data = [
    {
        user: "ITSO-M-KITAMURA",
        hours: 7.8,
        tasks: ["teamCollaboration", "emailCommunication"]
    },
    {
        user: "INDO-M-KITAMURA",
        hours: 5.8,
        tasks: ["teamCollaboration", "emailCommunication"]
    },
    {
        user: "LAPTOP-C448JNE5",
        hours: 6.9,
        tasks: ["fileManagement", "reportExport"]
    },
    {
        user: "LAPTOP-S448JNE5",
        hours: 10.9,
        tasks: ["fileManagement", "reportExport"]
    }
];


export default function UserActivityTable() {
    const { t } = useTranslation();
    return (
        <Card className="px-6 pt-5 pb-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                    {t("dashboard.userActivity.title")}
                </h3>

                <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
                    {t("dashboard.userActivity.sortByActiveHours")}
                    <ChevronDown className="h-4 w-4" />
                </button>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 mb-3" />

            {/* Table */}
            <table className="w-full table-fixed text-sm">
                <colgroup>
                    <col className="w-[35%]" />
                    <col className="w-[30%]" />
                    <col className="w-[35%]" />
                </colgroup>
                <thead>
                    <tr className="text-gray-500">
                        <th className="text-left font-medium py-3">
                            {t("dashboard.userActivity.table.userComputer")}
                        </th>
                        <th className="text-left font-medium py-3">
                            {t("dashboard.userActivity.table.activeHours")}
                        </th>
                        <th className="text-left font-medium py-3">
                            {t("dashboard.userActivity.table.mainTasks")}
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((row) => (
                        <tr
                            key={row.user}
                            className="border-t border-gray-200"
                        >
                            <td className="py-5 font-semibold text-gray-900">
                                {row.user}
                            </td>

                            <td className="py-5 text-gray-600">
                                {row.hours}h
                            </td>

                            <td className="py-5 text-gray-500 leading-relaxed">
                                {row.tasks
                                    .map(task =>
                                        t(`dashboard.userActivity.tasks.${task}`)
                                    )
                                    .join(", ")}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Footer */}
            <div className="pt-3">
                <button className="text-indigo-600 text-sm font-medium hover:underline">
                    {t("dashboard.userActivity.allUsers")} →
                </button>
            </div>
        </Card>
    );
}
