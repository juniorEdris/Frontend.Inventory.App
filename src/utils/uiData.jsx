import { AiFillDashboard } from "react-icons/ai";
import { BsCartDashFill, BsFillBagDashFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";

export const pageRoutes = [
  {
    id: 1,
    label: "dashboard",
    icon: <AiFillDashboard  className="text-2xl"/>,
    route: "/dashboard",
  },
  {
    id: 2,
    label: "manage products",
    icon: <BsFillBagDashFill  className="text-2xl"/>,
    route: "/manage-products",
  },
  {
    id: 3,
    label: "manage orders",
    icon: <BsCartDashFill  className="text-2xl"/>,
    route: "/manage-orders",
  },
  {
    id: 4,
    label: "manage admins",
    icon: <FaUserTie  className="text-2xl"/>,
    route: "/manage-admins",
  },
];

export const allInventories = [
  {
    id: 1,
    label: "admins",
    total: 41,
    icon: <FaUserTie />,
    route: "/manage-admins",
  },
  {
    id: 2,
    label: "products",
    total: 214,
    icon: <BsFillBagDashFill />,
    route: "/manage-products",
  },
];
