import PersonalInformationCard from "@/components/settings/PersonalInformationCard";
import SecurityCard from "@/components/settings/SecurityCard";

export default function SettingsPage() {
    return (
        <div className="bg-white">
            <PersonalInformationCard />
            <SecurityCard />
        </div>
    );
}
