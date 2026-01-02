"use client";

import { X, Calendar } from "lucide-react";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import DateRangePicker from "@/components/date-picker/DateRangePicker";

type FilterModalProps = {
    open: boolean;
    onClose: () => void;
};

export default function FilterModal({ open, onClose }: FilterModalProps) {
    const [range, setRange] = useState<DateRange>();

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/30"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative z-10 w-[520px] rounded-2xl bg-white p-8">
                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 cursor-pointer"
                >
                    <X className="h-5 w-5" />
                </button>

                {/* Title */}
                <h2 className="text-[22px] font-semibold mb-8">
                    Filter
                </h2>

                {/* Field */}
                <div className="flex flex-col gap-3">
                    <label className="text-lg font-medium">
                        Select Date <span className="text-red-500">*</span>
                    </label>

                    <DateRangePicker value={range} onChange={setRange} />
                </div>

                {/* Action */}
                <div className="flex justify-center mt-8">
                    <button
                        onClick={onClose}
                        className="w-[280px] py-4 rounded-xl bg-[#465FFF] text-white text-lg font-medium hover:bg-indigo-700"
                    >
                        Apply
                    </button>
                </div>
            </div>
        </div>
    );
}
