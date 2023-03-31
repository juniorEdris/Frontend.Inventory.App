import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import reactIcon from "../../assets/react.svg";
import { useState } from "react";
import { pageRoutes } from "../../utils/uiData";
import { Button } from "../Inputs/Button";

const withHeaderAndSidebar = (Component) => {
  const NestedComponent = ({ ...props }) => {
    const { pathname = "" } = useLocation();
    const navigate = useNavigate();
    const [activeSidebar, setActiveSidebar] = useState(true);

    const handleLogOut = () => {
      localStorage.removeItem("accessToken");

      navigate("/", { replace: true });
    };
    return (
      <div className="">
        <div className="flex">
          <div
            className={`${
              activeSidebar ? "w-2/12" : "w-20"
            } transition-all duration-75 relative bg-dark text-light min-h-screen`}
          >
            <div
              className={`px-2 fixed top-0 ${
                activeSidebar ? "w-2/12" : "w-20"
              }`}
            >
              <div className="my-4 text-center">
                <Link to={"/dashboard"} className="inline-block">
                  <img src={reactIcon} alt="logo" />
                </Link>
              </div>
              <ul className={`grid text-lg capitalize`}>
                {pageRoutes.map((menu, i) => (
                  <li
                    key={i}
                    className={`${
                      pathname.includes(menu?.route) ? "bg-slate-600" : ""
                    } hover:bg-slate-600 py-2 px-1 rounded-md`}
                  >
                    <Link to={menu?.route} className="block">
                      <div
                        className={`flex items-center gap-2 ${
                          activeSidebar ? "" : "justify-center"
                        }`}
                      >
                        {menu?.icon}
                        <span className={`${activeSidebar ? "" : "hidden"}`}>
                          {menu?.label}
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
            } transition-all duration-75 relative`}
          >
            {/* <div className="w-full fixed top-0"> */}
            <div className="grid grid-cols-3 content-center p-2 shadow-md">
              <RxHamburgerMenu
                className="cursor-pointer text-2xl font-semibold"
                onClick={() => {
                  setActiveSidebar((state) => !state);
                }}
              />
              <div className=""></div>
              <div className="flex justify-end">
                <Button handleClick={handleLogOut}>Log Out</Button>
              </div>
            </div>
            {/* </div> */}
            <div className="px-4 py-12 min-h-screen">
              <Component {...props} />
            </div>
          </div>
        </div>
      </div>
    );
  };
  return NestedComponent;
};

export default withHeaderAndSidebar;
