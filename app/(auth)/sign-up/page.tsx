import type { Metadata } from "next";
import SignUpForm from "@/components/auth/SignUpForm";

export const metadata: Metadata = {
    title: "Sign Up | GAIA Dashboard",
    description: "Sign Up to access the GAIA Opportunity Dashboard",
};

export default function SignInPage() {
    return <SignUpForm />;
}
