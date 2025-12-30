import type { Metadata } from "next";
import ForgotPasswordPage from "@/components/auth/ForgotPassword";

export const metadata: Metadata = {
    title: "Forgot Password | GAIA Dashboard",
    description: "Forgot Password to access the GAIA Opportunity Dashboard",
};

export default function SignInPage() {
    return <ForgotPasswordPage />;
}
