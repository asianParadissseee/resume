import TypewriterComponent from "typewriter-effect";
import { motion } from "framer-motion";
import BannerVideo from "@/commons/assets/videos/banner-video.mp4";
import { useAnimatedClipPath } from "@/commons/hooks/use-clippath";

const Banner = () => {
    const { motionProps, ref } = useAnimatedClipPath();

    return (
        <section id="home-banner" className="my-48 relative">
            <div  className="container mx-auto px-10">
                <div
                    className="flex whitespace-pre text-3xl sm:text-7xl lg:text-8xl text-zinc-800 dark:text-gray-300 font-bold flex-col gap-2"
                    ref={ref}
                >
                    <motion.div {...motionProps}>
                        <h1>
                            Hello everyone!
                        </h1>
                        <h2 className="ml-0 sm:ml-4">
                            I'm Dadashi
                        </h2>
                        <h3 className="ml-0 sm:ml-8 text-xl sm:text-5xl lg:text-6xl gap-3 flex items-center">
                            I'm
                            <TypewriterComponent
                                options={{
                                    strings: ["Software Engineer", "Designer", "Frontend Developer"],
                                    autoStart: true,
                                    loop: true
                                }}
                            />
                        </h3>
                    </motion.div>
                </div>
            </div>
            <div className="mt-36">
                <motion.video {...motionProps} autoPlay muted playsInline loop className="w-full h-full object-cover">
                    <source src={BannerVideo} type="video/mp4"/>
                </motion.video>
            </div>
        </section>
    );
};

export default Banner;
