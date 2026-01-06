import FirstTimeChangePasswordPage from "@/components/auth/FirstTimeChangePassword";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Change Password | GAIA Dashboard",
    description: "Change Password to access the GAIA Opportunity Dashboard",
};

export default function ChangePasswordPage() {
    return <FirstTimeChangePasswordPage />;
}
