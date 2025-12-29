import GeneratedReportTable from "@/components/generated-report/GeneratedReportTable";
import { GeneratedReport } from "@/types/generated-report";

const reports: GeneratedReport[] = [
    {
        id: "1",
        name: "IndoSakura.pdf",
        status: "processing",
        time: "03:00:54",
        date: "11-03-2024",
        size: "34 KB",
    },
    {
        id: "1",
        name: "IndoSakura.pdf",
        status: "generated",
        time: "03:00:54",
        date: "11-03-2024",
        size: "34 KB",
        downloadUrl: "/dummy.pdf",
        previewUrl: "/dummy.pdf",
    },

    {
        id: "3",
        name: "IndoSakura.pdf",
        status: "generated",
        time: "03:00:54",
        date: "11-03-2024",
        size: "34 KB",
    },
    {
        id: "4",
        name: "IndoSakura.pdf",
        status: "failed",
        time: "03:00:54",
        date: "11-03-2024",
        size: "34 KB",
    },
    {
        id: "5",
        name: "IndoSakura.pdf",
        status: "generated",
        time: "03:00:54",
        date: "11-03-2024",
        size: "34 KB",
    },
    {
        id: "6",
        name: "IndoSakura.pdf",
        status: "generated",
        time: "03:00:54",
        date: "11-03-2024",
        size: "34 KB",
    },
    {
        id: "7",
        name: "IndoSakura.pdf",
        status: "generated",
        time: "03:00:54",
        date: "11-03-2024",
        size: "34 KB",
    },
    {
        id: "8",
        name: "IndoSakura.pdf",
        status: "generated",
        time: "03:00:54",
        date: "11-03-2024",
        size: "34 KB",
    },
    {
        id: "9",
        name: "IndoSakura.pdf",
        status: "generated",
        time: "03:00:54",
        date: "11-03-2024",
        size: "34 KB",
    },
    {
        id: "10",
        name: "IndoSakura.pdf",
        status: "generated",
        time: "03:00:54",
        date: "11-03-2024",
        size: "34 KB",
    },
];

export default function ReportsPage() {
    return (
        <div className="space-y-6">
            <GeneratedReportTable data={reports} />
        </div>
    );
}
