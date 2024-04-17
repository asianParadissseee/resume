import BaseLayout from "@/layouts/base-layout";
import BannerAbout from "../components/about/banner-about";
import Helping from "../components/about/helping";

const AboutPage = () => {
    return (
        <BaseLayout>
            <BannerAbout/>
            <Helping/>
        </BaseLayout>
    );
};

export default AboutPage;