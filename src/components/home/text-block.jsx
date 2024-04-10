import {useEffect, useRef, useState} from "react";

const TextBlock = () => {
    const textRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const colorizedText = (text) => {
        return text.split("").map((char, index) => {
            let style = {
                color: scrollPosition > 40 ? "white" : "gray",
                transition: "color 5s",
                transitionDelay: `${index * 10}ms`,
            };
            return (
                <span key={index} style={style}>
                        {char}
                </span>
            );
        });
    };

    return (
        <div className="mx-auto container flex flex-col gap-20 px-10">
            <h4 className="text-xl sm:text-3xl lg:text-5xl xl:text-7xl">
                {colorizedText(
                    "Helping brands to stand out in the digital era through a human centered design approach to turn ideas into interactive experiences."
                )}
            </h4>
        </div>
    );
};

export default TextBlock;
