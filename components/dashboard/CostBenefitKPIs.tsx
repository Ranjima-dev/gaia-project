import KpiCard from "@/components/ui/KpiCard";

export default function CostBenefitKPIs() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <KpiCard
                title="Total Annual Savings"
                value="¥400,413"
            />

            <KpiCard
                title="Organization-wide ROI"
                value="408.1%"
            />

            <KpiCard
                title="Average Payback"
                value="2.4 months"
            />
        </div>
    );
}
