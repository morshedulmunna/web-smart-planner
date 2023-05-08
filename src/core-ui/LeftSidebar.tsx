import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { type FC } from 'react';
import { AiOutlineFileProtect } from 'react-icons/ai';
import { BsCalendar2Check } from 'react-icons/bs';
import { CiViewTimeline } from 'react-icons/ci';
import { FiSettings } from 'react-icons/fi';
import { GiPapers } from 'react-icons/gi';
import UpcomingEvent from './UpcomingEvent';

interface LeftSidebarProps {}

const LeftSidebar: FC<LeftSidebarProps> = ({}) => {
  const pathname = usePathname();

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
                    pathname === each.path && 'bg-gray-100'
                  } `}>
                  <span> {each.icon} </span>
                  <span>{each.label}</span>
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div className="min-h-[55vh]">
          <UpcomingEvent />
        </div>
      </div>
    </React.Fragment>
  );
};
export default LeftSidebar;

const navigationData = [
  {
    id: 1,
    label: 'Timeline',
    path: '/',
    icon: <CiViewTimeline size={20} />,
  },
  {
    id: 2,
    label: 'Calender',
    path: '/calender',
    icon: <BsCalendar2Check size={20} />,
  },
  {
    id: 3,
    label: 'Exam',
    path: '/exam',
    icon: <GiPapers size={20} />,
  },
  {
    id: 4,
    label: 'File',
    path: '/file',
    icon: <AiOutlineFileProtect size={20} />,
  },
  {
    id: 5,
    label: 'Settings',
    path: '/settings',
    icon: <FiSettings size={20} />,
  },
];
