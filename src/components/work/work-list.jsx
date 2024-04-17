import {useState} from "react";
import WorkCard from "../ui/work-card";
import Kili from "@/commons/assets/images/kili-img.png"
import Adrasteai from "@/commons/assets/images/adrasteai-img.png"
import Royal from "@/commons/assets/images/royal-img.png"
import CardLine from "./card-line";
import Card from "./card";

const WorkList = () => {

    const [isLine, setIsLine] = useState(false)

    const sortLines = Array.from({length: 3})
    const sortBlocks = Array.from({length: 4})

    const handleSortBlocks = () => {
        setIsLine(!isLine)
    }
    const workBlocks = [
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
        {
            name: "IT-Loop",
            stack: "Nuxt, SSR, Typescript, Tailwindcss",
            bgColor: "bg-gray-300",
            textColor: "text-zinc-800",
            href: "https://loop-school.vercel.app/",
            imgUrl: ""
        },
        {
            name: "GSR Group",
            stack: "Html, Javascript, Tailwindcss",
            bgColor: "bg-gray-300",
            textColor: "text-zinc-800",
            href: "https://gsrgroup-auto.vercel.app/",
            imgUrl: ""
        },
        {
            name: "Room",
            stack: "Vue, Typescript, Tailwindcss",
            bgColor: "bg-gray-300",
            textColor: "text-zinc-800",
            href: "https://main--design-room.netlify.app/",
            imgUrl: ""
        },
        {
            name: "C.A.H.T.A.D",
            stack: "Html, Javascript, Php",
            bgColor: "bg-gray-300",
            textColor: "text-zinc-800",
            href: "https://cahtad-c6bde.web.app/",
            imgUrl: ""
        }
    ];


    return (
        <section className="my-20">
            <div className="container mx-auto px-10">
                <div className="flex-row flex justify-end gap-10 items-center">
                    <div
                        className={`rounded-full w-14 h-14 ${isLine ? " bg-gray-300" : "bg-zinc-800"} flex flex-col gap-1 justify-center items-center`}
                        onClick={handleSortBlocks}>
                        {
                            sortLines.map((line, id) => (
                                <span className={`w-6 h-0.5 ${!isLine ? "bg-gray-300" : "bg-zinc-800"}`}
                                      key={id}></span>
                            ))
                        }
                    </div>
                    <div
                        className={`rounded-full w-14 h-14 ${!isLine ? " bg-gray-300" : "bg-zinc-800"}  flex justify-center items-center`}
                        onClick={handleSortBlocks}>
                        <div className="w-5 h-5 grid grid-cols-2 gap-0.5 place-items-center">
                            {
                                sortBlocks.map((line, id) => (
                                    <span
                                        className={`w-2 h-2 ${isLine ? "border-gray-300" : "border-zinc-800"} bg-transparent  border `}
                                        key={id}></span>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <hr className="h-0.5 bg-zinc-800 my-10 dakr:bg-gray-300"/>
                <div className={`mt-36 grid ${isLine ? "grid-cols-1" : "grid-cols-2 gap-10"}`}>
                    {
                        workBlocks.map((block) => (
                            isLine ? <CardLine {...block}/> : <Card {...block}/>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default WorkList;