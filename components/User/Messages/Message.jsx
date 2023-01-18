import React from "react";
import AllUser from "./AllUser";
import Chat from "./Chat";
import User from "./user";
import { useSelector } from "react-redux";

const Messages = () => {
  const sideBar = useSelector((state) => state?.sideBar?.sideBar);

  return (
    <>
      <div>
        <div className="container mx-auto shadow-lg rounded-lg p-10">
          <div className="flex flex-row justify-between bg-white">
            <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto">
              <div className="border-b-2 py-4 px-2 bg-slate-700 ">
                <input
                  type="text"
                  placeholder="search chatting"
                  className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
                />
              </div>
              <AllUser />
            </div>

            <div className="w-full  flex flex-col justify-between">
              <div className="flex flex-col ">
                <Chat />
              </div>
              <div className="py-5">
                <input
                  className="w-full bg-gray-300 py-5 px-3 rounded-xl"
                  type="text"
                  placeholder="type your message here..."
                />
              </div>
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
