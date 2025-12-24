import type { Metadata } from "next";
import LoginForm from "@/components/auth/LoginForm";

export const metadata: Metadata = {
    title: "Sign In | GAIA Dashboard",
    description: "Sign in to access the GAIA Opportunity Dashboard",
};

export default function SignInPage() {
    return <LoginForm />;
}
