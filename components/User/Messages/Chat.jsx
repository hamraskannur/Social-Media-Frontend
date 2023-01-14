import React from "react";

const Chat = () => {
  return (
    <div>
      <div className="border-b-2 py-4 px-2 bg-slate-700 h-20 flex">
      <img
          src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
          className="object-cover h-10 w-10 rounded-full"
          alt=""
        />
     <div className="text-white  p-3 text-lg font-semibold">Luis1994</div>

      </div>
      <div className="flex justify-end mb-4 mt-5">
        <div className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
          Welcome to group everyone !
        </div>
        <img
          src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
          className="object-cover h-8 w-8 rounded-full"
          alt=""
        />
      </div>
      <div className="flex justify-start mb-4">
        <img
          src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
          className="object-cover h-8 w-8 rounded-full"
          alt=""
        />
        <div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat at
          praesentium, aut ullam delectus odio error sit rem. Architecto nulla
          doloribus laborum illo rem enim dolor odio saepe, consequatur quas?
        </div>
      </div>
      <div className="flex justify-end mb-4">
        <div>
          <div className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam,
            repudiandae.
          </div>

          <div className="mt-4 mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            reiciendis!
          </div>
        </div>
        <img
          src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
          className="object-cover h-8 w-8 rounded-full"
          alt=""
        />
      </div>
      <div className="flex justify-start mb-4">
        <img
          src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
          className="object-cover h-8 w-8 rounded-full"
          alt=""
        />
        <div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
          happy holiday guys!
        </div>
      </div>
    </div>
  );
};

export default Chat;
