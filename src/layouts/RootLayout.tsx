import React, { type FC } from "react";
import { LeftSidebar, TopNavbar } from "~/core-ui";
import ProfileInfo from "~/core-ui/ProfileInfo";

interface RootLayoutProps {
  children: React.ReactElement;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};
export default RootLayout;
