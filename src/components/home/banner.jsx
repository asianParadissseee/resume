import TypewriterComponent from "typewriter-effect";

const Banner = () => {
    return (
        <section id="home-banner" className="my-20">
            <div className="container mx-auto px-10">
                <div className="flex text-gray-300 font-bold flex-col gap-2">
                    <h1 className="text-8xl">
                        Hello everyone!
                    </h1>
                    <h2 className="ml-4 text-8xl">
                        I'am Dadashi
                    </h2>
                    <h3 className="ml-8 text-6xl gap-3 flex items-center">
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
        </section>
    );
};

export default Banner;