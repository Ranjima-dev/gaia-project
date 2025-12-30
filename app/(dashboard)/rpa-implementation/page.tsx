import RPAImplementationReport from "@/components/dashboard/RPAImplementationReport";


const data = [
    { name: "ITSO-K-NARA", team: 410, report: 50, email: 120, web: 180 },
    { name: "ITSO-K-NARA", team: 90, web: 450, email: 120 },
    { name: "ITSO-K-NARA", team: 70, web: 230, email: 60 },
    { name: "ITSO-K-NARA", team: 85, web: 260, email: 90 },
    { name: "ITSO-K-NARA", team: 120, web: 300, email: 75 },
    { name: "ITSO-K-NARA", team: 95, web: 180, email: 110 },
    { name: "ITSO-K-NARA", team: 150, web: 210, email: 95 },
    { name: "ITSO-K-NARA", team: 60, web: 190, email: 80 },
    { name: "ITSO-K-NARA", team: 130, web: 240, email: 70 },
    { name: "ITSO-K-NARA", team: 170, web: 280, email: 100 },
];

const legend = [
    { key: "team", label: "Team Collaboration", color: "#8FA2FF" },
    { key: "report", label: "Report Export / Download", color: "#FFCB85" },
    { key: "file", label: "File Management", color: "#BFE6E3" },
    { key: "email", label: "Email Communication", color: "#FFAF00" },
    { key: "web", label: "Web Research / Browsing", color: "#F1E2F4" },
];

export default function DashboardPage() {
    return <RPAImplementationReport
        title="RPA Implementation Report"
        data={data}
        legend={legend}
        xAxisLabel="Computer"
        yAxisLabel="Annual Savings (¥)"
    />;
}
