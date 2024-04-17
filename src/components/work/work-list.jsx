import {useCallback, useState} from "react";
import Kili from "@/commons/assets/images/kili-img.png"
import Adrasteai from "@/commons/assets/images/adrasteai-img.png"
import Royal from "@/commons/assets/images/royal-img.png"
import BekElectro from "@/commons/assets/images/bekelectro-img.png"
import Cahtad from "@/commons/assets/images/cahtad-img.png"
import Gsr from "@/commons/assets/images/gsr-img.png"
import Loop from "@/commons/assets/images/loop-img.png"
import Miraculum from "@/commons/assets/images/miraculum-img.png"
import Room from "@/commons/assets/images/room-img.png"
import CardLine from "./card-line";
import Card from "./card";
import SortBlock from "./sort-block";

const WorkList = () => {

    const [isLine, setIsLine] = useState(false)

    const sortLines = Array.from({length: 3})
    const sortBlocks = Array.from({length: 4})
    const handleSortBlocks = useCallback(() => {
        setIsLine(!isLine)
    }, [isLine])
    const workBlocks = [
        {
            name: "Royal",
            description: "Royal is a company engaged in the construction of residential complexes",
            stack: "NextJs, Framer Motion, Scss",
            status: true,
            bgColor: "bg-gray-900",
            textColor: "text-gray-300",
            href: "https://royal-gamma.vercel.app/",
            imgUrl: Royal
        },
        {
            name: "adrasteai",
            description: "Detective informational agency",
            stack: "React, Tailwindcss, Framer Motion",
            status: true,
            bgColor: "bg-gray-600",
            textColor: "text-gray-300",
            href: "https://adrasteai.netlify.app/",
            imgUrl: Adrasteai
        },
        {
            name: "miraculum",
            description: "interactive landing page advertising a mobile application",
            stack: "NextJs, Framer Motion, Tailwindcss",
            status: true,
            bgColor: "bg-gray-300",
            textColor: "text-zinc-800",
            href: "https://app-landing-rose.vercel.app/",
            imgUrl: Miraculum
        },
        {
            name: "BekElectro",
            description: "Construction online store",
            stack: "Vue, Typescript, Pinia, Tailwindcss",
            status: false,
            bgColor: "bg-gray-900",
            textColor: "text-gray-300",
            href: "https://b-crm.vercel.app/",
            imgUrl: BekElectro
        },
        {
            name: "kili",
            description: "Kili is your reliable partner in the world of information technologies, leading IT provider,",
            stack: "Html, Javascript, Tailwindcss",
            status: true,
            bgColor: "bg-gray-600",
            textColor: "text-zinc-800",
            href: "https://kili.kg",
            imgUrl: Kili
        },
        {
            name: "IT-Loop",
            description: "IT-Loop programming school",
            stack: "Nuxt, SSR, Typescript, Tailwindcss",
            status: false,
            bgColor: "bg-gray-300",
            textColor: "text-zinc-800",
            href: "https://loop-school.vercel.app/",
            imgUrl: Loop
        },
        {
            name: "GSR Group",
            description: "GSR Group is a group of companies providing services in the field logistics, consulting and brokerage",
            stack: "Html, Javascript, Tailwindcss",
            status: true,
            bgColor: "bg-gray-900",
            textColor: "text-gray-300",
            href: "https://gsrgroup-auto.vercel.app/",
            imgUrl: Gsr
        },
        {
            name: "Room",
            description: "We've developed a series of purpose-built rooms that offer companies looking for change an affordable",
            stack: "Vue, Typescript, Tailwindcss",
            status: true,
            bgColor: "bg-gray-600",
            textColor: "text-zinc-800",
            href: "https://main--design-room.netlify.app/",
            imgUrl: Room
        },
        {
            name: "C.A.H.T.A.D",
            description: "Central Asian leading provider of private medical assistance, Medical care support and medical travel solutions.",
            stack: "Html, Css, Javascript, Php",
            status: true,
            bgColor: "bg-gray-300",
            textColor: "text-zinc-800",
            href: "https://cahtad-c6bde.web.app/",
            imgUrl: Cahtad
        }
    ];


    return (
        <section className="my-20">
            <div className="container mx-auto px-10">
                <SortBlock handleSortBlocks={handleSortBlocks} sortLines={sortLines} isLine={isLine}
                           sortBlocks={sortBlocks}/>
                <hr className="h-0.5 bg-zinc-800 my-10 dakr:bg-gray-300"/>
                <div className={`mt-36 grid ${isLine ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-2 gap-10"}`}>
                    {
                        workBlocks.map((block, id) => (
                            isLine ? <CardLine key={id}  {...block}/> : <Card key={id}{...block}/>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default WorkList;