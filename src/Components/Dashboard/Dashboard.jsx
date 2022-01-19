import React from "react";
import { Fragment } from "react/cjs/react.production.min";

import RecentViews from "../RecentViews/RecentViews";
import { BellIcon } from '@heroicons/react/outline'
import SideProfile from "../SideProfile/SideProfile";

const Dashboard = () =>{
    return (
        <Fragment>
        <section className="w-auto px-8 py-4 bg-gray-100 border-r overflow-auto h-full">
            <div className="flex justify-between ...">
                <div className="mb-4 mr-20">
                    <a className="flex justify-between  w-full px-3 mt-3" href="#">
                        <h3 className="text-sm font-bold">Hola Camila!</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                    </a>
                    <p className="w-full px-3 mt-3">Let's learn something new today!</p>
                </div>
                <div className="flex items-center">
                    <div className="flex border-2 rounded mr-5">
                        <button className="flex items-center justify-center px-4 border-r">
                            <svg className="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z">
                                </path>
                            </svg>
                        </button>
                        <input type="text" className="px-4 py-2 w-80" placeholder="Search..." />
                    </div>
                    <button type="button"
                    className="p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                </div>
            </div>
            <RecentViews/>
        </section>
        <SideProfile/> 
    </Fragment>)
};

export default Dashboard;
