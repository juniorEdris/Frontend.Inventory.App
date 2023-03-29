import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import ItemCountCards from "../../components/Cards/ItemCountCards";

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
        } transition-all duration-75 px-2`}
      >
        <div className="grid grid-cols-3 content-center p-2 shadow-md">
          <RxHamburgerMenu
            className="cursor-pointer text-lg font-semibold"
            onClick={() => {
              setActiveSidebar((state) => !state);
            }}
          />
          <div className="">search bar</div>
          <div className="">btns</div>
        </div>

        <div className="py-4">
          <h1>Body</h1>

          <div className="grid grid-cols-3 2xl:grid-cols-4 gap-2">
            {Array(3)
              .fill()
              .map((item, i) => (
                <ItemCountCards key={i} count={41} itemName="admin" />
              ))}
          </div>

          <div className="py-4 grid grid-cols-2 gap-2">
                <div className="border border-primary min-h-[350px] rounded-md"></div>
                <div className="border border-primary min-h-[350px] rounded-md"></div>
                <div className="border border-primary min-h-[350px] rounded-md"></div>
                <div className="border border-primary min-h-[350px] rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
