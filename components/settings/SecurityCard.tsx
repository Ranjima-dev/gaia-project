export default function SecurityCard() {
    return (
        <section className="space-y-3 px-4 py-6">
            <h2 className="text-base font-semibold text-gray-900">
                Security:
            </h2>

            <div className="bg-white rounded-xl p-6 flex flex-col gap-4">
                <span className="text-sm text-gray-700">
                    Manage Your Account Security Settings
                </span>

                <button className="self-start px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50">
                    Change Password
                </button>
            </div>
        </section>
    );
}
