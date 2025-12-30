'use client';

import bgImg from "@/assets/auth/bg-auth.png";
import logoImg from "@/assets/auth/logo-img.png";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { t } = useTranslation();

    const handleLanguageChange = (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => {
        i18n.changeLanguage(e.target.value);
    };


    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-[#F6F8FC]">
            {/* Left */}
            <div className="relative flex flex-col px-6">
                <div className="absolute top-4 right-6">
                    <select
                        value={i18n.language}
                        onChange={handleLanguageChange}
                        className="px-3 py-2 text-sm font-medium text-gray-700 focus:outline-none"
                    >
                        <option value="en">English</option>
                        <option value="ja">日本語</option>
                    </select>
                </div>

                <div className="flex flex-1 items-center justify-center">
                    {children}
                </div>
            </div>

            {/* Right */}
            <div className="hidden lg:flex relative items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-[50%_20%] bg-no-repeat rounded-bl-[220px]"
                    style={{ backgroundImage: `url(${bgImg.src})` }}
                />

                <div className="relative z-10 flex flex-col items-center justify-center text-center">
                    <div className="w-28 h-28 flex items-center justify-center mb-8">
                        <Image
                            src={logoImg}
                            alt="Logo"
                            width={112}
                            height={112}
                            className="object-contain"
                            priority
                        />
                    </div>

                    <div className="border border-white/30 rounded-2xl px-6 py-3 backdrop-blur-md bg-white/10">
                        <p className="text-white font-medium">
                            RPA Opportunity Dashboard
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
