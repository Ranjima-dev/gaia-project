// components/layout/AppLayout.tsx
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-screen flex flex-col bg-[#F4F7FE] overflow-hidden">
            {/* HEADER (FULL WIDTH) */}
            <Header />

            {/* BODY */}
            <div className="flex flex-1 overflow-hidden">
                {/* SIDEBAR */}
                <Sidebar />

                {/* MAIN CONTENT */}
                <main className="flex-1 overflow-y-auto p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
