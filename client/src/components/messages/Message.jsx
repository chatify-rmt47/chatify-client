import { useSelector } from "react-redux";
import { useAuthContext } from "../../contexts/AuthContext";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const selectedConversation = useSelector(
    (state) => state.conversation.selectedConversation
  );
  const fromMe = message.SenderId === authUser._id;
  console.log(
    "🚀 ~ Message ~ authUser._id:",
    authUser._id + " ====== " + message.SenderId
  );
  // console.log("🚀 ~ Message ~ fromMe:", fromMe);
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";

  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      {/* <div className={`chat chat-end`}> */}
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profilePic} />
        </div>
      </div>
      <div
        className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}
        // className={`chat-bubble text-white bg-blue-500`}
      >
        {message.messages}
      </div>
      <div className="chat-footer opacity-50 text-xs color-white flex gap-1 items-center">
        {formattedTime}
      </div>
    </div>
  );
};
export default Message;
