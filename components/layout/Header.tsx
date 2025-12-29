"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { Bell } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n";
import { PAGE_TITLES } from "@/lib/pageTitles";

export default function Header() {
    const pathname = usePathname();
    const { t } = useTranslation();

    const titleKey = PAGE_TITLES[pathname] ?? "dashboard.title";

    const toggleLanguage = () => {
        const nextLang = i18n.language === "en" ? "ja" : "en";
        i18n.changeLanguage(nextLang);
    };

    return (
        <header className="h-16 px-6 flex items-center justify-between mb-0">
            {/* Left */}
            <div className="flex items-center gap-4">
                <div className="px-4 py-2 bg-white rounded-md w-[280px]">
                    <span className="text-indigo-600 font-semibold">
                        {t("app.title")}
                    </span>
                </div>

                <h1 className="text-lg font-semibold text-gray-900">
                    {t(titleKey)}
                </h1>
            </div>

            {/* Right */}
            <div className="flex items-center gap-3">
                <button className="h-10 w-10 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50">
                    <Bell className="h-5 w-5 text-gray-600" />
                </button>

                <div className="px-4 py-2 border rounded-lg text-sm text-gray-600">
                    {t("app.lastUpdated", { date: "2025-10-10" })}
                </div>

                <button className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50">
                    {t("header.filter")}
                </button>

                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                    {t("header.export")}
                </button>

                {/* Language Toggle */}
                <button
                    onClick={toggleLanguage}
                    title={
                        i18n.language === "en"
                            ? "Switch to Japanese"
                            : "Switch to English"
                    }
                    className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer"
                >
                    <Image
                        src="/lang-toggle.png"
                        alt="Language toggle"
                        width={50}
                        height={50}
                        className="object-contain"
                    />
                </button>
            </div>
        </header>
    );
}
