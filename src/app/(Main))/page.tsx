import React, { type FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <React.Fragment>
      <div className="h-[64vh] overflow-y-scroll bg-white m-4 shadow p-4 rounded-md">
        {/* title area */}
        <div className="flex  border-b-[1px] pb-4 justify-between items-center">
          <h2 className="font-semibold">CLASS TIMELINE</h2>
          <div className="flex  space-x-2 items-center">
            <div className="bg-red-500 h-3 w-3 rounded-full"></div>
            <div className="bg-green-500 h-3 w-3 rounded-full"></div>
            <div className="bg-blue-500 h-3 w-3 rounded-full"></div>

            <button className="border-blue-500 border px-2 rounded-xl text-lg text-blue-500 hover:bg-blue-500 hover:text-white duration-150 ease-linear">
              +
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default page;
