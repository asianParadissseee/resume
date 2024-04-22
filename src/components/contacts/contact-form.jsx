import {useAnimatedClipPath} from "@/commons/hooks/use-clippath";
import {motion} from "framer-motion";
import SubmitForm from "@/features/submit-form/submit-form";

const ContactForm = () => {
    const {motionProps, ref} = useAnimatedClipPath()

    return (
        <div ref={ref}
             className="container mx-auto my-48 gap-10 px-5 flex md:flex-row flex-col justify-center items-center md:items-start md:justify-between">
            <motion.h1 {...motionProps} className="text-7xl sm:text-8xl lg:text-9xl text-zinc-800 dark:text-gray-300">
                Contact <br/>
                <span className="text-right">me</span>
            </motion.h1>
            <SubmitForm/>
        </div>
    );
};

export default ContactForm;