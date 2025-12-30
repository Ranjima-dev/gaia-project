'use client';

import { useState } from "react";
import Card from "@/components/ui/Card";
import UserActivityHeader from "./UserActivityHeader";
import UserActivityRow from "./UserActivityRow";
import { UserActivityRow as Row } from "@/types/user-activity";

const rows: Row[] = [
    {
        id: "1",
        user: "ITSO-M-KITAMURA",
        hours: "7.8h",
        tasks: "Team Collaboration, Email Communication",
        efficiency: "12.0%",
        apps: "Teams, Outlook, Excel",
        candidates: 4,
    },
    {
        id: "2",
        user: "INDO-M-KITAMURA",
        hours: "5.8h",
        tasks: "Team Collaboration, Email Communication",
        efficiency: "23.0%",
        apps: "Explorer, Excel, Teams",
        candidates: 2,
    },
    {
        id: "3",
        user: "LAPTOP-C448JNE5",
        hours: "6.9h",
        tasks: "File Management, Report Export",
        efficiency: "23.0%",
        apps: "Explorer, Excel, Teams",
        candidates: 4,
    },
    {
        id: "4",
        user: "LAPTOP-S448JNE5",
        hours: "10.9h",
        tasks: "File Management, Report Export",
        efficiency: "23.0%",
        apps: "Explorer, Excel, Teams",
        candidates: 1,
    },
];

export default function UserActivityTable() {
    const [selected, setSelected] = useState<string[]>([]);

    const allSelected = selected.length === rows.length;

    const toggleAll = () => {
        setSelected(allSelected ? [] : rows.map(r => r.id));
    };

    const toggleOne = (id: string) => {
        setSelected(prev =>
            prev.includes(id)
                ? prev.filter(i => i !== id)
                : [...prev, id]
        );
    };

    return (
        <Card className="p-0 overflow-hidden">
            <div className="overflow-x-auto">
                <table className="min-w-[1100px] w-full table-fixed border-collapse">
                    <colgroup>
                        <col className="w-[2%]" />
                        <col className="w-[10%]" />  
                        <col className="w-[8%]" />   
                        <col className="w-[10%]" /> 
                        <col className="w-[10%]" />  
                        <col className="w-[10%]" />  
                        <col className="w-[10%]" /> 
                    </colgroup>
                    <UserActivityHeader
                        allSelected={allSelected}
                        onToggleAll={toggleAll}
                    />
                    <tbody className="text-sm">
                        {rows.map(row => (
                            <UserActivityRow
                                key={row.id}
                                row={row}
                                selected={selected.includes(row.id)}
                                onToggle={() => toggleOne(row.id)}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
}
