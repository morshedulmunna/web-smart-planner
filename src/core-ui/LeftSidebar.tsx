import Link from "next/link";
import React, { type FC } from "react";

interface LeftSidebarProps {}

const LeftSidebar: FC<LeftSidebarProps> = ({}) => {
  return (
    <React.Fragment>
      <div className=" border-r-[1px] border-gray-100 bg-white shadow">
        <div className="min-h-[40vh] bg-red-200">
          <p>NAVIGATION</p>
          {navigationData.map((each) => (
            <ul>
              <li>
                <Link href={each.path}> {each.label} </Link>
              </li>
            </ul>
          ))}
        </div>

        <div className="min-h-[55vh]">
          <p>Hello Event Area</p>
        </div>
      </div>
    </React.Fragment>
  );
};
export default LeftSidebar;

const navigationData = [
  {
    id: 1,
    label: "Timeline",
    path: "/",
  },
  {
    id: 1,
    label: "Message",
    path: "/message",
  },
  {
    id: 1,
    label: "Exam",
    path: "/exam",
  },
  {
    id: 1,
    label: "File",
    path: "/file",
  },
  {
    id: 1,
    label: "Settings",
    path: "/settings",
  },
];
