export function LoadingState() {
    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center animate-pulse">
                <div className="h-10 w-32 bg-gray-200 rounded" />
                <div className="h-10 w-32 bg-gray-200 rounded" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="border rounded-lg p-4 space-y-3 animate-pulse"
                    >
                        <div className="h-6 bg-gray-200 rounded w-3/4" />
                        <div className="h-4 bg-gray-200 rounded w-1/2" />
                        <div className="space-y-2">
                            <div className="h-4 bg-gray-200 rounded w-full" />
                            <div className="h-4 bg-gray-200 rounded w-full" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
