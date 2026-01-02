"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Card from "@/components/ui/Card";

type Errors = {
    oldPassword?: string;
    newPassword?: string;
    confirmPassword?: string;
};

export default function ChangePasswordPage() {
    const [showOld, setShowOld] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [errors, setErrors] = useState<Errors>({});

    const handleSubmit = () => {
        const newErrors: Errors = {};

        if (!oldPassword.trim()) {
            newErrors.oldPassword = "Old password is required";
        }

        if (!newPassword.trim()) {
            newErrors.newPassword = "Password is required";
        } else if (newPassword.length < 8) {
            newErrors.newPassword = "Minimum 8 characters required";
        }

        if (!confirmPassword.trim()) {
            newErrors.confirmPassword = "Please confirm your password";
        } else if (newPassword !== confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return;

        // ✅ API call goes here
        console.log("Change password submit");
    };

    return (
        <div className="px-6 py-8">
            <Card variant="flat" className="max-w-lg">
                <h1 className="mb-8 text-xl font-semibold text-indigo-900">
                    Change Password
                </h1>

                <div className="space-y-8 bg-[#F4F6FF] px-5 py-8">
                    {/* Old Password */}
                    <div>
                        <label className="block mb-2 text-md font-medium text-indigo-900">
                            Old Password<span className="text-red-500">*</span>
                        </label>

                        <div className="relative">
                            <input
                                type={showOld ? "text" : "password"}
                                value={oldPassword}
                                onChange={(e) => {
                                    setOldPassword(e.target.value);
                                    setErrors((prev) => ({ ...prev, oldPassword: undefined }));
                                }}
                                placeholder="Type your password"
                                className={`w-full rounded-md border px-5 py-4 pr-12 text-md bg-white focus:outline-none focus:ring-2
                                    ${errors.oldPassword
                                        ? "border-red-500 focus:ring-red-500"
                                        : "border-[#E4E7EB] focus:ring-indigo-500"
                                    }`}
                            />
                            <button
                                type="button"
                                onClick={() => setShowOld(!showOld)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                            >
                                {showOld ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>

                        {errors.oldPassword && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.oldPassword}
                            </p>
                        )}
                    </div>

                    {/* New Password */}
                    <div>
                        <label className="block mb-2 text-md font-medium text-indigo-900">
                            Create Password<span className="text-red-500">*</span>
                        </label>

                        <div className="relative">
                            <input
                                type={showNew ? "text" : "password"}
                                value={newPassword}
                                onChange={(e) => {
                                    setNewPassword(e.target.value);
                                    setErrors((prev) => ({ ...prev, newPassword: undefined }));
                                }}
                                placeholder="Min. 8 characters"
                                className={`w-full rounded-xl border px-5 py-4 pr-12 text-md bg-white focus:outline-none focus:ring-2
                                    ${errors.newPassword
                                        ? "border-red-500 focus:ring-red-500"
                                        : "border-[#E4E7EB] focus:ring-indigo-500"
                                    }`}
                            />
                            <button
                                type="button"
                                onClick={() => setShowNew(!showNew)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                            >
                                {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>

                        {errors.newPassword && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.newPassword}
                            </p>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block mb-2 text-md font-medium text-indigo-900">
                            Confirm Password<span className="text-red-500">*</span>
                        </label>

                        <div className="relative">
                            <input
                                type={showConfirm ? "text" : "password"}
                                value={confirmPassword}
                                onChange={(e) => {
                                    setConfirmPassword(e.target.value);
                                    setErrors((prev) => ({ ...prev, confirmPassword: undefined }));
                                }}
                                placeholder="Min. 8 characters"
                                className={`w-full rounded-xl border px-5 py-4 pr-12 text-md bg-white focus:outline-none focus:ring-2
                                    ${errors.confirmPassword
                                        ? "border-red-500 focus:ring-red-500"
                                        : "border-[#E4E7EB] focus:ring-indigo-500"
                                    }`}
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirm(!showConfirm)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                            >
                                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>

                        {errors.confirmPassword && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.confirmPassword}
                            </p>
                        )}
                    </div>

                    {/* Actions */}
                    <div className="flex justify-end pt-6">
                        <button
                            onClick={handleSubmit}
                            className="px-8 py-3 rounded-md bg-[#465FFF] text-white hover:bg-indigo-700"
                        >
                            Save Changes
                        </button>
                    </div>
                </div>
            </Card>
        </div>
    );
}
