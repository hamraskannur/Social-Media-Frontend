import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { userChat } from "../../../Api/userApi/chatRequest";
import AllUser from "./AllUser";
import Chat from "./Chat";
import User from "./user";
import { useSelector } from "react-redux";

const Messages = () => {
  const [chat, setChat] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const sideBar = useSelector((state) => state?.sideBar?.sideBar);
  const user = useSelector((state) => state?.user?.user);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [sentMessage, setSentMessage] = useState(null);
  const [receiveMessages, setReceiveMessages] = useState(null);

  const socket = useRef();
  useEffect(() => {
    socket.current = io("http://localhost:8800");
    socket.current.emit("new-user-add", user._id);
    socket.current.on("get-user", (users) => {
      setOnlineUsers(users);
    });
  }, [user]);

  useEffect(() => {
    if (sentMessage !== null) {
      socket.current.emit("send-message", sentMessage);
    }
  }, [sentMessage]);

  useEffect(() => {
    socket.current.on("receive-message", (data) => {
      setReceiveMessages(data);
    });
  }, []);

  useEffect(() => {
    const getChat = async () => {
      try {
        const data = await userChat(user?._id);
        setChat(data);
      } catch (error) {
        console.log(error);
      }
    };
    getChat();
  }, []);

  return (
    <>
      <div className="h-full ">
        <div className="container mx-auto shadow-lg rounded-lg px-10  max-sm:px-2 max-sm:py-1 h-full ">
          <div className="flex flex-row  bg-white w-full ">
            <div className="my-7 flex flex-col  border-r-2 overflow-y-auto bg-white w-4/12">
              <div className="border-b-2 py-4 px-2 bg-slate-700 ">
                <input
                  type="text"
                  placeholder="search chatting"
                  className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
                />
              </div>
              <div className="h-[70vh] ">
                {chat?.map((chat) => (
                  <div onClick={() => setCurrentChat(chat)}>
                    <AllUser
                      data={chat}
                      currentUserId={user?._id}
                      onlineUsers={onlineUsers}
                      key={chat._id}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-9/12">
              <Chat
                key={user._id}
                chat={currentChat}
                currentUser={user._id}
                setSentMessage={setSentMessage}
                receiveMessages={receiveMessages}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;
//  {!sideBar &&  <div className="w-2/5 border-l-2 px-5">
//               <div className="flex flex-col">
//                 {/* <User /> */}
//               </div>
//             </div>}
