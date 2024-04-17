import {motion} from "framer-motion";
import MePhoto from "@/commons/assets/images/me.jpg"
import AnimatedTextCharacter from "../ui/animated-text";
import {useAnimatedClipPath} from "@/commons/hooks/use-clippath";

const BannerAbout = () => {

    const text = "I'm a Frontend Developer with a passion for creating products that not only look good but also solve real problems. When I'm not sketching ideas on paper, you  can find me binge-watching a Anime series or playing  video games. My develop philosophy is simple: make it  visually appealing, functional, and bring a smile to people's faces.I'm the developer you want on your team if you want to make people say 'I need that in my life! My future goal is to become the best software engineer"
    const {motionProps, ref} = useAnimatedClipPath();


    return (
        <section className="my-48 min-h-svh">
            <div
                className="container mx-auto px-10 flex flex-col-reverse gap-10 md:flex-row-reverse justify-between items-center">
                <div ref={ref}>
                    <motion.img {...motionProps} src={MePhoto} className="rounded-full w-80  h-80 object-cover"
                                alt="человек фотающий себя перед зеркалом на айфон"/>
                </div>
                <div className="text-zinc-800 dark:text-gray-300 text-xs sm:text-base">
                    <AnimatedTextCharacter
                        text={text}/>
                </div>
            </div>
        </section>
    );
};

export default BannerAbout;