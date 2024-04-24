import { useEffect } from "react";
import { useSocketContext } from "../contexts/SocketContext";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../store/conversationSlice";

import notificationSound from "../assets/sounds/notification.mp3";

const useListenMessages = () => {
    const { socket } = useSocketContext();
    const dispatch = useDispatch();

    const messages = useSelector((state) => state.conversation.messages);

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            newMessage.shouldShake = true;
            const sound = new Audio(notificationSound);
            sound.play();
            dispatch(setMessages([...messages, newMessage]));
        });

        return () => socket?.off("newMessage");
    }, [socket, setMessages, messages]);
};
export default useListenMessages;
