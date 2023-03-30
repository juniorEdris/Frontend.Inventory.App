import React, { useState } from "react";
import withHeaderAndSidebar from "../../components/HOC/withHeaderAndSidebar";
import { PageHeadingWithAddButton } from "../../components/UI/PageHeadings";
import { Input } from "../../components/Inputs";
import CallBackModal from "../../components/UI/CallBackModal";
import { products } from "../../utils/uiData";
import ProductTable from "../../components/UI/ProductTable";
import { toast } from "react-toastify";

const Products = () => {
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isOpenDetailsModal, setIsOpenDetailsModal] = useState(false);
  const [productDetails, setProductDetails] = useState(null);

  const [product, setProduct] = useState({
    name: "",
    quantity: "",
    stock: "",
    price: "",
  });
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [allProducts, setAllProducts] = useState(products);

  const closeAddModal = () => {
    setIsOpenAddModal(false);
  };

  const closeEditModal = () => {
    setIsOpenEditModal(false);
    setProduct({
      name: "",
      quantity: "",
      stock: "",
      price: "",
    });
  };

  const closeDeleteModal = () => {
    setIsOpenDeleteModal(false);
  };

  const closeDetailsModal = () => {
    setIsOpenDetailsModal(false);
    // setProductDetails(null)
  };

  const handleProductDetails = (product) => {
    setProductDetails(product);
    setIsOpenDetailsModal(true);
  };

  const handleInputs = (e) => {
    setProduct((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const handleAddProd = () => {
    if (
      !!product?.name &&
      !!product?.stock &&
      !!product?.price &&
      !!product?.quantity
    ) {
      setAllProducts((state) => [
        { id: products.length + 1, ...product },
        ...state,
      ]);
      setIsOpenAddModal(false);
      setProduct({
        name: "",
        quantity: "",
        stock: "",
        price: "",
      });
    } else {
      toast.error("Fill All the inputs!");
    }
  };

  const handleDelete = () => {
    const restProd = allProducts.filter((item) => item.id !== selectedProduct);
    setAllProducts(restProd);
    setIsOpenDeleteModal(false);
  };

  const handleUpdate = () => {
    const restProd = allProducts.map((item) => {
      if (item?.id === selectedProduct) {
        item.name = product?.name;
        item.quantity = product?.quantity;
        item.price = product?.price;
        item.stock = product?.stock;
      }
      return item;
    });

    setAllProducts(restProd);
    setIsOpenEditModal(false);
  };

  return (
    <div>
      <PageHeadingWithAddButton
        title="products"
        handleAddBtn={() => setIsOpenAddModal(true)}
      />

      <div className={`my-8`}>
        <Input customClasses="" placeHolder="Type for a quick search" />
      </div>

      <div className={``}>
        <ProductTable
          products={allProducts}
          handleProductDetails={handleProductDetails}
          openEditModal={(product) => {
            setProduct(product);
            setIsOpenEditModal(true);
            setSelectedProduct(product?.id);
          }}
          openDeleteModal={(product) => {
            setSelectedProduct(product?.id);
            setIsOpenDeleteModal(true);
          }}
        />
      </div>

      {/* Add products Call Back Dialog */}
      <CallBackModal
        isOpen={isOpenAddModal}
        closeModal={closeAddModal}
        handleSubmit={handleAddProd}
        modalTitle={"Add Product"}
        buttonTitle="Add product"
        btnClasses="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      >
        <div className="">
          <div className="flex items-center gap-2">
            <Input
              customClasses=""
              placeHolder=""
              label="name"
              name="name"
              handleInput={handleInputs}
              value={product?.name}
            />
            <Input
              customClasses=""
              placeHolder=""
              label="quantity"
              name="quantity"
              handleInput={handleInputs}
              value={product?.quantity}
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
            />
            <Input
              customClasses=""
              placeHolder=""
              label="price"
              name="price"
              handleInput={handleInputs}
              value={product?.price}
            />
          </div>
        </div>
      </CallBackModal>
      {/* Add products Call Back Dialog */}

      {/* Edit product Call Back Dialog */}
      <CallBackModal
        isOpen={isOpenEditModal}
        closeModal={closeEditModal}
        modalTitle={"Edit Product"}
        handleSubmit={(product) => handleUpdate(product)}
        btnClasses="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      >
        <div className="">
          <div className="flex items-center gap-2">
            <Input
              customClasses=""
              placeHolder=""
              label="name"
              name="name"
              handleInput={handleInputs}
              value={product?.name}
            />
            <Input
              customClasses=""
              placeHolder=""
              label="quantity"
              name="quantity"
              handleInput={handleInputs}
              value={product?.quantity}
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
            />
            <Input
              customClasses=""
              placeHolder=""
              label="price"
              name="price"
              handleInput={handleInputs}
              value={product?.price}
            />
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

      {/* product details Call Back Dialog */}
      <CallBackModal
        isOpen={isOpenDetailsModal}
        closeModal={closeDetailsModal}
        modalTitle={"Product Details"}
        btnClasses="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        fluid
      >
        <p className="text-sm text-gray-500">{productDetails?.name}</p>
      </CallBackModal>
      {/* product details Call Back Dialog */}
    </div>
  );
};

export default withHeaderAndSidebar(Products);
