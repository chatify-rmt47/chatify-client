import { useAuthContext } from '../../contexts/AuthContext';
import MessageInput from './MessageInput';
import Messages from './Messages';
import { TiMessages } from 'react-icons/ti';
import { useSelector } from 'react-redux';

const MessageContainer = () => {
  const selectedConversation = useSelector(
    (state) => state.conversation.selectedConversation
  );
  console.log(selectedConversation, 'coversation');

  return (
    <div className="md:min-w-[150vh] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-slate-500 px-4 py-2 mb-2">
            {selectedConversation ? (
              <>
                <span className="label-text">To: </span>
                <span className="text-gray-900 font-bold">
                  {selectedConversation.fullName}
                </span>
              </>
            ) : (
              <></>
            )}
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};
export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.fullName} ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
