"use client";

import { useState } from "react";
import Button from "../ui/Button";
import { useTranslation } from "react-i18next";
import { useRouter, useSearchParams } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import axiosInstance from "@/lib/axiosInstance";
import { AUTH_ENDPOINTS } from "@/config/endpoint";

export default function FirstTimeChangePasswordPage() {
    const { t } = useTranslation();
    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    const [password, setPassword] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [errors, setErrors] = useState<{
        currentPassword?: string;
        password?: string;
        confirmPassword?: string;
        token?: string;
        form?: string;
    }>({});

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors: typeof errors = {};

        const userId = sessionStorage.getItem("pending_user_id");

        if (!userId) {
            newErrors.form = "Session expired. Please login again.";
        }

        if (!password.trim()) {
            newErrors.password = "errors.passwordRequired";
        } else if (password.length < 8) {
            newErrors.password = "errors.passwordMinLength";
        }

        if (!confirmPassword.trim()) {
            newErrors.confirmPassword = "errors.confirmPasswordRequired";
        } else if (password !== confirmPassword) {
            newErrors.confirmPassword = "errors.passwordMismatch";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }

        try {
            await axiosInstance.post(AUTH_ENDPOINTS.FIRST_TIME_PASSWORD_CHANGE, {
                userId,
                currentPassword,
                newPassword: password,
                confirmPassword,
            });
            sessionStorage.removeItem("pending_user_id");
            router.replace("/sign-in");
        } catch (error: any) {
            setErrors({
                form: error.response?.data?.message || "Password change failed",
            });
        }
    };


    return (
        <div className="w-full max-w-md">
            {/* Heading */}
            <h1 className="mb-2 text-[28px] sm:text-[32px] lg:text-[36px] font-semibold text-[var(--auth-title)]">
                {t("resetPassword.title")}
            </h1>

            <form className="space-y-6 mt-12" onSubmit={handleSubmit} noValidate>
                {/* Current Password */}
                <div>
                    <label className="mb-1 block text-sm font-medium text-[var(--auth-title)]">
                        {t("resetPassword.currentPasswordLabel")}{" "}
                        <span className="text-[var(--auth-required)]">*</span>
                    </label>

                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            value={currentPassword}
                            onChange={(e) => {
                                setCurrentPassword(e.target.value);
                                setErrors((prev) => ({ ...prev, currentPassword: undefined }));
                            }}
                            placeholder={t("resetPassword.passwordPlaceholder")}
                            className={`w-full rounded-full border px-5 py-4 pr-12 text-sm bg-transparent
        ${errors.currentPassword ? "border-red-500" : "border-[var(--input-border)]"}
        text-[var(--auth-title)] placeholder:text-gray-400
        focus:outline-none focus:ring-2 focus:ring-[var(--button-primary)]`}
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword((p) => !p)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                        >
                            {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                        </button>
                    </div>

                    {errors.currentPassword && (
                        <p className="mt-1 text-sm text-red-500">
                            {t(errors.currentPassword)}
                        </p>
                    )}
                </div>



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
                            {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
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
                            {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
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
            {/* <p className="mt-6 text-sm text-[var(--auth-title)]">
                {t("login.noAccount")}{" "}
                <Link
                    href="/sign-up"
                    className="font-bold text-[var(--forgot-password)]"
                >
                    {t("login.createAccount")}
                </Link>
            </p> */}
        </div>
    );
}
