import React from "react";
import Calendario from '../Calendario/Calendario';
import WishList from "../WishList/WishList";
const SideProfile = () =>{
    return (
        <aside className="w-auto px-8 py-4 bg-gray-100 border-r overflow-auto h-full">
        <a className="flex justify-between  w-full px-3 mt-3" href="#">
            <span className="text-sm font-bold">Profile</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
        </a>
        <div className="w-full px-2">
            <div className="flex flex-col items-center w-full mt-3 border-t border-gray-300">
                <div className="flex justify-center">
                    <img src="https://i.imgur.com/8Km9tLL.jpg"
                        className="rounded-full border-solid border-white border-2 mt-3" />
                </div>
                <div className="text-center px-3 pb-6 pt-2">
                    <h3 className=" text-sm bold font-sans">Olivia Dunham</h3>
                    <p className="mt-2 font-sans font-light ">Hello, i'm from another the other side!</p>
                </div>
                <Calendario />
                <WishList />
            </div>
        </div>
    </aside>

            )
};

export default SideProfile;
