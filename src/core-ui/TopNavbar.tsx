import React, { type FC } from "react";
import { FaBars } from "react-icons/fa";

interface TopNavbarProps {}

const TopNavbar: FC<TopNavbarProps> = ({}) => {
  return (
    <React.Fragment>
      <div className="  sticky top-0 z-20 px-12 py-3 ">
        <div className="flex max-w-[750px] items-center justify-between gap-x-6">
          <p className="min-w-[170px] font-bold">SMART PLANNER</p>
          <FaBars color="gray" size={25} />

          <input
            type="text"
            placeholder="Search people - file - event........ "
            className="w-full rounded-md border-2 border-gray-100 px-2 py-[6px] text-sm"
          />
        </div>
      </div>
    </React.Fragment>
  );
};
export default TopNavbar;
