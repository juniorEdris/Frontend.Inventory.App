import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiFillDashboard } from "react-icons/ai";
import ItemCountCards from "../../components/Cards/ItemCountCards";
import { Link } from "react-router-dom";
import reactIcon from "../../assets/react.svg";

const Dashboard = () => {
  const [activeSidebar, setActiveSidebar] = useState(true);
  return (
    <div className="flex">
      <div
        className={`${
          activeSidebar ? "w-2/12" : "w-20"
        } transition-all duration-75 relative bg-dark text-light`}
      >
        <div
          className={`px-2 fixed top-0 ${activeSidebar ? "w-2/12" : "w-20"}`}
        >
          <div className="my-4 text-center">
            <Link to={'/'} className="inline-block"><img src={reactIcon} alt="logo"/></Link>
          </div>
          <ul className={`grid text-lg capitalize`}>
            {Array(5).fill().map((menu, i) => (
              <li key={i} className="hover:bg-slate-600 py-2 px-1 rounded-md">
                <Link to={""} className="block">
                  <div
                    className={`flex items-center gap-2 ${
                      activeSidebar ? "" : "justify-center"
                    }`}
                  >
                    <AiFillDashboard className="text-2xl" />
                    <span className={`${activeSidebar ? "" : "hidden"}`}>
                      page {i+1}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`${
          activeSidebar ? "w-10/12" : "w-full"
        } transition-all duration-75 px-2 relative`}
      >
        {/* <div className="w-full fixed top-0"> */}
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
        {/* </div> */}

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
