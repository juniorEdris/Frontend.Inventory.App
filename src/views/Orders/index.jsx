import React, { useState } from "react";
import withHeaderAndSidebar from "../../components/HOC/withHeaderAndSidebar";
import { orders } from "../../utils/uiData";
import { PageHeadingWithAddButton } from "../../components/UI/PageHeadings";
import OrderTable from "../../components/UI/OrderTable";
import { Input } from "../../components/Inputs";
import CallBackModal from "../../components/UI/CallBackModal";
import { toast } from "react-toastify";

const Order = () => {
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const [allOrders, setAllOrders] = useState(orders);
  const [searchedOrders, setSearchedOrders] = useState([]);
  const [searchInput, setSearchInput] = useState(null);
  const [order, setOrder] = useState({
    invoiceId: "",
    orders: [],
    deliverTo: "",
    email: "",
    total: "",
  });
  const [selectedOrder, setSelectedOrder] = useState(null);

  const closeEditModal = () => {
    setIsOpenEditModal(false);
    // setOrder({
    //   invoiceId: "",
    //   orders: [],
    //   deliverTo: "",
    //   email: "",
    //   total: "",
    // });
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
    });
  };

  const handleAddOrder = () => {
    if (
      !!order.deliverTo &&
      !!order.email &&
      !!order.total 
    ) {
      setAllProducts((state) => [
        { id: Math.random() + products.length + 1, ...product },
        ...state,
      ]);
      closeAddModal();
    } else {
      toast.error("Fill all required inputs!");
    }
  };

  const handleDelete = () => {
    const restProd = allOrders.filter((item) => item.id !== selectedOrder);
    setAllOrders(restProd);
    closeDeleteModal();
  };

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    setSearchedOrders(
      allOrders.filter((order) =>
        order.invoiceId
          .toLocaleLowerCase()
          .includes(e.target.value.toLocaleLowerCase())
      )
    );
  };

  const handleUpdate = () => {
    if (!!order?.deliverTo && !!order?.email && !!order?.total) {
      const restProd = allOrders.map((item) => {
        if (item?.id === selectedOrder) {
          item.deliverTo = order?.deliverTo;
          item.email = order?.email;
          item.total = order?.total;
        }
        return item;
      });
      setAllOrders(restProd);
      closeEditModal();
    } else {
      toast.error("Fill all required inputs!");
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
          placeHolder="Type for a quick search"
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
        handleSubmit={(order) => handleUpdate(order)}
        btnClasses="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      >
        {/* <div className="grid gap-1">
          <div className="flex items-center gap-2">
            <Input
              customClasses=""
              placeHolder=""
              label="name"
              name="name"
              handleInput={handleInputs}
              value={product?.name}
              required
            />
            <Input
              customClasses=""
              placeHolder=""
              label="quantity"
              name="quantity"
              handleInput={handleInputs}
              value={product?.quantity}
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <Input
              customClasses=""
              placeHolder=""
              label="stock"
              name="stock"
              handleInput={handleInputs}
              value={product?.stock}
              required
            />
            <Input
              customClasses=""
              placeHolder=""
              label="price"
              name="price"
              handleInput={handleInputs}
              value={product?.price}
              required
            />
          </div>
          <div>
            <div>
              <TextArea
                label="desc"
                name="desc"
                handleTextArea={handleInputs}
                value={product?.desc}
              />
            </div>
          </div>
        </div> */}
        {order?.email}
        {order?.orders.map((order) => (
          <p key={order?.id}>{order?.name}</p>
        ))}
        {order?.deliverTo}
        {order?.email}
        {order?.total}
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

      {/* Add products Call Back Dialog */}
      <CallBackModal
        isOpen={isOpenAddModal}
        closeModal={closeAddModal}
        handleSubmit={handleAddOrder}
        modalTitle={"Add Product"}
        buttonTitle="Add product"
        btnClasses="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      >
        <div className="grid gap-1">
          <div className="flex items-center gap-2">
            <Input
              customClasses=""
              placeHolder=""
              label="name"
              name="name"
              //   handleInput={handleInputs}
              //   value={product?.name}
              required
            />
            <Input
              customClasses=""
              placeHolder=""
              label="quantity"
              name="quantity"
              //   handleInput={handleInputs}
              //   value={product?.quantity}
              required
            />
          </div>

          <div className="flex items-center gap-2">
            <Input
              customClasses=""
              placeHolder=""
              label="stock"
              name="stock"
              //   handleInput={handleInputs}
              //   value={product?.stock}
              required
            />
            <Input
              customClasses=""
              placeHolder=""
              label="price"
              name="price"
              //   handleInput={handleInputs}
              //   value={product?.price}
              required
            />
          </div>

          {/* <div>
            <TextArea
              label="desc"
              name="desc"
              handleTextArea={handleInputs}
              value={product?.desc}
            />
          </div> */}
        </div>
      </CallBackModal>
      {/* Add products Call Back Dialog */}
    </div>
  );
};

export default withHeaderAndSidebar(Order);
