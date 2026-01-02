"use client";

import { Calendar, Image as ImageIcon, ChevronDown, X } from "lucide-react";
import { useRef, useState } from "react";

export default function PersonalInformationCard() {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [preview, setPreview] = useState<string | null>(null);

    return (
        <section className="space-y-3 bg-white px-4 py-6">
            <h2 className="text-base font-semibold text-gray-900">
                Personal Information:
            </h2>

            <div className="bg-[#465FFF0F] rounded-xl p-6">
                <div className="grid grid-cols-[220px_1fr] gap-8">
                    {/* Left – Profile Photo */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="relative h-24 w-24 object-cover rounded-full bg-[#EBE9E9] flex items-center justify-center">
                            {preview ? (
                                <>
                                    <img
                                        src={preview}
                                        alt="Profile"
                                        className="h-full w-full object-cover rounded-full bg-[#EBE9E9] flex items-center justify-center overflow-hidden"
                                    />

                                    {/* Clear Image */}
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setPreview(null);
                                            if (fileInputRef.current) {
                                                fileInputRef.current.value = "";
                                            }
                                        }}
                                        className="absolute -top-2 right-1 z-100 rounded-full bg-white p-1 shadow hover:bg-gray-100"
                                    >
                                        <X className="h-3 w-3 text-gray-600" />
                                    </button>
                                </>
                            ) : (
                                <ImageIcon className="h-8 w-8 text-gray-500" />
                            )}
                        </div>
                        <button
                            onClick={() => fileInputRef.current?.click()}
                            className="px-4 py-2 bg-[#EBE9E9] text-sm rounded-md text-gray-800 hover:bg-gray-200"
                        >
                            Change Photo
                        </button>
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (!file) return;

                                const imageUrl = URL.createObjectURL(file);
                                setPreview(imageUrl);
                            }}
                        />
                    </div>

                    {/* Right – Form */}
                    <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                        {/* Name */}
                        <div>
                            <label className="text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                defaultValue="Peter"
                                className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 text-sm bg-white"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-medium text-gray-700">
                                    Email*
                                </label>
                                <button className="text-sm text-indigo-600 hover:underline">
                                    Verify Email
                                </button>
                            </div>
                            <input
                                defaultValue="hello@designdrops.io"
                                className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 text-sm bg-white"
                            />
                        </div>

                        {/* Birthday */}
                        <div>
                            <label className="text-sm font-medium text-gray-700">
                                Birthday
                            </label>
                            <div className="relative">
                                <input
                                    defaultValue="09-07-1990"
                                    className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 pr-10 text-sm bg-white"
                                />
                                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                            </div>
                        </div>

                        {/* Country */}
                        <div>
                            <label className="text-sm font-medium text-gray-700">
                                Country
                            </label>
                            <div className="relative">
                                <select className="mt-1 w-full appearance-none rounded-md border border-gray-200 px-3 py-2 pr-10 text-sm bg-white">
                                    <option>Japan</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                            </div>
                        </div>

                        {/* User ID */}
                        <div>
                            <label className="text-sm font-medium text-gray-700">
                                User Id
                            </label>
                            <input
                                disabled
                                value="e7fbe9883d6746458a6facfd70fdf09d"
                                className="mt-1 w-full rounded-md border border-gray-200 bg-gray-100 px-3 py-2 text-sm text-gray-400 bg-[#F9FAFB]"
                            />
                        </div>

                        {/* Gender */}
                        <div>
                            <label className="text-sm font-medium text-gray-700">
                                Gender
                            </label>
                            <div className="relative">
                                <select className="mt-1 w-full appearance-none rounded-md border border-gray-200 px-3 py-2 pr-10 text-sm bg-white">
                                    <option>Female</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                            </div>
                        </div>

                        {/* Save Button */}
                        <div className="col-span-2 flex justify-end pt-2">
                            <button className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
