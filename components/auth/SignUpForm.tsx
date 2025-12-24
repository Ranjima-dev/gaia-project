"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Button from "@/components/ui/Button";

export default function SignUpForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const [errors, setErrors] = useState<{
        email?: string;
        password?: string;
        confirmPassword?: string;
    }>({});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors: typeof errors = {};

        if (!email.trim()) {
            newErrors.email = "Email is required";
        }

        if (!password.trim()) {
            newErrors.password = "Password is required";
        } else if (password.length < 8) {
            newErrors.password = "Password must be at least 8 characters";
        }

        if (!confirmPassword.trim()) {
            newErrors.confirmPassword = "Confirm password is required";
        } else if (password !== confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return;

        console.log({ email, password, rememberMe });
    };

    return (
        <div className="w-full max-w-md">
            <h1 className="mb-2 text-[28px] sm:text-[32px] lg:text-[36px] font-semibold text-[var(--auth-title)]">
                Create Account
            </h1>

            <p className="mb-8 text-[16px] text-[var(--auth-subtitle)]">
                Enter your email and create password to sign up!
            </p>

            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                {/* Email */}
                <div>
                    <label className="mb-1 block text-[14px] font-medium text-[var(--auth-title)]">
                        Email <span className="text-[var(--auth-required)]">*</span>
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
                        <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                </div>

                {/* Password */}
                <div>
                    <label className="mb-1 block text-[14px] font-medium text-[var(--auth-title)]">
                        Create Password <span className="text-[var(--auth-required)]">*</span>
                    </label>

                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setErrors((prev) => ({ ...prev, password: undefined }));
                            }}
                            placeholder="Min. 8 characters"
                            className={`w-full rounded-full border px-5 py-4 pr-12 text-sm bg-transparent
                ${errors.password
                                    ? "border-red-500"
                                    : "border-[var(--input-border)]"
                                }
                text-[var(--auth-title)] placeholder:text-gray-400
                focus:outline-none focus:ring-2 focus:ring-[var(--button-primary)]`}
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>

                    {errors.password && (
                        <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                    )}
                </div>

                {/* Confirm Password */}
                <div>
                    <label className="mb-1 block text-[14px] font-medium text-[var(--auth-title)]">
                        Confirm Password <span className="text-[var(--auth-required)]">*</span>
                    </label>

                    <div className="relative">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            value={confirmPassword}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                                setErrors((prev) => ({
                                    ...prev,
                                    confirmPassword: undefined,
                                }));
                            }}
                            placeholder="Min. 8 characters"
                            className={`w-full rounded-full border px-5 py-4 pr-12 text-sm bg-transparent
                ${errors.confirmPassword
                                    ? "border-red-500"
                                    : "border-[var(--input-border)]"
                                }
                text-[var(--auth-title)] placeholder:text-gray-400
                focus:outline-none focus:ring-2 focus:ring-[var(--button-primary)]`}
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                            }
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                            {showConfirmPassword ? (
                                <EyeOff size={18} />
                            ) : (
                                <Eye size={18} />
                            )}
                        </button>
                    </div>

                    {errors.confirmPassword && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.confirmPassword}
                        </p>
                    )}
                </div>

                {/* Remember me */}
                <label className="flex cursor-pointer items-center gap-3 text-sm text-[var(--auth-subtitle)]">
                    <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="h-4 w-4 rounded accent-[var(--forgot-password)]"
                    />
                    Keep me logged in
                </label>

                {/* Submit */}
                <Button type="submit">Create Account</Button>
            </form>
        </div>
    );
}
