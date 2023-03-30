import React, { useState } from "react";
import withHeaderAndSidebar from "../../components/HOC/withHeaderAndSidebar";
import { PageHeadingWithAddButton } from "../../components/UI/PageHeadings";
import { Input } from "../../components/Inputs";
import CallBackModal from "../../components/UI/CallBackModal";

const Products = () => {
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const closeAddModal = () => {
    setIsOpenAddModal(false);
  };

  const closeEditModal = () => {
    setIsOpenEditModal(false);
  };

  const closeDeleteModal = () => {
    setIsOpenDeleteModal(false);
  };

  return (
    <div>
      <PageHeadingWithAddButton
        title="Products"
        handleAddBtn={() => setIsOpenAddModal(true)}
      />

      <div className={`my-8`}>
        <Input customClasses="" placeHolder="Type for a quick search" />
      </div>

      <div className={``}>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4 text-right">
                  <span
                    role="button"
                    tabIndex={0}
                    onClick={() => setIsOpenEditModal(true)}
                    className="mx-1 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </span>
                  <span
                    role="button"
                    tabIndex={0}
                    onClick={() => setIsOpenDeleteModal(true)}
                    className="mx-1 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Delete
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Add products Call Back Dialog */}
      <CallBackModal
        isOpen={isOpenAddModal}
        closeModal={closeAddModal}
        modalTitle={"Add Product"}
        btnClasses="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      >
        <p className="text-sm text-gray-500">Callback Apears Here</p>
      </CallBackModal>
      {/* Add products Call Back Dialog */}

      {/* Edit product Call Back Dialog */}
      <CallBackModal
        isOpen={isOpenEditModal}
        closeModal={closeEditModal}
        modalTitle={"Edit Product"}
        btnClasses="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      >
        <p className="text-sm text-gray-500">Callback Apears Here</p>
      </CallBackModal>
      {/* Edit product Call Back Dialog */}

      {/* Delete product Call Back Dialog */}
      <CallBackModal
        isOpen={isOpenDeleteModal}
        closeModal={closeDeleteModal}
        modalTitle={""}
        btnClasses="inline-flex justify-center rounded-md border border-transparent bg-danger-400 px-4 py-2 text-sm font-medium text-light hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      >
        <p className="text-sm text-gray-500">Delete Modal</p>
      </CallBackModal>
      {/* Delete product Call Back Dialog */}
    </div>
  );
};

export default withHeaderAndSidebar(Products);
