const AppTooltip = () => {
    const word = "LINKEDIN"
    return (
        <div className="w-7 sm:w-10 min-h-40 sm:h-56 z-30  dark:bg-white bg-black absolute right-0 p-3">
            <a href="https://linkedin.com" className="flex flex-col justify-center text-white dark:text-zinc-800 font-black items-center">
                {word.split("").map((letter, id) => (
                    <span key={id}>{letter}</span>
                ))}
            </a>
        </div>
    );
};

export default AppTooltip;