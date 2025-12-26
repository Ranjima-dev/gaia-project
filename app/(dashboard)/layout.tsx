// import AppLayout from "@/components/layout/AppLayout";

// export default function DashboardLayout({
//     children,
// }: {
//     children: React.ReactNode;
// }) {
//     return <AppLayout>{children}</AppLayout>;
// }

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AppLayout from "@/components/layout/AppLayout";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("auth_token");

        if (!token) {
            router.replace("/sign-in");
        }
    }, []);

    return <AppLayout>{children}</AppLayout>;
}

