import {motion} from "framer-motion";
import {useAnimatedClipPath} from "@/commons/hooks/use-clippath";

const Helping = () => {

    const { motionProps, ref } = useAnimatedClipPath();


    const blocks = [
        {
            title: "Design",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam cum delectus deleniti doloremque esse eveniet incidunt nesciunt optio quae.\n"
        },
        {
            title: "Build",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam cum delectus deleniti doloremque esse eveniet incidunt nesciunt optio quae.\n"
        },
        {
            title: "Grow",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam cum delectus deleniti doloremque esse eveniet incidunt nesciunt optio quae.\n"
        }
    ]

    return (
        <section className="my-36">
            <div ref={ref} className="container mx-auto px-10">
                <motion.h2 {...motionProps} className="text-5xl text-zinc-800 dark:text-gray-300">
                    I can help you with...
                </motion.h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center my-20">
                {
                    blocks.map((block, id) => (
                        <div
                            key={id}
                            className="p-10 sm:p-20 text-white border  dark:border-gray-300 w-full flex flex-col gap-4 min-h-80 border-zinc-800">
                            <strong className="text-zinc-800 text-sm dark:text-gray-300">{"0" + (id + 1)}</strong>
                            <p className="text-zinc-800  transition-all duration-500 dark:hover:text-white hover:text-black text-4xl sm:text-6xl font-bold dark:text-gray-300">{block.title}</p>
                            <span
                                className="text-zinc-800 transition-all duration-500 dark:hover:text-white hover:text-black  text-sm sm:text-lg dark:text-gray-300">
                                {block.description}
                            </span>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Helping;