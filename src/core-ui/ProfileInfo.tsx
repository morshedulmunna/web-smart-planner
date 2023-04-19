import Image from "next/image";
import React, { type FC } from "react";
import { profile } from "~/assets";

interface ProfileInfoProps {}

const ProfileInfo: FC<ProfileInfoProps> = ({}) => {
  return (
    <React.Fragment>
      <div className="relative">
        <div className="min-h-[20vh] bg-[url('../assets/images/cover-photo.jpg')] bg-cover"></div>
        <div className="  overflow-hidden bg-white shadow">
          <div className="absolute left-10 top-24 h-[150px] w-[150px]  overflow-hidden rounded bg-white p-1  shadow">
            <Image className="rounded" src={profile} alt="profile photo" />
          </div>
          {/* name and profession */}
          <div className="ml-60 flex  divide-x-[1px] py-2">
            <div className="min-w-[250px] px-6">
              <h2 className="text-2xl font-semibold">Morshedul Munna</h2>
              <span className=" text-sm">full-stack Software Developer</span>
            </div>
            <div className="px-6">
              <p
                className={`text-sm before:ml-0.5 before:text-3xl before:text-pink-500 before:content-['"']`}
              >
                A self-motivated and enthusiastic web developer with a deep
                interest in JavaScript (React.js). To work in the Software
                industry with modern web technologies of different local &
                multinational Software
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ProfileInfo;
