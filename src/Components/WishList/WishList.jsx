import React from "react";
import { Fragment } from "react/cjs/react.production.min";

const WishList = () =>{
    return (
        <Fragment>
            {/* <a className="flex justify-between  w-full px-3 mt-3" href="#">
            <span className="text-sm font-bold">To Do List</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg></a>
            <div>
                <div className="flex items-center">
                    <p className="w-full text-grey-darkest">Add another component to Tailwind Components</p>
                    <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">Done</button>
                    <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
                    </div>
                    <div className="flex items-center">
                    <p className="w-full line-through text-green">Submit Todo App Component to Tailwind Components</p>
                    <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-grey">Not Done</button>
                    <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
                </div>
            </div> */}
            <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans mt-3 border-t border-gray-300">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-grey-darkest">Todo List</h1>
          </div>
          <div>
            <div className="flex mb-4 items-center">
              <p className="w-full text-grey-darkest">Add another component to Tailwind Components</p>
              <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">Done</button>
              <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
            </div>
            <div className="flex mb-4 items-center">
              <p className="w-full line-through text-green">Submit Todo App Component to Tailwind Components</p>
              <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-grey">Not Done</button>
              <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
            </div>
          </div>
        </div>
      </div>
        </Fragment>
            )
};

export default WishList;
