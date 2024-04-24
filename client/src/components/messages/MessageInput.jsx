import { useState } from "react";
import { BsColumnsGap, BsSend } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../../store/conversationSlice";
import toast from "react-hot-toast";
import instance from "../../utils/axios";

const MessageInput = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [inputMessage, setInputMessage] = useState("");
    const messages = useSelector((state) => state.conversation.messages);
    const selectedConversation = useSelector(
        (state) => state.conversation.selectedConversation
    );
    let token = JSON.parse(localStorage.getItem("chat-user"));
    token = token.access_token;

    const sendMessage = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const { data } = await instance({
                url: "messages/" + selectedConversation._id,
                method: "POST",
                data: {
                    messages: inputMessage,
                },
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (data.error) throw new Error(data.error);
            await dispatch(setMessages([...messages, data.newMessage]));

            setInputMessage("");
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };
    return (
        <form className="px-4 my-3" onSubmit={sendMessage}>
            <div className="w-full relative">
                <input
                    type="text"
                    className="border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white"
                    placeholder="Send a message"
                    name="inputMessage"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                />
                <button
                    type="submit"
                    className="absolute inset-y-0 end-0 flex items-center pe-3"
                >
                    <BsSend />
                </button>
            </div>
        </form>
    );
};
export default MessageInput;
