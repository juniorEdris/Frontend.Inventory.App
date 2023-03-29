import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Dashboard = () => {
  const [activeSidebar, setActiveSidebar] = useState(true);
  return (
    <div className="flex">
      <div
        className={`${
          activeSidebar ? "w-2/12" : "w-20"
        } transition-all duration-75 `}
      >
        <ul className="grid gap-1 px-2">
          <li>btn</li>
          <li>btn</li>
          <li>btn</li>
          <li>btn</li>
          <li>btn</li>
          <li>btn</li>
        </ul>
      </div>
      <div
        className={`${
          activeSidebar ? "w-10/12" : "w-full"
        } transition-all duration-75`}
      >
        <div className="grid grid-cols-3 content-center p-2 shadow-md">
          <RxHamburgerMenu
            className="cursor-pointer text-lg font-semibold"
            onClick={() => {
              setActiveSidebar((state) => !state);
            }}
          />
          <div className="">body</div>
          <div className="">btns</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
