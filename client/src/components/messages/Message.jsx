import React from "react";

const Message = () => {
    return (
        <div className="">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS chat bubble component"
                        src="" /* foto profil */
                    />
                </div>
            </div>
            <div className="">{/* pesan */}</div>
            <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
                {/* waktu */}
            </div>
        </div>
    );
};

export default Message;
