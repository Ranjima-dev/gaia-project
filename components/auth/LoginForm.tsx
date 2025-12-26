"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { generateMockToken, setAuthToken } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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

        if (!password.trim()) {
            newErrors.password = "Password is required";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return;

        console.log({ email, password, rememberMe });

        const token = generateMockToken();
        setAuthToken(token);

        router.replace("/dashboard");
    };

    return (
        <div className="w-full max-w-md">
            <h1 className="mb-2 text-[28px] sm:text-[32px] lg:text-[36px] font-semibold text-[var(--auth-title)]">
                Sign In
            </h1>

            <p className="mb-8 text-gray-500">
                Enter your email and password to sign in!
            </p>

            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                {/* Email */}
                <div>
                    <label className="mb-1 block text-sm font-medium text-[var(--auth-title)]">
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
                        <p className="mt-1 text-sm text-red-500">
                            {errors.email}
                        </p>
                    )}
                </div>

                {/* Password */}
                <div>
                    <label className="mb-1 block text-sm font-medium text-[var(--auth-title)]">
                        Password <span className="text-[var(--auth-required)]">*</span>
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
                        <p className="mt-1 text-sm text-red-500">
                            {errors.password}
                        </p>
                    )}
                </div>

                {/* Options */}
                <div className="flex items-center justify-between text-sm">
                    <label className="flex cursor-pointer items-center gap-2 text-[var(--auth-title)]">
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            className="h-4 w-4 rounded accent-[var(--forgot-password)]"
                        />
                        Keep me logged in
                    </label>

                    <a
                        href="#"
                        className="font-medium text-[var(--forgot-password)]"
                    >
                        Forget password?
                    </a>
                </div>

                {/* Button */}
                <Button type="submit">Sign In</Button>
            </form>

            <p className="mt-6 text-sm text-[var(--auth-title)]">
                Not registered yet?{" "}
                <Link
                    href="/sign-up"
                    className="font-bold text-[var(--forgot-password)]"
                >
                    Create an Account
                </Link>
            </p>
        </div>
    );
}
