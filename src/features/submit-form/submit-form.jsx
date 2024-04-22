import {Fragment, useState} from "react";
import {sendMessageApi} from "@/commons/api/send-message.api";
import Alert from "@/components/ui/alert";

const SubmitForm = () => {
    const [name, setName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [message, setMessage] = useState("")
    const [isSuccess, setIsSuccess] = useState(false)

    const handleChange = (setState) => (event) => {
        setState(event.target.value)
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = `Имя:${name}\n Номер телефона:${phoneNumber}\n Сообщение:${message}`
        try {
            await sendMessageApi(data)
            setIsSuccess(true)
            setTimeout(() => {
                setIsSuccess(false);
            }, 3000);

        } catch (err) {
            setIsSuccess(false)
        }
    }

    return (
        <Fragment>
            {isSuccess && <Alert isSuccess={isSuccess}/>}
            <form className="flex flex-col gap-5 w-4/5 md:w-2/4" onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={handleChange(setName)} placeholder={"Name"}
                       className="h-14 p-4 w-full rounded dark:bg-zinc-800 dark:text-white  placeholder:text-white bg-gray-300 text-zinc-800 outline-0"/>
                <input type="text" value={phoneNumber} onChange={handleChange(setPhoneNumber)}
                       placeholder={"Phone number"}
                       className="h-14 p-4 w-full rounded dark:bg-zinc-800 placeholder:text-white dark:text-white bg-gray-300 text-zinc-800 outline-0"/>
                <textarea placeholder={"Message..."} value={message} onChange={handleChange(setMessage)}
                          className="min-h-80 dark:text-white rounded text-zinc-800 p-4 w-full bg-gray-300 dark:bg-zinc-800  placeholder:text-white  outline-0">
                </textarea>
                <button
                    className="w-full dark:bg-white dark:text-zinc-800 bg-zinc-800 text-white py-4 px-8 rounded font-semibold">
                    Send
                </button>
            </form>
        </Fragment>
    );
};

export default SubmitForm;