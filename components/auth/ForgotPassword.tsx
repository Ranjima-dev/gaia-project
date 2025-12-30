"use client";

import { useState } from "react";
import Button from "../ui/Button";
import { useTranslation } from "react-i18next";
import { generateMockToken, setAuthToken } from "@/lib/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ForgotPasswordPage() {
    const { i18n, t } = useTranslation();
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState<{
        email?: string;
        password?: string;
    }>({});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors: typeof errors = {};

        if (!email.trim()) {
            newErrors.email = "Email is required";
        }

        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) return;

        console.log({ email });

        const token = generateMockToken();
        router.replace(`/reset-password`);
    };

    return (
        <div className="w-full max-w-md">
            <h1 className="mb-2 text-[28px] sm:text-[32px] lg:text-[36px] font-semibold text-[var(--auth-title)]">
                {t("forgotPassword.title")}
            </h1>

            <p className="text-md text-gray-400">
                {t("forgotPassword.description")}
            </p>

            <form className="space-y-6 mt-12" onSubmit={handleSubmit} noValidate>
                <div>
                    <label className="mb-1 block text-sm font-medium text-[var(--auth-title)]">
                        {t("login.emailLabel")} <span className="text-[var(--auth-required)]">*</span>
                    </label>

                    <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setErrors((prev) => ({ ...prev, email: undefined }));
                        }}
                        placeholder="mail@simple.com"
                        className={`w-full rounded-full border px-5 py-4 text-sm bg-transparent
              ${errors.email
                                ? "border-red-500"
                                : "border-[var(--input-border)]"
                            }
              text-[var(--auth-title)] placeholder:text-gray-400
              focus:outline-none focus:ring-2 focus:ring-[var(--button-primary)]`}
                    />

                    {errors.email && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.email}
                        </p>
                    )}
                </div>

                <Button type="submit">{t("forgotPassword.submitButton")}</Button>
            </form>

            {/* Footer */}
            <p className="mt-6 text-sm text-[var(--auth-title)]">
                {t("login.noAccount")}{" "}
                <Link
                    href="/sign-up"
                    className="font-bold text-[var(--forgot-password)]"
                >
                    {t("login.createAccount")}
                </Link>
            </p>
        </div>
    );
}
