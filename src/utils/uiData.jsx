import { AiFillDashboard } from "react-icons/ai";
import { BsCartDashFill, BsFillBagDashFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";

export const products = [
  {
    id: 1,
    name: "K3 Headphone",
    quantity: 5,
    updatedAt: "2022-03-30T15:59:31+06:00",
    soldAt: "2022-08-08T15:59:31+06:00",
    stock: 12,
    price: 150,
  },
  {
    id: 2,
    name: "Lenovo Corei3 Laptop",
    quantity: 5,
    updatedAt: "2022-03-30T15:59:31+06:00",
    soldAt: "2022-08-08T15:59:31+06:00",
    stock: 12,
    price: 150,
  },
  {
    id: 3,
    name: "Deviser Guiter",
    quantity: 5,
    updatedAt: "2022-03-30T15:59:31+06:00",
    soldAt: "2022-08-08T15:59:31+06:00",
    stock: 12,
    price: 150,
  },
  {
    id: 4,
    name: "Samsung Galaxy A03",
    quantity: 5,
    updatedAt: "2022-03-30T15:59:31+06:00",
    soldAt: "2022-08-08T15:59:31+06:00",
    stock: 12,
    price: 150,
  },
  {
    id: 5,
    name: "Huawei Anti-wire system",
    quantity: 5,
    updatedAt: "2022-03-30T15:59:31+06:00",
    soldAt: "2022-08-08T15:59:31+06:00",
    stock: 12,
    price: 150,
  },
  {
    id: 6,
    name: "Singer 21 inch LED TV",
    quantity: 5,
    updatedAt: "2022-03-30T15:59:31+06:00",
    soldAt: "2022-08-08T15:59:31+06:00",
    stock: 12,
    price: 150,
  },
  {
    id: 7,
    name: "Panasonic DSLR Camera",
    quantity: 5,
    updatedAt: "2022-03-30T15:59:31+06:00",
    soldAt: "2022-08-08T15:59:31+06:00",
    stock: 12,
    price: 150,
  },
  {
    id: 8,
    name: "KB Electronic multi-thread fan",
    quantity: 5,
    updatedAt: "2022-03-30T15:59:31+06:00",
    soldAt: "2022-08-08T15:59:31+06:00",
    stock: 12,
    price: 150,
  },
  {
    id: 9,
    name: "G-shock Wrist Watch",
    quantity: 5,
    updatedAt: "2022-03-30T15:59:31+06:00",
    soldAt: "2022-08-08T15:59:31+06:00",
    stock: 12,
    price: 150,
  },
];

export const pageRoutes = [
  {
    id: 1,
    label: "dashboard",
    icon: <AiFillDashboard className="text-2xl" />,
    route: "/dashboard",
  },
  {
    id: 2,
    label: "manage products",
    icon: <BsFillBagDashFill className="text-2xl" />,
    route: "/manage-products",
  },
  {
    id: 3,
    label: "manage orders",
    icon: <BsCartDashFill className="text-2xl" />,
    route: "/manage-orders",
  },
  {
    id: 4,
    label: "manage admins",
    icon: <FaUserTie className="text-2xl" />,
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
    total: products?.length,
    icon: <BsFillBagDashFill />,
    route: "/manage-products",
  },
];
