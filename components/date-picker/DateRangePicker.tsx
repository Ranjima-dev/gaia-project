"use client";

import { useState } from "react";
import { DayPicker, DateRange } from "react-day-picker";
import { format, addDays } from "date-fns";
import { Calendar, ChevronDown } from "lucide-react";
import "react-day-picker/dist/style.css";

type Props = {
    value?: DateRange;
    onChange: (range: DateRange | undefined) => void;
};

export default function DateRangePicker({ value, onChange }: Props) {
    const [open, setOpen] = useState(false);
    const range: DateRange = value ?? {
        from: new Date(),
        to: addDays(new Date(), 1),
    };


    return (
        <div className="relative">
            <button
                onClick={() => setOpen(!open)}
                className="flex w-full items-center gap-4 rounded-xl border border-gray-300 px-5 py-4"
            >
                <Calendar className="h-6 w-6 text-gray-600" />
                <span className="text-md font-medium">
                    {range.from && range.to
                        ? `${format(range.from, "MMM d")} – ${format(range.to, "MMM d")}`
                        : "Select date"}
                </span>
            </button>

            {open && (
                <div className="absolute left-0 top-[50%] z-50 rounded-2xl bg-white p-6 shadow-xl">
                    <DayPicker
                        mode="range"
                        selected={value}
                        onSelect={onChange}
                        numberOfMonths={1}
                        weekStartsOn={1}
                        modifiersClassNames={{
                            selected: "bg-[#4318FF] text-[#4318FF]",
                            range_start: "bg-[#4318FF] text-white rounded-full",
                            range_end: "bg-[#4318FF] text-white rounded-full",
                            range_middle: "bg-[#F4F7FE] text-[#4318FF]",
                        }}
                        className="custom-calendar"
                    />
                </div>
            )}
        </div>
    );
}
