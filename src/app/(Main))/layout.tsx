"use client";

import { LeftSidebar, TopNavbar } from "@/core-ui";
import ProfileInfo from "@/core-ui/ProfileInfo";
import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className=" mx-6 grid grid-cols-12  ">
        <div className=" col-span-12 lg:col-span-10">
          <div className=" bg-white ">
            <TopNavbar />
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-2 hidden lg:block  ">
              <LeftSidebar />
            </div>
            <div className=" col-span-12 lg:col-span-10 ">
              <ProfileInfo />
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

        <div className="col-span-2 hidden lg:block  ">Right Sidebar</div>
      </div>
      {/* <ToastContainer /> */}
      <footer className="bg-gray-500">Footer</footer>
    </div>
  );
}
