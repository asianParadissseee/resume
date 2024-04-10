import TypewriterComponent from "typewriter-effect";
import BannerVideo from "@/commons/assets/videos/banner-video.mp4"
import {useEffect, useRef} from "react";

const Banner = () => {

    const videoRef = useRef(null);
    const titlesRef = useRef(null);
    useEffect(() => {
        const checkScroll = () => {
            if (videoRef.current && titlesRef.current) {
                const videoRect = videoRef.current.getBoundingClientRect();
                const titlesRect = titlesRef.current.getBoundingClientRect();
                const videoTop = videoRect.top;
                const videoBottom = videoRect.bottom;
                const titlesTop = titlesRect.top;

                if (titlesTop <= videoBottom) {
                    titlesRef.current.classList.add('fixed');
                    titlesRef.current.classList.add('block');
                    titlesRef.current.classList.remove('hidden');
                    titlesRef.current.classList.remove('static');
                } else {
                    titlesRef.current.classList.add('static');
                    titlesRef.current.classList.add('hidden');
                    titlesRef.current.classList.remove('block');
                    titlesRef.current.classList.remove('fixed');
                }
                if (titlesTop <= videoTop) {
                    titlesRef.current.classList.add('text-gray-300');
                    titlesRef.current.classList.remove('text-red-300');
                } else {
                    titlesRef.current.classList.add('text-red-300');
                    titlesRef.current.classList.remove('text-gray-300');
                }
            }
        };

        window.addEventListener('scroll', checkScroll);

        return () => window.removeEventListener('scroll', checkScroll);
    }, []);


    return (
        <section id="home-banner" className="my-48 relative">
            <div className="container mx-auto px-10 mb-48">
                <div
                    className="flex whitespace-pre  text-3xl sm:text-7xl lg:text-8xl text-gray-300 font-bold flex-col gap-2">
                    <div ref={titlesRef} className="fixed">
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
            </div>
            <div className="mt-96" ref={videoRef}>
                <video autoPlay muted src={BannerVideo} loop className="w-full h-full object-cover"></video>
            </div>
        </section>
    );
};

export default Banner;