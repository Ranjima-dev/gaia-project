import KpiCard from "@/components/ui/KpiCard";
import { useTranslation } from "react-i18next";

export default function CostBenefitKPIs() {
    const { t } = useTranslation();

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <KpiCard
                title={t("dashboard.kpis.totalAnnualSavings")}
                value="¥400,413"
            />

            <KpiCard
                title={t("dashboard.kpis.organizationWideRoi")}
                value="408.1%"
            />

            <KpiCard
                title={t("dashboard.kpis.averagePayback")}
                value={t("dashboard.kpis.months", { value: 2.4 })}
            />
        </div>
    );
}
