import type { Metadata } from "next";
import ResetPasswordPage from "@/components/auth/ResetPassword";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Reset Password | GAIA Dashboard",
    description: "Reset Password to access the GAIA Opportunity Dashboard",
};

export default function SignInPage() {
    return <Suspense>
        <ResetPasswordPage />
    </Suspense>;
}
