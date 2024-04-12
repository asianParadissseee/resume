import {useAnimatedClipPath} from "@/commons/hooks/use-clippath";
import {motion} from "framer-motion";

const ContactForm = () => {
    const {motionProps, ref} = useAnimatedClipPath()

    return (
        <div ref={ref}
             className="container mx-auto my-48 gap-10 px-5 flex md:flex-row flex-col justify-center items-center md:items-start md:justify-between">
            <motion.h1 {...motionProps} className="text-7xl sm:text-8xl lg:text-9xl text-zinc-800 dark:text-white">
                Contact <br/>
                <span className="text-right">me</span>
            </motion.h1>
            <form className="flex flex-col gap-5 w-4/5 md:w-2/4 -z-40">
                <input type="text" placeholder={"Name"}
                       className="h-14 p-4 w-full dark:bg-zinc-800 dark:text-white  placeholder:text-white bg-gray-300 text-zinc-800 outline-0"/>
                <input type="text" placeholder={"Phone number"}
                       className="h-14 p-4 w-full dark:bg-zinc-800 placeholder:text-white dark:text-white bg-gray-300 text-zinc-800 outline-0"/>
                <textarea placeholder={"Message..."}
                          className="min-h-80 dark:text-white text-zinc-800 p-4 w-full bg-gray-300 dark:bg-zinc-800  placeholder:text-white  outline-0">
                </textarea>
            </form>
        </div>
    );
};

export default ContactForm;