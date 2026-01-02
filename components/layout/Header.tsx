"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Bell } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n";
import { PAGE_TITLES } from "@/lib/pageTitles";
import FilterModal from "@/components/filter/FilterModal";

export default function Header() {
    const pathname = usePathname();
    const { t } = useTranslation();
    const [openFilter, setOpenFilter] = useState(false);

    const titleKey =
        Object.entries(PAGE_TITLES).find(([path]) =>
            pathname === path || pathname.startsWith(`${path}/`)
        )?.[1] ?? "dashboard.title";

    const toggleLanguage = () => {
        const nextLang = i18n.language === "en" ? "ja" : "en";
        i18n.changeLanguage(nextLang);
    };

    return (
        <>
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
                    <button className="h-10 w-10 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 bg-white">
                        <Bell className="h-5 w-5 text-gray-600" />
                    </button>

                    <div className="h-[42px] px-4 border border-[#EBEBEB] rounded-lg text-sm flex items-center text-gray-600 bg-white">
                        {t("app.lastUpdated", { date: "2025-10-10" })}
                    </div>

                    {/* FILTER BUTTON */}
                    <button
                        onClick={() => setOpenFilter(true)}
                        className="h-[42px] px-4 border border-[#465FFF] text-[#465FFF] rounded-md hover:bg-indigo-50 bg-white"
                    >
                        {t("dashboard.filter")}
                    </button>

                    <button className="h-[42px] px-4 bg-[#465FFF] text-white rounded-md hover:bg-indigo-700">
                        {t("dashboard.export")}
                    </button>

                    {/* Language Toggle */}
                    <button
                        onClick={toggleLanguage}
                        className="h-10 w-10 flex items-center justify-center rounded-lg"
                    >
                        <Image
                            src="/lang-toggle.png"
                            alt="Language toggle"
                            width={50}
                            height={50}
                        />
                    </button>
                </div>
            </header>

            {/* FILTER MODAL */}
            <FilterModal
                open={openFilter}
                onClose={() => setOpenFilter(false)}
            />
        </>
    );
}
