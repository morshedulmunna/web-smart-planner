'use client';

import { LeftSidebar, TopNavbar } from '@/core-ui';
import ProfileInfo from '@/core-ui/ProfileInfo';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className=" grid h-screen grid-cols-12 overflow-hidden ">
        <div className=" col-span-10">
          <div className=" bg-white ">
            <TopNavbar />
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-2  ">
              <LeftSidebar />
            </div>
            <div className="col-span-10 ">
              <div className="">
                <ProfileInfo />
              </div>
              <div className="grid grid-cols-12 ">
                <div className=" col-span-12   lg:col-span-8">{children}</div>
                <div className=" col-span-12 lg:col-span-4">
                  <div>Calender</div>
                  <div>Event Attending</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 ">Right Sidebar</div>
      </div>
      <ToastContainer />
      <footer>Footer</footer>
    </>
  );
}
