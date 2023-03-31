import { AiFillDashboard } from "react-icons/ai";
import { BsCartCheckFill, BsCartDashFill, BsFillBagDashFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { getFromStorage, uuid } from ".";

export const products = [
  {
    id: 1,
    name: "K3 Headphone",
    quantity: 5,
    updatedAt: "2022-03-30T15:59:31+06:00",
    soldAt: "2022-08-08T15:59:31+06:00",
    stock: 12,
    price: 150,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, architecto magnam, corrupti consectetur cupiditate tenetur recusandae, quam laborum blanditiis exercitationem vel ipsa aperiam harum a reiciendis voluptatibus vero sequi. Sed necessitatibus ipsa accusantium, eum magni doloremque maxime dicta. Quia excepturi aspernatur iusto ut laudantium sit in eaque sed, officia ipsa?",
  },
  {
    id: 2,
    name: "Lenovo Corei3 Laptop",
    quantity: 5,
    updatedAt: "2022-03-30T15:59:31+06:00",
    soldAt: "2022-08-08T15:59:31+06:00",
    stock: 12,
    price: 150,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, architecto magnam, corrupti consectetur cupiditate tenetur recusandae, quam laborum blanditiis exercitationem vel ipsa aperiam harum a reiciendis voluptatibus vero sequi. Sed necessitatibus ipsa accusantium, eum magni doloremque maxime dicta. Quia excepturi aspernatur iusto ut laudantium sit in eaque sed, officia ipsa?",
  },
  {
    id: 3,
    name: "Deviser Guiter",
    quantity: 5,
    updatedAt: "2022-03-30T15:59:31+06:00",
    soldAt: "2022-08-08T15:59:31+06:00",
    stock: 12,
    price: 150,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, architecto magnam, corrupti consectetur cupiditate tenetur recusandae, quam laborum blanditiis exercitationem vel ipsa aperiam harum a reiciendis voluptatibus vero sequi. Sed necessitatibus ipsa accusantium, eum magni doloremque maxime dicta. Quia excepturi aspernatur iusto ut laudantium sit in eaque sed, officia ipsa?",
  },
  {
    id: 4,
    name: "Samsung Galaxy A03",
    quantity: 5,
    updatedAt: "2022-03-30T15:59:31+06:00",
    soldAt: "2022-08-08T15:59:31+06:00",
    stock: 12,
    price: 150,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, architecto magnam, corrupti consectetur cupiditate tenetur recusandae, quam laborum blanditiis exercitationem vel ipsa aperiam harum a reiciendis voluptatibus vero sequi. Sed necessitatibus ipsa accusantium, eum magni doloremque maxime dicta. Quia excepturi aspernatur iusto ut laudantium sit in eaque sed, officia ipsa?",
  },
  {
    id: 5,
    name: "Huawei Anti-wire system",
    quantity: 5,
    updatedAt: "2022-03-30T15:59:31+06:00",
    soldAt: "2022-08-08T15:59:31+06:00",
    stock: 12,
    price: 150,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, architecto magnam, corrupti consectetur cupiditate tenetur recusandae, quam laborum blanditiis exercitationem vel ipsa aperiam harum a reiciendis voluptatibus vero sequi. Sed necessitatibus ipsa accusantium, eum magni doloremque maxime dicta. Quia excepturi aspernatur iusto ut laudantium sit in eaque sed, officia ipsa?",
  },
  {
    id: 6,
    name: "Singer 21 inch LED TV",
    quantity: 5,
    updatedAt: "2022-03-30T15:59:31+06:00",
    soldAt: "2022-08-08T15:59:31+06:00",
    stock: 12,
    price: 150,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, architecto magnam, corrupti consectetur cupiditate tenetur recusandae, quam laborum blanditiis exercitationem vel ipsa aperiam harum a reiciendis voluptatibus vero sequi. Sed necessitatibus ipsa accusantium, eum magni doloremque maxime dicta. Quia excepturi aspernatur iusto ut laudantium sit in eaque sed, officia ipsa?",
  },
  {
    id: 7,
    name: "Panasonic DSLR Camera",
    quantity: 5,
    updatedAt: "2022-03-30T15:59:31+06:00",
    soldAt: "2022-08-08T15:59:31+06:00",
    stock: 12,
    price: 150,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, architecto magnam, corrupti consectetur cupiditate tenetur recusandae, quam laborum blanditiis exercitationem vel ipsa aperiam harum a reiciendis voluptatibus vero sequi. Sed necessitatibus ipsa accusantium, eum magni doloremque maxime dicta. Quia excepturi aspernatur iusto ut laudantium sit in eaque sed, officia ipsa?",
  },
  {
    id: 8,
    name: "KB Electronic multi-thread fan",
    quantity: 5,
    updatedAt: "2022-03-30T15:59:31+06:00",
    soldAt: "2022-08-08T15:59:31+06:00",
    stock: 12,
    price: 150,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, architecto magnam, corrupti consectetur cupiditate tenetur recusandae, quam laborum blanditiis exercitationem vel ipsa aperiam harum a reiciendis voluptatibus vero sequi. Sed necessitatibus ipsa accusantium, eum magni doloremque maxime dicta. Quia excepturi aspernatur iusto ut laudantium sit in eaque sed, officia ipsa?",
  },
  {
    id: 9,
    name: "G-shock Wrist Watch",
    quantity: 5,
    updatedAt: "2022-03-30T15:59:31+06:00",
    soldAt: "2022-08-08T15:59:31+06:00",
    stock: 12,
    price: 150,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, architecto magnam, corrupti consectetur cupiditate tenetur recusandae, quam laborum blanditiis exercitationem vel ipsa aperiam harum a reiciendis voluptatibus vero sequi. Sed necessitatibus ipsa accusantium, eum magni doloremque maxime dicta. Quia excepturi aspernatur iusto ut laudantium sit in eaque sed, officia ipsa?",
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

export const admins = [
  {
    id: 1,
    name: "Neil Sims",
    email: "neilsims@mail.com",
    roles: ["admin", "super-admin"],
  },
];

export const allInventories = [
  {
    id: 1,
    label: "admins",
    total: getFromStorage("admins", [])?.length ?? 0,
    icon: <FaUserTie />,
    route: "/manage-admins",
  },
  {
    id: 2,
    label: "products",
    total: getFromStorage("products", [])?.length ?? 0,
    icon: <BsFillBagDashFill />,
    route: "/manage-products",
  },
  {
    id: 3,
    label: "orders",
    total: 0,
    icon: <BsCartCheckFill />,
    route: "/manage-products",
  },
];

export const orders = [
  {
    id: 1,
    idx: uuid(),
    orders: [
      {
        id: 1,
        name: "products name",
        qty: 5,
        price: 10,
      },
    ],
    deliverTo: "John doe",
    email: "jhonedoe@mail.com",
    total: 50,
  },
  {
    id: 2,
    idx: uuid(),
    orders: [
      {
        id: 1,
        name: "products name2",
        qty: 5,
        price: 10,
      },
    ],
    deliverTo: "Maria doe",
    email: "mariadoe@mail.com",
    total: 150,
  },
];
