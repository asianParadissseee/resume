import BaseLayout from "@/layouts/base-layout";
import Banner from "@/components/home/banner";
import TextBlock from "@/components/home/text-block";
import HorizontalText from "@/components/home/horizontal-text";
import WorkBlock from "@/components/home/work-block";

const HomePage = () => {
    return (
        <BaseLayout>
            <Banner/>
            <TextBlock/>
            <HorizontalText/>
            <WorkBlock/>
        </BaseLayout>
    );
};

export default HomePage;