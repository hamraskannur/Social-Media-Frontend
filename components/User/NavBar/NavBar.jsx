import React from "react";
import Link from "next/link";
import { FiSettings } from "react-icons/fi";

function NavBar() {
  return (
    <div className="z-50 flex justify-between bg-heavy-metal-800 shadow-md w-full bg-slate-700 h-16 shadow-heavy-metal-400 p-4 top-0 sticky">
      <h2 className="ml-5 font-bold text-white text-2xl">Locomate </h2>
      <Link href="/user/MyAccount">
        <div className="flex gap-4  items-center">
          <div className=" w-8 rounded-full border-white border overflow-hidden shadow-sm shadow-gray-500">
            <img
              src="https://i.pinimg.com/originals/31/44/7e/31447e25b7bc3429f83520350ed13c15.jpg"
              alt="avatars"
            />
          </div>
          <div className="">
            <h1 className=" max-sm:hidden max-md:hidden max-lg:hidden   text-white ml-auto">
              Dulquer salmaan
            </h1>
          </div>
          <div >
            <h1 className="hidden max-sm:inline-block max-md:inline-block max-lg:inline-block text-white ml-0">
              {React.createElement(FiSettings, { size: "25" })}
            </h1>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default NavBar;
