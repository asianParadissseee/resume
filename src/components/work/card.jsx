import {useMediaQuery} from "../../commons/hooks/use-media";

const Card = ({name, description, stack, status, href, textColor, bgColor, imgUrl}) => {

    const isMobile = useMediaQuery("(max-width: 640px)")
    return (
        <div className={`rounded-2xl p-5 sm:min-h-svh  ${textColor} ${bgColor}`}>
            <div className="flex flex-col h-40 items-start md:items-center gap-10 md:flex-row justify-between">
                <div className="flex flex-col gap-4">
                    <p className="text-2xl sm:text-4xl">
                        {name.toUpperCase()}
                    </p>
                    <p className="max-w-60 text-sm whitespace-normal sm:text-base">
                        {description}
                    </p>
                </div>
                <div className="flex  gap-4 flex-col-reverse">
                    <p className="text-sm">
                        <b>status: </b> {status ? "production" : "in developing"}
                    </p>
                    <p className="text-sm">
                        <b>stack:</b> {stack.toUpperCase()}
                    </p>
                </div>
            </div>
            <div className="mt-40 mx-auto flex justify-center items-center">
                <a href={href} target={"_blank"}>
                    <img src={imgUrl} alt="" width={isMobile ? 305 : 500} height={200}/>
                </a>
            </div>
        </div>
    );
};

export default Card;