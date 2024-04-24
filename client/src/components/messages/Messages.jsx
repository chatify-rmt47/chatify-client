import { useEffect, useRef, useState } from "react";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
// import useListenMessages from "../../hooks/useListenMessages";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../../store/conversationSlice";
import instance from "../../utils/axios";

const Messages = () => {
  // const { messages, loading } = useGetMessages();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const messages = useSelector((state) => state.conversation.messages);
  const selectedConversation = useSelector(
    (state) => state.conversation.selectedConversation
  );
  let token = JSON.parse(localStorage.getItem("chat-user"));
  token = token.access_token;

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const { data } = await instance({
          url: "get-message/" + selectedConversation._id,
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("🚀 ~ getMessages ~ data:", data);
        if (data.error) throw new Error(data.error);
        dispatch(setMessages(data));
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);

  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {console.log(messages)}
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
    // <></>
  );
};
export default Messages;
