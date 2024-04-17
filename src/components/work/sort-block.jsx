const SortBlock = ({isLine, sortLines, sortBlocks, handleSortBlocks}) => {
    return (
        <div className="flex-row hidden sm:flex justify-end gap-10 items-center">
            <div
                className={`rounded-full w-14 h-14 ${isLine ? " bg-gray-300" : "bg-zinc-800"} flex flex-col gap-1 justify-center items-center`}
                onClick={handleSortBlocks}>
                {
                    sortLines.map((line, id) => (
                        <span className={`w-6 h-0.5 ${!isLine ? "bg-gray-300" : "bg-zinc-800"}`}
                              key={id}></span>
                    ))
                }
            </div>
            <div
                className={`rounded-full w-14 h-14 ${!isLine ? " bg-gray-300" : "bg-zinc-800"}  flex justify-center items-center`}
                onClick={handleSortBlocks}>
                <div className="w-5 h-5 grid grid-cols-2 gap-0.5 place-items-center">
                    {
                        sortBlocks.map((line, id) => (
                            <span
                                className={`w-2 h-2 ${isLine ? "border-gray-300" : "border-zinc-800"} bg-transparent  border `}
                                key={id}></span>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default SortBlock;