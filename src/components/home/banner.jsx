import TypewriterComponent from "typewriter-effect";
import {motion} from "framer-motion";
import BannerVideo from "@/commons/assets/videos/banner-video.mp4"

const Banner = () => {

    const variants = {
        initial: {
            clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)'
        },
        whileInView: {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
        }
    };

    return (
        <section id="home-banner" className="my-48 relative">
            <div className="container mx-auto px-10">
                <div
                    className="flex whitespace-pre text-3xl sm:text-7xl lg:text-8xl text-gray-300 font-bold flex-col gap-2">
                    <motion.div
                        initial={{
                            y: 20,
                            opacity: 0,
                            clipPath: variants.initial.clipPath
                        }}
                        whileInView={{
                            y: 0,
                            opacity: 1,
                            clipPath: variants.whileInView.clipPath
                        }}
                        viewport={{
                            once: true
                        }}
                        transition={{duration: 2, ease: 'easeInOut'}}>
                        <h1>
                            Hello everyone!
                        </h1>
                        <h2 className="ml-0 sm:ml-4">
                            I'am Dadashi
                        </h2>
                        <h3 className="ml-0 sm:ml-8 text-xl sm:text-5xl lg:text-6xl gap-3 flex items-center">
                            I'am
                            <TypewriterComponent
                                options={{
                                    strings: ["Software Engineer", "Designer", "Frontend Developer"],
                                    autoStart: true,
                                    loop: true
                                }}/>
                        </h3>
                    </motion.div>
                </div>
            </div>
            <div className="mt-36">
                <video autoPlay muted playsInline loop className="w-full h-full object-cover">
                    <source src={BannerVideo} type="video/mp4"/>
                </video>
            </div>
        </section>
    );
};

export default Banner;