"use client";

import { useState } from "react";
import Button from "../ui/Button";
import { useTranslation } from "react-i18next";
import { useRouter, useSearchParams } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function ResetPasswordPage() {
    const { t } = useTranslation();
    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [errors, setErrors] = useState<{
        password?: string;
        confirmPassword?: string;
        token?: string;
    }>({});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("FORM SUBMITTED");

        const newErrors: typeof errors = {};

        console.log("Token:", token);

        if (!token) {
            console.log("Token missing");
            newErrors.token = "Invalid or expired token";
        }

        if (!password.trim()) {
            console.log("Password empty");
            newErrors.password = "errors.passwordRequired";
        } else if (password.length < 8) {
            console.log("Password too short");
            newErrors.password = "errors.passwordMinLength";
        }

        if (!confirmPassword.trim()) {
            console.log("Confirm password empty");
            newErrors.confirmPassword = "errors.confirmPasswordRequired";
        } else if (password !== confirmPassword) {
            console.log("Password mismatch");
            newErrors.confirmPassword = "errors.passwordMismatch";
        }

        console.log("Errors object:", newErrors);

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            console.log("Validation failed, stopping redirect");
            return;
        }

        console.log("Validation passed, redirecting");
        router.replace("/sign-in");
    };

    return (
        <div className="w-full max-w-md">
            {/* Heading */}
            <h1 className="mb-2 text-[28px] sm:text-[32px] lg:text-[36px] font-semibold text-[var(--auth-title)]">
                {t("resetPassword.title")}
            </h1>

            <form className="space-y-6 mt-12" onSubmit={handleSubmit} noValidate>
                {/* Create Password */}
                <div>
                    <label className="mb-1 block text-sm font-medium text-[var(--auth-title)]">
                        {t("resetPassword.createPasswordLabel")} <span className="text-[var(--auth-required)]">*</span>
                    </label>

                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setErrors((prev) => ({ ...prev, password: undefined }));
                            }}
                            placeholder={t("resetPassword.passwordPlaceholder")}
                            className={`w-full rounded-full border px-5 py-4 pr-12 text-sm bg-transparent
              ${errors.password ? "border-red-500" : "border-[var(--input-border)]"}
              text-[var(--auth-title)] placeholder:text-gray-400
              focus:outline-none focus:ring-2 focus:ring-[var(--button-primary)]`}
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword((p) => !p)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>

                    {errors.password && (
                        <p className="mt-1 text-sm text-red-500">
                            {t(errors.password)}
                        </p>
                    )}

                </div>

                {/* Confirm Password */}
                <div>
                    <label className="mb-1 block text-sm font-medium text-[var(--auth-title)]">
                        {t("resetPassword.confirmPasswordLabel")} <span className="text-[var(--auth-required)]">*</span>
                    </label>

                    <div className="relative">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            value={confirmPassword}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                                setErrors((prev) => ({ ...prev, confirmPassword: undefined }));
                            }}
                            placeholder={t("resetPassword.passwordPlaceholder")}
                            className={`w-full rounded-full border px-5 py-4 pr-12 text-sm bg-transparent
              ${errors.confirmPassword ? "border-red-500" : "border-[var(--input-border)]"}
              text-[var(--auth-title)] placeholder:text-gray-400
              focus:outline-none focus:ring-2 focus:ring-[var(--button-primary)]`}
                        />

                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword((p) => !p)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>

                    {errors.confirmPassword && (
                        <p className="mt-1 text-sm text-red-500">
                            {t(errors.confirmPassword)}
                        </p>
                    )}
                </div>

                <Button type="submit">{t("resetPassword.submitButton")}</Button>
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
