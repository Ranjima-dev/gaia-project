type Props = {
    allSelected: boolean;
    onToggleAll: () => void;
};

export default function UserActivityHeader({
    allSelected,
    onToggleAll,
}: Props) {
    return (
        <thead className="border-b-2 border-b-[#F2F4F7]">
            <tr className="text-xs font-medium text-[var(--button-primary)] whitespace-nowrap">
                <th className="px-3 py-4">
                    <input
                        type="checkbox"
                        checked={allSelected}
                        onChange={onToggleAll}
                        className="h-4 w-4"
                    />
                </th>
                <th className="px-3 py-4 text-left">User / Computer</th>
                <th className="px-3 py-4 text-left">Active Hours</th>
                <th className="px-3 py-4 text-left">Main Tasks</th>
                <th className="px-3 py-4 text-left">
                    Low Efficiency Ratio
                </th>
                <th className="px-3 py-4 text-left">Top Apps</th>
                <th className="px-3 py-4 text-left">
                    Automation Candidates
                </th>
            </tr>
        </thead>
    );
}
