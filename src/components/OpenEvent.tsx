import React, { type FC } from "react";

interface OpenEventProps {}

const OpenEvent: FC<OpenEventProps> = ({}) => {
  return (
    <React.Fragment>
      <div className="group mt-4 cursor-pointer rounded pl-6 duration-150 ease-linear  hover:bg-gray-50">
        <h2 className="text-sm font-medium text-gray-600 duration-200 ease-linear group-hover:text-blue-500">
          Programming Event-2023
        </h2>
        <div className="mt-1 flex justify-start space-x-4 text-sm font-normal text-gray-400">
          <p>
            - <span>Jun 04 2023</span>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};
export default OpenEvent;
