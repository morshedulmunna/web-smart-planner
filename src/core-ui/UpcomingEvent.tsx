import React, { type FC } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import OpenEvent from "~/components/OpenEvent";

interface UpcomingEventProps {}

const UpcomingEvent: FC<UpcomingEventProps> = ({}) => {
  return (
    <React.Fragment>
      <p className=" pl-6 text-sm font-semibold text-gray-400">
        UPCOMING EVENTS
      </p>

      <div className="ml-6 mt-6 flex w-fit cursor-pointer items-center space-x-2 rounded-lg bg-gray-200 px-2 py-1 text-sm font-medium duration-300 ease-linear hover:bg-gray-100">
        <IoMdAddCircleOutline />
        <p>Create New Event</p>
      </div>

      <div className=" mt-2 h-[45vh] overflow-scroll ">
        <OpenEvent />
        <OpenEvent />
        <OpenEvent />
        <OpenEvent />
        <OpenEvent />
        <OpenEvent />
        <OpenEvent />
        <OpenEvent />
        <OpenEvent />
        <OpenEvent />
        <OpenEvent />
        <OpenEvent />
        <OpenEvent />
        <OpenEvent />
        <OpenEvent />
        <OpenEvent />
      </div>
    </React.Fragment>
  );
};
export default UpcomingEvent;
