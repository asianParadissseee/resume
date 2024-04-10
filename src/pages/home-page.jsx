import BaseLayout from "@/layouts/base-layout";
import Banner from "@/components/home/banner";
import ScrollText from "@/components/home/scroll-text";
import TextBlock from "@/components/home/text-block";

const HomePage = () => {
    return (
        <BaseLayout>
            <Banner/>
            <TextBlock/>
            <ScrollText/>
        </BaseLayout>
    );
};

export default HomePage;