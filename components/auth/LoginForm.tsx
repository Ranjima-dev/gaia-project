"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="w-full max-w-md">
            <h1 className="text-[28px] sm:text-[32px] lg:text-[36px] font-semibold text-[var(--auth-title)] mb-2">
                Sign In
            </h1>
            <p className="text-gray-500 mb-8">
                Enter your email and password to sign in!
            </p>

            <form className="space-y-6">
                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-[var(--auth-title)] mb-1">
                        Email<span className="text-[var(--auth-required)]">*</span>
                    </label>
                    <input
                        type="email"
                        placeholder="mail@simmmple.com"
                        className="w-full rounded-full border border-[var(--input-border)] bg-transparent px-5 py-4 pr-12 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--button-primary)]"
                    />
                </div>

                {/* Password */}
                <div>
                    <label className="block text-sm font-medium text-[var(--auth-title)] mb-1">
                        Password<span className="text-[var(--auth-required)]">*</span>
                    </label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Min. 8 characters"
                            className="w-full rounded-full border border-[var(--input-border)] bg-transparent px-5 py-4 pr-12 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--button-primary)]"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                            {showPassword ? (
                                <Eye size={18} />
                            ) : (
                                <EyeOff size={18} />
                            )}
                        </button>
                    </div>
                </div>

                {/* Options */}
                <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 text-[var(--auth-title)]">
                        <input
                            type="checkbox"
                            className="h-4 w-4 rounded accent-[var(--forgot-password)]"
                        />
                        Keep me logged in
                    </label>

                    <a href="#" className="text-[var(--forgot-password)] font-medium">
                        Forget password?
                    </a>
                </div>

                {/* Button */}
                <Button>
                    Sign In
                </Button>
            </form>

            <p className="text-sm text-[var(--auth-title)] mt-6">
                Not registered yet?{" "}

                <Link href="/sign-up" className="text-[var(--forgot-password)] font-bold">

                    Create an Account
                </Link>

            </p>
        </div>
    );
}
