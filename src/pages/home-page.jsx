import BaseLayout from "@/layouts/base-layout";
import Banner from "@/components/home/banner";
import ScrollText from "@/components/home/scroll-text";

const HomePage = () => {
    return (
        <BaseLayout>
            <Banner/>
            <div className="mx-auto container px-10 flex justify-start sm:justify-end">
                <h4 className="text-xl sm:text-3xl lg:text-5xl xl:text-7xl text-white">
                    Helping brands to stand out in <br/> the digital era through a <br/> human centered
                    design <br/> approach to turn ideas
                    into <br/> interactive experiences."
                </h4>
            </div>
            <ScrollText/>
        </BaseLayout>
    );
};

export default HomePage;