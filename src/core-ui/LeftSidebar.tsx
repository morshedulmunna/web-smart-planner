import Link from "next/link";
import { useRouter } from "next/router";
import React, { type FC } from "react";
import { AiOutlineFileProtect } from "react-icons/ai";
import { BiMessageSquareDots } from "react-icons/bi";
import { CiViewTimeline } from "react-icons/ci";
import { FiSettings } from "react-icons/fi";
import { GiPapers } from "react-icons/gi";

interface LeftSidebarProps {}

const LeftSidebar: FC<LeftSidebarProps> = ({}) => {
  const location = useRouter();

  console.log(location.pathname);

  return (
    <React.Fragment>
      <div className=" border-r-[1px] border-gray-100 bg-white shadow">
        <div className="bg- min-h-[40vh] ">
          <p className="px-6 pt-8 text-sm font-semibold text-gray-400">
            NAVIGATION
          </p>
          <ul className="mt-6">
            {navigationData.map((each) => (
              <Link key={each.id} href={each.path}>
                <li
                  className={`flex items-center justify-start space-x-4 p-6 py-3 font-semibold duration-300 ease-linear hover:bg-gray-100 ${
                    location.pathname === each.path && "bg-gray-100"
                  } `}
                >
                  <span> {each.icon} </span>
                  <span>{each.label}</span>
                </li>
              </Link>
            ))}
          </ul>
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
    icon: <CiViewTimeline size={20} />,
  },
  {
    id: 1,
    label: "Message",
    path: "/message",
    icon: <BiMessageSquareDots size={20} />,
  },
  {
    id: 1,
    label: "Exam",
    path: "/exam",
    icon: <GiPapers size={20} />,
  },
  {
    id: 1,
    label: "File",
    path: "/file",
    icon: <AiOutlineFileProtect size={20} />,
  },
  {
    id: 1,
    label: "Settings",
    path: "/settings",
    icon: <FiSettings size={20} />,
  },
];
