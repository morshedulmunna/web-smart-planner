"use client";
import Modal from "@/components/Modal";
import React, { useState, type FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <div className="h-[60vh] overflow-y-scroll bg-white m-4 shadow p-4 rounded-md">
        {/* title area */}
        <div className="flex  border-b-[1px] pb-4 justify-between items-center">
          <h2 className="font-semibold">CLASS TIMELINE</h2>
          <div className="flex  space-x-2 items-center">
            <div className="bg-red-500 h-3 w-3 rounded-full"></div>
            <div className="bg-green-500 h-3 w-3 rounded-full"></div>
            <div className="bg-blue-500 h-3 w-3 rounded-full"></div>

            <button
              onClick={() => setOpen(true)}
              className="border-blue-500 border px-2 rounded-xl text-lg text-blue-500 hover:bg-blue-500 hover:text-white duration-150 ease-linear"
            >
              +
            </button>
          </div>
        </div>
        {/* title area  End*/}

        {/* Modal */}
        <Modal
          content={
            <div className="w-[600px]">
              <p>hello</p>
            </div>
          }
          showModal={open}
          setShowModal={setOpen}
        />

        {/* Create TODO Items */}
        <div className="grid grid-cols-12 px-4 py-4">
          <div className="col-span-3 flex flex-col justify-center ite">
            {/* Today */}
            <p className="text-lg font-medium">Today</p>
            <p className="text-xs">Jan 03 2023</p>
          </div>
          <div className="col-span-2">
            <p>7:30 am</p>
            <p>8:30 am</p>
          </div>
          <div className="col-span-7 border-l-[1px] pl-3">
            <h5 className="font-medium">Learn Rust Programming</h5>
            <p className="text-xs">
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Voluptatibus eaque dicta sit.
            </p>
          </div>
        </div>
        {/* Create TODO Items End */}
      </div>
    </React.Fragment>
  );
};
export default page;
