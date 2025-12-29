import PersonalInformationCard from "@/components/settings/PersonalInformationCard";
import SecurityCard from "@/components/settings/SecurityCard";

export default function SettingsPage() {
    return (
        <div className="space-y-8 bg-white">
            <PersonalInformationCard />
            <SecurityCard />
        </div>
    );
}
