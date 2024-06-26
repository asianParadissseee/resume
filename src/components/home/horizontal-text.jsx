import {useEffect, useState} from 'react';
import {useScroll, useTransform, motion} from "framer-motion";

const HorizontalText = () => {
    const {scrollYProgress} = useScroll();

    // Используйте состояние для определения размера окна
    const [endRange, setEndRange] = useState(900);

    useEffect(() => {
        // Функция для обновления диапазона в зависимости от ширины экрана
        const updateSize = () => {
            if (window.innerWidth < 768) {
                setEndRange(300); // Меньше для мобильных
            } else {
                setEndRange(900); // Больше для десктопов
            }
        };

        window.addEventListener('resize', updateSize);
        updateSize(); // Вызов при монтировании компонента

        return () => window.removeEventListener('resize', updateSize);
    }, []);

    const topX = useTransform(scrollYProgress, [0, 1], [0, endRange]);
    const bottomX = useTransform(scrollYProgress, [0, 1], [0, -endRange]);

    return (
        <div className="hidden xl:block container mt-20 mx-auto px-10">
            <motion.p
                className={`dark:text-gray-300 text-zinc-800 overflow-hidden transition-all ease-in-expo duration-300 sm:text-9xl z-10 m-0 whitespace-nowrap`}
                style={{x: topX}}>
                Creating
            </motion.p>
            <motion.p
                className={`dark:text-gray-300 text-zinc-800 transition-all overflow-hidden ease-in-expo duration-300 sm:text-9xl z-10 m-0 whitespace-nowrap`}
                style={{x: bottomX}}>
                Digital Beauty
            </motion.p>
        </div>
    );
};

export default HorizontalText
