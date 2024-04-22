import {motion} from "framer-motion";

const Alert = (props) => {
    const {isSuccess} = props

    return (
        <motion.div
            initial={{
                opacity: 0,
                right: 100,
            }}
            whileInView={{
                opacity: 1,
                right: 12,
            }}
            transition={{ease: 'easeOut', duration: 1}}
            className={`absolute z-50 right-3 top-20 sm:-top-20 rounded px-3.5 py-1.5 font-bold dark:bg-white bg-zinc-800 dark:text-zinc-800 text-gray-300 `}>
            {isSuccess ?
                (<p>Сообщение успешно <br/> отправлено</p>)
                :
                (<p>Произошла ошибка <br/> отправки</p>)}
        </motion.div>
    );
};

export default Alert;