import Card from "@/components/ui/Card";
import { UserActivity } from "@/types/dashboard";

const data: UserActivity[] = [
    { user: "ITSO-M-KITAMURA", hours: 7.8, tasks: ["Team Collaboration", "Email"] },
    { user: "INDO-M-KITAMURA", hours: 5.8, tasks: ["Email", "Team Collaboration"] },
];

export default function UserActivityTable() {
    return (
        <Card className="lg:col-span-2">
            <h3 className="font-semibold mb-4">User Activity Overview</h3>

            <table className="w-full text-sm">
                <thead className="text-gray-500 border-b">
                    <tr>
                        <th className="text-left py-2">User</th>
                        <th>Active Hours</th>
                        <th className="text-left">Main Tasks</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((row) => (
                        <tr key={row.user} className="border-b last:border-none">
                            <td className="py-3">{row.user}</td>
                            <td className="text-center">{row.hours}h</td>
                            <td>{row.tasks.join(", ")}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    );
}
