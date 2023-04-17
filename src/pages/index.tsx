import React, { type FC } from "react";
import { LeftSidebar, TopNavbar } from "~/core-ui";

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
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
              <div className="">Profile Info</div>
              <div className="grid grid-cols-12 ">
                <div className=" col-span-12   lg:col-span-8">
                  Class Timeline
                </div>

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
export default Home;
