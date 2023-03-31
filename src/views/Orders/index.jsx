import React, { useState } from "react";
import withHeaderAndSidebar from "../../components/HOC/withHeaderAndSidebar";
import { orders } from "../../utils/uiData";
import { PageHeadingWithAddButton } from "../../components/UI/PageHeadings";
import OrderTable from "../../components/UI/OrderTable";
import { Input } from "../../components/Inputs";
import CallBackModal from "../../components/UI/CallBackModal";
import { toast } from "react-toastify";
import { ImBin } from "react-icons/im";
import { getFromStorage, setToStorage, uuid } from "../../utils";

const Order = () => {
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const [allOrders, setAllOrders] = useState(getFromStorage("orders", []));
  const [searchedOrders, setSearchedOrders] = useState([]);
  const [searchInput, setSearchInput] = useState(null);
  const [order, setOrder] = useState({
    invoiceId: "",
    orders: [],
    deliverTo: "",
    email: "",
    total: "",
    status: "",
  });
  const [selectedOrder, setSelectedOrder] = useState(null);

  const closeEditModal = () => {
    setIsOpenEditModal(false);
    setOrder({
      invoiceId: "",
      orders: [],
      deliverTo: "",
      email: "",
      total: "",
      status: "",
    });
  };

  const closeDeleteModal = () => {
    setIsOpenDeleteModal(false);
    setSelectedOrder(null);
  };

  const closeAddModal = () => {
    setIsOpenAddModal(false);
    setOrder({
      invoiceId: "",
      orders: [],
      deliverTo: "",
      email: "",
      total: "",
      status: "",
    });
  };

  const handleInputs = (e) => {
    setOrder((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const handleAddOrder = () => {
    if (
      !!order.deliverTo &&
      !!order.email &&
      !!order.total &&
      !!order.email.includes("@")
    ) {
      setAllOrders((state) => {
        const newState = [
          ...state,
          {
            id: crypto.randomUUID().toString(4),
            idx: uuid(),
            ...order,
          },
        ];
        setToStorage("orders", newState);
        return newState;
      });
      closeAddModal();
    } else {
      toast.error("Fill all required inputs and email formats!");
    }
  };

  const handleOrderDelete = (id) => {
    const restProd = order?.orders?.filter((item) => item.id !== id);
    setOrder((state) => ({
      ...state,
      orders: restProd,
    }));
  };

  const handleDelete = () => {
    const restProd = allOrders.filter((item) => item.id !== selectedOrder);
    setAllOrders(() => {
      const newState = restProd;
      setToStorage("orders", newState);
      return restProd;
    });
    closeDeleteModal();
  };

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    setSearchedOrders(
      allOrders.filter((order) =>
        order.idx
          .toLocaleLowerCase()
          .includes(e.target.value.toLocaleLowerCase())
      )
    );
  };

  const handleUpdate = () => {
    if (
      !!order?.deliverTo &&
      !!order?.email &&
      !!order?.total &&
      !!order?.email?.includes("@")
    ) {
      const restProd = allOrders.map((item) => {
        if (item?.id === selectedOrder) {
          item.deliverTo = order?.deliverTo;
          item.email = order?.email;
          item.total = order?.total;
          item.status = order?.status;
        }
        return item;
      });
      setAllOrders(() => {
        const newState = restProd;
        setToStorage("orders", newState);
        return restProd;
      });
      closeEditModal();
    } else {
      toast.error("Fill all required inputs and email formats!");
    }
  };

  return (
    <div>
      <PageHeadingWithAddButton
        title="Orders"
        handleAddBtn={() => setIsOpenAddModal(true)}
      />

      <div className={`my-8`}>
        <Input
          customClasses=""
          placeHolder="Type invoice id for a quick search"
          handleInput={handleSearch}
          value={searchInput}
        />
      </div>

      <div className="">
        {(() => {
          if (searchInput && searchedOrders?.length) {
            return (
              <OrderTable
                orders={searchedOrders}
                openEditModal={(order) => {
                  setOrder(order);
                  setIsOpenEditModal(true);
                  setSelectedOrder(order?.id);
                }}
                openDeleteModal={(order) => {
                  setSelectedOrder(order?.id);
                  setIsOpenDeleteModal(true);
                }}
              />
            );
          }
          if (!searchInput && allOrders?.length) {
            return (
              <OrderTable
                orders={allOrders}
                openEditModal={(order) => {
                  setOrder(order);
                  setIsOpenEditModal(true);
                  setSelectedOrder(order?.id);
                }}
                openDeleteModal={(order) => {
                  setSelectedOrder(order?.id);
                  setIsOpenDeleteModal(true);
                }}
              />
            );
          }

          return (
            <div className="flex items-center justify-center font-medium text-primary">
              No orders found!
            </div>
          );
        })()}
      </div>

      {/* Edit product Call Back Dialog */}
      <CallBackModal
        isOpen={isOpenEditModal}
        closeModal={closeEditModal}
        modalTitle={"Edit Order"}
        buttonTitle="update"
        handleSubmit={(order) => handleUpdate(order)}
        btnClasses="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      >
        <div className="grid gap-1">
          <div className="flex items-center gap-2">
            <Input
              type="email"
              customClasses=""
              placeHolder=""
              label="email"
              name="email"
              handleInput={handleInputs}
              value={order?.email}
              required
            />
            <Input
              customClasses=""
              placeHolder=""
              label="deliverTo"
              name="deliverTo"
              handleInput={handleInputs}
              value={order?.deliverTo}
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="max-w-xs">
              <Input
                customClasses=""
                placeHolder=""
                label="total price"
                name="total"
                handleInput={handleInputs}
                value={order?.total}
                required
              />
            </div>

            <div className="max-w-xs">
              <div className="relative w-full py-1">
                <label className="">Status</label>
                <select
                  name="status"
                  onChange={handleInputs}
                  className="w-full border border-stone-400 text-dark placeholder:text-gray-600 px-2 py-2 rounded focus:outline-none"
                  value={order?.status}
                >
                  <option value="">---</option>
                  <option value="pending">Pending</option>
                  <option value="active">Active</option>
                  <option value="delivered">delivered</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <div className="max-w-xs grid gap-1 py-4">
              <h1 className="text-lg font-medium">Orders:</h1>
              <div className="">
                <div className="flex items-center justify-between px-2">
                  <p className="text-lg font-medium">Product name</p>
                  <p className="text-lg font-medium">Qty</p>
                  <p className="text-lg font-medium">Price</p>
                </div>
              </div>
              {order?.orders.length ? (
                order?.orders.map((order) => (
                  <div key={order?.id} className="">
                    <div className="flex items-center justify-between border rounded-md px-2">
                      <p className="text-lg">{order?.name}</p>
                      <p className="text-lg">{order?.qty ?? 0}</p>
                      <p className="text-lg">{order?.price ?? 0}</p>
                      <span
                        className=""
                        role="button"
                        tabIndex={0}
                        onClick={() => handleOrderDelete(order?.id)}
                      >
                        <ImBin className="inline-block text-lg text-red-500" />
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center">No items found</p>
              )}
            </div>
          </div>
        </div>
      </CallBackModal>
      {/* Edit product Call Back Dialog */}

      {/* Delete product Call Back Dialog */}
      <CallBackModal
        isOpen={isOpenDeleteModal}
        closeModal={closeDeleteModal}
        handleSubmit={handleDelete}
        modalTitle={""}
        buttonTitle={"Delete"}
        btnClasses="inline-flex justify-center rounded-md border border-transparent text-gray-100 bg-red-600 px-4 py-2 text-sm font-medium text-light hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      >
        <h1 className="text-xl font-medium text-red-500">
          Do you want to delete the product?
        </h1>
      </CallBackModal>
      {/* Delete product Call Back Dialog */}

      {/* Add order Call Back Dialog */}
      <CallBackModal
        isOpen={isOpenAddModal}
        closeModal={closeAddModal}
        handleSubmit={handleAddOrder}
        modalTitle={"Add Order"}
        buttonTitle="Add Order"
        btnClasses="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      >
        <div className="grid gap-1">
          <div className="flex items-center gap-2">
            <Input
              type="email"
              customClasses=""
              placeHolder=""
              label="email"
              name="email"
              handleInput={handleInputs}
              value={order?.email}
              required
            />
            <Input
              customClasses=""
              placeHolder=""
              label="deliverTo"
              name="deliverTo"
              handleInput={handleInputs}
              value={order?.deliverTo}
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="max-w-xs">
              <Input
                customClasses=""
                placeHolder=""
                label="total price"
                name="total"
                handleInput={handleInputs}
                value={order?.total}
                required
              />
            </div>

            <div className="max-w-xs">
              <div className="relative w-full py-1">
                <label className="">Status</label>
                <select
                  name="status"
                  onChange={handleInputs}
                  className="w-full border border-stone-400 text-dark placeholder:text-gray-600 px-2 py-2 rounded focus:outline-none"
                  value={order?.status}
                >
                  <option value="">---</option>
                  <option value="pending">Pending</option>
                  <option value="active">Active</option>
                  <option value="delivered">delivered</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </CallBackModal>
      {/* Add order Call Back Dialog */}
    </div>
  );
};

export default withHeaderAndSidebar(Order);
