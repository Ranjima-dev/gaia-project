type TaskInfoPillProps = {
    label: string;
    value: string;
};

export default function TaskInfoPill({ label, value }: TaskInfoPillProps) {
    return (
        <>
            <div className="rounded-3xl bg-[#F5F8FF] px-6 py-3">
                <p className="text-sm font-medium text-indigo-600 mb-2">
                    {label}
                </p>
                <p className="text-sm font-medium text-gray-800">
                    {value}
                </p>
            </div>
        </>

    );
}
