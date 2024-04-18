import {Fragment, useCallback} from "react";
import ParallaxText from "../ui/parallax-text";
import {useNavigate} from "react-router-dom";
import WorkCard from "../ui/work-card";
import {getRouterWork} from "../../commons/const/router-path";
import Kili from "@/commons/assets/images/kili-img.png"
import Adrasteai from "@/commons/assets/images/adrasteai-img.png"
import Royal from "@/commons/assets/images/royal-img.png"
import AppButton from "../ui/app-button";

const WorkBlock = () => {
    const navigate = useNavigate()
    const handleSeeProjects = useCallback(() => {
        navigate(getRouterWork())
    }, [])

    const blocks = [
        {
            name: "Royal",
            stack: "NextJs, Framer Motion, Scss",
            bgColor: "bg-gray-900",
            textColor: "text-gray-300",
            href: "https://royal-gamma.vercel.app/",
            imgUrl: Royal
        },
        {
            name: "adrasteai",
            stack: "React, Tailwindcss, Framer Motion",
            bgColor: "bg-gray-600",
            textColor: "text-gray-300",
            href: "https://adrasteai.netlify.app/",
            imgUrl: Adrasteai
        },
        {
            name: "kili",
            stack: "Html, Javascript, Tailwindcss",
            bgColor: "bg-gray-400",
            textColor: "text-zinc-800",
            href: "https://kili.kg",
            imgUrl: Kili
        },
    ];

    return (
        <section className="min-h-svh my-96">
            <ParallaxText baseVelocity={4}>
                <p className="text-7xl sm:text-9xl ml-4 text-zinc-800 text-center dark:text-gray-300">{"my projects".toUpperCase()}</p>
            </ParallaxText>
            <ParallaxText baseVelocity={-4}>
                <p className="text-7xl sm:text-9xl ml-4 text-zinc-800 text-center dark:text-gray-300">My Projects</p>
            </ParallaxText>
            <div className="container mx-auto min-h-svh px-10 mt-36">
                {blocks.map((block, id) => (
                    <Fragment key={id}>
                        <WorkCard  {...block}  id={id}/>
                    </Fragment>
                ))}
            </div>
            <div className="flex justify-center items-center my-60">
                <AppButton
                    onClick={handleSeeProjects}>
                    See all projects
                </AppButton>
            </div>
        </section>
    );
};

export default WorkBlock;
