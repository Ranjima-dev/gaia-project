import bgImg from "@/assets/auth/bg-auth.png"
import logoImg from "@/assets/auth/logo-img.png"
import Image from "next/image";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-[#F6F8FC]">
            {/* Left */}
            <div className="flex items-center justify-center px-6">
                {children}
            </div>

            {/* Right */}
            <div className="hidden lg:flex relative items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-[50%_20%] bg-no-repeat rounded-bl-[220px]"
                    style={{ backgroundImage: `url(${bgImg.src})` }}
                />


                <div className="relative z-10 flex flex-col items-center justify-center text-center">
                    <div className="w-28 h-28 flex items-center justify-center mb-8">
                        <Image
                            src={logoImg}
                            alt="Logo"
                            width={112}
                            height={112}
                            className="object-contain"
                            priority
                        />
                    </div>

                    <div className="border border-white/30 rounded-2xl px-6 py-3 backdrop-blur-md bg-white/10">
                        <p className="text-white font-medium">
                            RPA Opportunity Dashboard
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
