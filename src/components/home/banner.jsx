import TypewriterComponent from "typewriter-effect";
import BannerVideo from "@/commons/assets/videos/banner-video.mp4"

const Banner = () => {
    return (
        <section id="home-banner" className="my-20 relative">
            <div className="container mx-auto px-10 my-10">
                <div
                    className="flex whitespace-pre text-3xl static sm:text-7xl lg:text-8xl text-gray-300 font-bold flex-col gap-2">
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
                </div>
            </div>
            <div>
                <video autoPlay src={BannerVideo} loop className="w-full">
                </video>
            </div>
        </section>
    );
};

export default Banner;