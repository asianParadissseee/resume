import ParallaxText from "../ui/parallax-text";

const WorkBlock = () => {
    return (
        <section className="min-h-svh mt-96">
            <ParallaxText baseVelocity={4}>
                <p className="text-9xl ml-4 text-zinc-800 text-center dark:text-gray-300">
                    WORK
                </p>
            </ParallaxText>
            <ParallaxText baseVelocity={-4}>
                <p className="text-9xl ml-4 text-zinc-800 text-center dark:text-gray-300">
                    WORK
                </p>
            </ParallaxText>
            <div className="container mx-auto px-10">

            </div>
        </section>
    );
};

export default WorkBlock;