import React, { useState } from "react";
import withHeaderAndSidebar from "../../components/HOC/withHeaderAndSidebar";
import { PageHeadingWithAddButton } from "../../components/UI/PageHeadings";
import { Input, TextArea } from "../../components/Inputs";
import CallBackModal from "../../components/UI/CallBackModal";
import { products } from "../../utils/uiData";
import ProductTable from "../../components/UI/ProductTable";
import { toast } from "react-toastify";
import { getFromStorage, setToStorage } from "../../utils";

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
    desc: "",
  });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [allProducts, setAllProducts] = useState(
    getFromStorage("products", [])
  );
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const closeAddModal = () => {
    setIsOpenAddModal(false);
    setProduct({
      name: "",
      quantity: "",
      stock: "",
      price: "",
      desc: "",
    });
  };

  const closeEditModal = () => {
    setIsOpenEditModal(false);
    setProduct({
      name: "",
      quantity: "",
      stock: "",
      price: "",
      desc: "",
    });
  };

  const closeDeleteModal = () => {
    setIsOpenDeleteModal(false);
    setSelectedProduct(null);
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
      setAllProducts((state) => {
        const newState = [
          { id: Math.random() + products.length + 1, ...product },
          ...state,
        ];
        setToStorage("products", newState);
        return newState;
      });
      closeAddModal();
    } else {
      toast.error("Fill all required inputs!");
    }
  };

  const handleDelete = () => {
    const restProd = allProducts.filter((item) => item.id !== selectedProduct);
    setAllProducts(() => {
      const newState = restProd;
      setToStorage("products", newState);
      return restProd;
    });
    closeDeleteModal();
  };

  const handleUpdate = () => {
    if (
      !!product?.name &&
      !!product?.stock &&
      !!product?.price &&
      !!product?.quantity
    ) {
      const restProd = allProducts.map((item) => {
        if (item?.id === selectedProduct) {
          item.name = product?.name;
          item.quantity = product?.quantity;
          item.price = product?.price;
          item.stock = product?.stock;
          item.desc = product?.desc;
        }
        return item;
      });
      setAllProducts(() => {
        const newState = restProd;
        setToStorage("products", newState);
        return restProd;
      });
      closeEditModal();
    } else {
      toast.error("Fill all required inputs!");
    }
  };

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    setSearchedProducts(
      allProducts.filter((product) =>
        product.name
          .toLocaleLowerCase()
          .includes(e.target.value.toLocaleLowerCase())
      )
    );
  };

  return (
    <div>
      <PageHeadingWithAddButton
        title="products"
        handleAddBtn={() => setIsOpenAddModal(true)}
      />

      <div className={`my-8`}>
        <Input
          customClasses=""
          placeHolder="Type products name for a quick search"
          handleInput={handleSearch}
          value={searchInput}
        />
      </div>

      <div className={``}>
        {(() => {
          if (searchInput && searchedProducts?.length) {
            return (
              <ProductTable
                products={searchedProducts}
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
            );
          }
          if (!searchInput && allProducts?.length) {
            return (
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
            );
          }

          return (
            <div className="flex items-center justify-center font-medium text-primary">
              No Items found!
            </div>
          );
        })()}
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
        <div className="grid gap-1">
          <div className="flex items-center gap-2">
            <Input
              customClasses=""
              placeHolder=""
              label="Product name"
              name="name"
              handleInput={handleInputs}
              value={product?.name}
              required
            />
            <Input
              customClasses=""
              placeHolder=""
              label="purchase limit"
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
            <TextArea
              label="desc"
              name="desc"
              handleTextArea={handleInputs}
              value={product?.desc}
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
        <div className="grid gap-1">
          <div className="flex items-center gap-2">
            <Input
              customClasses=""
              placeHolder=""
              label="product name"
              name="name"
              handleInput={handleInputs}
              value={product?.name}
              required
            />
            <Input
              customClasses=""
              placeHolder=""
              label="purchase limit"
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
        handleSubmit={closeDetailsModal}
        modalTitle={"Product Details"}
        buttonTitle="close"
        btnClasses="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        fluid
      >
        <div className="py-5 grid gap-2">
          <h1 className="text-2xl font-semibold text-primary">
            {productDetails?.name}
          </h1>
          <div className="flex items-center gap-3">
            <span>Purchase limit: {productDetails?.quantity ?? 0}</span>
            <span>Stock: {productDetails?.stock ?? 0}</span>
          </div>
          <p className="text-sm text-gray-500">{productDetails?.desc}</p>
        </div>
      </CallBackModal>
      {/* product details Call Back Dialog */}
    </div>
  );
};

export default withHeaderAndSidebar(Products);
