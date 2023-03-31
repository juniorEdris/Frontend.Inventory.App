import React, { useState } from "react";
import withHeaderAndSidebar from "../../components/HOC/withHeaderAndSidebar";
import { PageHeadingWithAddButton } from "../../components/UI/PageHeadings";
import { admins } from "../../utils/uiData";
import ProfileList from "../../components/UI/ProfileList";
import CallBackModal from "../../components/UI/CallBackModal";
import { Input } from "../../components/Inputs";
import { toast } from "react-toastify";
import AdminDetails from "../../components/UI/AdminDetails";
// import { getFromStorage, setToStorage } from "../../utils";

const Admins = () => {
  const [allAdmins, setAllAdmins] = useState(admins);
  const [searchedAdmins, setSearchedAdmins] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [adminDetails, setAdminDetails] = useState(null);
  const [newAdmin, setNewAdmin] = useState({
    name: "",
    email: "",
  });
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);
  const [roles, setRoles] = useState([]);

  const handleRoles = (role) => {
    setRoles((state) => [...state, role]);
  };

  const handleInputs = (e) => {
    setNewAdmin((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const closeAddModal = () => {
    setIsOpenAddModal(false);
    setNewAdmin({ name: "", email: "" });
    setRoles([]);
  };

  const handleAddAdmin = () => {
    if (!!newAdmin?.name && !!newAdmin?.email) {
      setAllAdmins((state) => [
        { id: Math.random() + admins.length + 1, ...newAdmin, roles },
        ...state,
      ]);
      // localStorage.setItem(
      //   "admins",
      //   JSON.stringify([
      //     { id: Math.random() + admins.length + 1, ...newAdmin, roles },
      //     ,
      //     ...allAdmins,
      //   ])
      // );
      closeAddModal();
    } else {
      toast.error("Fill all required inputs!");
    }
  };

  const handleRemoveAdmin = (id) => {
    const restProd = allAdmins.filter((admin) => admin.id !== id);
    setAllAdmins(restProd);
    setSearchedAdmins(restProd);
    setAdminDetails(null);
  };

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    setSearchedAdmins(
      allAdmins.filter((admin) =>
        admin.name
          .toLocaleLowerCase()
          .includes(e.target.value.toLocaleLowerCase())
      )
    );
  };

  return (
    <div>
      <PageHeadingWithAddButton
        title="Admins"
        handleAddBtn={() => setIsOpenAddModal(true)}
      />

      <div className={``}>
        <div
          className={`grid grid-cols-[400px_1fr] gap-3 border rounded-md p-2 min-h-screen`}
        >
          <div className="">
            <Input
              customClasses="mb-2"
              placeHolder="Type for a quick search"
              handleInput={handleSearch}
              value={searchInput}
            />
            <div className="min-h-[646px] overflow-y-auto">
              <ul className="grid gap-1">
                {(() => {
                  if (searchInput && searchedAdmins?.length) {
                    return searchedAdmins?.map((admin, id) => (
                      <li
                        className={`p-3 sm:p-4 hover:bg-gray-50 cursor-pointer rounded-md ${
                          admin?.id === adminDetails?.id ? "bg-gray-50" : ""
                        } border border-primary`}
                        role="button"
                        tabIndex={0}
                        onClick={() => {
                          setAdminDetails(admin);
                        }}
                        key={id}
                      >
                        <ProfileList
                          key={id}
                          admin={admin}
                          selectedId={adminDetails?.id}
                        />
                      </li>
                    ));
                  }

                  if (!searchInput && allAdmins?.length) {
                    return allAdmins?.map((admin, id) => (
                      <li
                        className={`p-3 sm:p-4 hover:bg-gray-50 cursor-pointer rounded-md ${
                          admin?.id === adminDetails?.id ? "bg-gray-50" : ""
                        } border border-primary`}
                        role="button"
                        tabIndex={0}
                        onClick={() => {
                          setAdminDetails(admin);
                        }}
                        key={id}
                      >
                        <ProfileList
                          key={id}
                          admin={admin}
                          selectedId={adminDetails?.id}
                        />
                      </li>
                    ));
                  }

                  return (
                    <div className="flex items-center justify-center font-medium text-primary">
                      No Items found!
                    </div>
                  );
                })()}
              </ul>
            </div>
          </div>
          <div className="border border-primary rounded-md">
            {!adminDetails ? (
              <div className="min-h-[100%] flex items-center justify-center font-medium text-primary">
                Select an admin
              </div>
            ) : (
              <AdminDetails
                admin={adminDetails}
                handleRemove={handleRemoveAdmin}
              />
            )}
          </div>
        </div>
      </div>

      {/* Admin add Call Back Dialog */}
      <CallBackModal
        isOpen={isOpenAddModal}
        closeModal={closeAddModal}
        handleSubmit={handleAddAdmin}
        modalTitle={"Add Admin"}
        buttonTitle="Add Admin"
        btnClasses="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      >
        <div className="grid gap-1">
          <div className=" py-1">
            <Input
              customClasses=""
              placeHolder=""
              label="name"
              name="name"
              handleInput={handleInputs}
              value={newAdmin?.name}
              required
            />
          </div>
          <div className=" py-1">
            <Input
              customClasses=""
              placeHolder=""
              label="email"
              name="email"
              handleInput={handleInputs}
              value={newAdmin?.email}
              required
            />
          </div>
          <div className="relative w-full py-1">
            <label className="">Roles</label>
            <select
              name="services"
              onChange={(e) => handleRoles(e.target.value)}
              className="w-full border border-stone-400 text-dark placeholder:text-gray-600 px-2 py-2 rounded focus:outline-none"
            >
              <option value="">Select one</option>
              <option value="admin">Admin</option>
              <option value="super-admin">Super Admin</option>
              <option value="moderator">Moderator</option>
              <option value="editor">Editor</option>
            </select>
          </div>
        </div>
      </CallBackModal>
      {/* Admin add Call Back Dialog */}
    </div>
  );
};

export default withHeaderAndSidebar(Admins);
