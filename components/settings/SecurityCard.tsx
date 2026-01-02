'use client';

import { useRouter } from "next/navigation";

export default function SecurityCard() {
    const router = useRouter();
    return (
        <section className="space-y-3 px-4 pb-4">
            <h2 className="text-base font-semibold text-gray-900">
                Security:
            </h2>

            <div className="bg-[#465FFF0F] rounded-xl p-6 flex flex-col gap-4">
                <span className="text-sm text-gray-700">
                    Manage Your Account Security Settings
                </span>

                <button onClick={() => router.push("/settings/change-password")} className="self-start px-4 py-2 border border-indigo-600 bg-white text-indigo-600 rounded-md hover:bg-indigo-50 cursor-pointer">
                    Change Password
                </button>
            </div>
        </section>
    );
}
