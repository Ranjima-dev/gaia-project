import Sidebar from "./Sidebar";
import Header from "./Header";

export default function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-screen flex flex-col bg-[#F4F7FE] overflow-hidden">
            <Header />

            <div className="flex flex-1 gap-0 overflow-hidden">
                <Sidebar />
                <main className="flex-1 overflow-y-auto px-6 pb-6">
                    {children}
                </main>
            </div>

        </div>
    );
}
