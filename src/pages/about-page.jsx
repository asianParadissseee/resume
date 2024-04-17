import BaseLayout from "@/layouts/base-layout";
import BannerAbout from "@/components/about/banner-about";
import Helping from "@/components/about/helping";
import Stack from "@/components/about/stack";

const AboutPage = () => {
    return (
        <BaseLayout>
            <BannerAbout/>
            <Helping/>
            <Stack/>
        </BaseLayout>
    );
};

export default AboutPage;