import ParallaxText from "../ui/parallax-text";

const WorkBlock = () => {
    const blocks = [
        {
            name: "Royal",
            stack: "NextJs, Framer Motion, Scss",
            bgColor: "bg-gray-900",
            textColor: "text-gray-300",
            bgImg: "",
        },
        {
            name: "adrasteai",
            stack: "React, Tailwindcss, Framer Motion",
            bgColor: "bg-gray-600",
            textColor: "text-zinc-800",
            bgImg: "",
        },
        {
            name: "kili",
            stack: "Html, Javascript, Tailwindcss",
            bgColor: "bg-gray-400",
            textColor: "text-zinc-800",
            bgImg: "",
        },
    ]
    return (
        <section className="min-h-svh mt-96">
            <ParallaxText baseVelocity={4}>
                <p className="text-7xl sm:text-9xl ml-4 text-zinc-800 text-center dark:text-gray-300">
                    WORK
                </p>
            </ParallaxText>
            <ParallaxText baseVelocity={-4}>
                <p className="text-7xl sm:text-9xl ml-4 text-zinc-800 text-center dark:text-gray-300">
                    WORK
                </p>
            </ParallaxText>
            <div className="container mx-auto px-10 mt-36">
                {blocks.map(block => (
                    <div className={`w-full text-center rounded-2xl py-10 h-svh ${block.textColor} ${block.bgColor}`}>
                        <p className={`font-semibold  text-6xl mb-10`}>
                            {block.name.toUpperCase()}
                        </p>
                        <span className={`font-normal text-base`}>
                            <b>Stack: </b>{block.stack}
                        </span>
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center my-10">
                <button
                    className="px-12 py-4 bg-transparent border hover:bg-zinc-800 hover:text-gray-300 dark:hover:text-zinc-800 dark:hover:bg-gray-300  transition duration-500 rounded-full dark:text-white text-zinc-800 dark:border-gray-300 border-black">
                    See all projects
                </button>
            </div>
        </section>
    );
};

export default WorkBlock;