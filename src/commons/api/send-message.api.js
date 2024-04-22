import axios from "axios";

export const sendMessageApi = async (message) => {
    const CHAT_ID = "-4127150505"
    const url = `https://api.telegram.org/bot7095517712:AAFtyMpWTHYW67HwSUbkG9G6HNZY9wUsGDk/sendMessage`

    try {
        const res = await axios.post(`${url}?chat_id=${CHAT_ID}&text=${message}`,)
    } catch (err) {
        throw new Error("Failed to send message." + err.message);
    }
}