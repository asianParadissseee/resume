const AppTooltip = () => {
    const word = "LINKEDIN"
    return (
        <div className="w-7 sm:w-10 min-h-40 sm:h-56 bg-white absolute right-0 p-3">
            <a href="" className=" flex flex-col justify-center font-black items-center">
                {word.split("").map((letter, id) => (
                    <span key={id}>{letter}</span>
                ))}
            </a>
        </div>
    );
};

export default AppTooltip;