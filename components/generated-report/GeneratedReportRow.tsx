import { Download, Eye } from "lucide-react";
import { GeneratedReport } from "@/types/generated-report";
import { FileText } from "lucide-react";

type Props = {
    report: GeneratedReport;
    onDownload?: (report: GeneratedReport) => void;
    onPreview?: (report: GeneratedReport) => void;
};

const statusStyles = {
    processing: "text-blue-500",
    generated: "text-green-600",
    failed: "text-red-500",
};

export default function GeneratedReportRow({
    report,
    onDownload,
    onPreview,
}: Props) {
    return (
        <tr className="bg-white rounded-xl shadow-sm">
            <td className="px-6 py-4 flex items-center gap-3">
                <span className="text-yellow-400"><FileText
                    className="h-5 w-5"
                    style={{ color: "#FDE3AB" }}
                /></span>
                <span className="text-sm text-[#646363]">{report.name}</span>
            </td>

            <td className={`text-sm px-6 py-4 font-medium ${statusStyles[report.status]}`}>
                {report.status === "processing"
                    ? "Processing..."
                    : report.status.charAt(0).toUpperCase() + report.status.slice(1)}
            </td>

            <td className="text-sm px-6 py-4 text-gray-600">
                {report.time} | {report.date}
            </td>

            <td className="text-sm px-6 py-4 text-gray-600">
                {report.size}
            </td>

            <td className="px-6 py-4">
                <div className="flex items-center gap-4 text-gray-600">
                    {report.status !== "processing" && onDownload && (
                        <button
                            onClick={() => onDownload(report)}
                            className="hover:text-gray-900"
                            title="Download"
                        >
                            <Download className="h-5 w-5" />
                        </button>
                    )}

                    {report.status === "generated" && onPreview && (
                        <button
                            onClick={() => onPreview(report)}
                            className="hover:text-gray-900"
                            title="View"
                        >
                            <Eye className="h-5 w-5" />
                        </button>
                    )}
                </div>
            </td>
        </tr>
    );
}
