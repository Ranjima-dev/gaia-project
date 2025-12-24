"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Button from "@/components/ui/Button";

export default function SignUpForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="w-full max-w-md">
            {/* Heading */}
            <h1 className="mb-2 text-[28px] sm:text-[32px] lg:text-[36px] font-semibold text-[var(--auth-title)]">
                Create Account
            </h1>

            <p className="mb-8 text-[16px] text-[var(--auth-subtitle)]">
                Enter your email and create password to sign up!
            </p>

            <form className="space-y-6">
                {/* Email */}
                <div>
                    <label className="mb-2 block text-[14px] font-medium text-[var(--auth-title)]">
                        Email
                        <span className="ml-1 text-[var(--auth-required)]">*</span>
                    </label>

                    <input
                        type="email"
                        placeholder="mail@simple.com"
                        className="w-full rounded-full border border-[var(--input-border)] bg-transparent px-5 py-4 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--button-primary)]"
                    />
                </div>

                {/* Create Password */}
                <div>
                    <label className="mb-2 block text-[14px] font-medium text-[var(--auth-title)]">
                        Create Password
                        <span className="ml-1 text-[var(--auth-required)]">*</span>
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
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200"
                            aria-label="Toggle password visibility"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                </div>

                {/* Confirm Password */}
                <div>
                    <label className="mb-2 block text-[14px] font-medium text-[var(--auth-title)]">
                        Confirm Password
                        <span className="ml-1 text-[var(--auth-required)]">*</span>
                    </label>

                    <div className="relative">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Min. 8 characters"
                            className="w-full rounded-full border border-[var(--input-border)] bg-transparent px-5 py-4 pr-12 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--button-primary)]"
                        />

                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200"
                            aria-label="Toggle confirm password visibility"
                        >
                            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                </div>

                {/* Keep me logged in */}
                <label className="flex cursor-pointer items-center gap-3 text-sm text-[var(--auth-subtitle)]">
                    <input
                        type="checkbox"
                        className="h-4 w-4 rounded accent-[var(--forgot-password)]"
                    />
                    Keep me logged in
                </label>

                {/* Submit */}
                <Button>
                    Create Account
                </Button>
            </form>
        </div>
    );
}
