import React, { useState } from "react";
import withHeaderAndSidebar from "../../components/HOC/withHeaderAndSidebar";
import { PageHeadingWithAddButton } from "../../components/UI/PageHeadings";
import { admins } from "../../utils/uiData";
import ProfileList from "../../components/UI/ProfileList";
import CallBackModal from "../../components/UI/CallBackModal";
import { Input } from "../../components/Inputs";
import { toast } from "react-toastify";
import { FaUserCircle } from "react-icons/fa";
import { Chips } from "../../components/UI/Chips";

const Admins = () => {
  const [allAdmins, setAllAdmins] = useState(admins);
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
    setRoles([])
  };

  const handleAddAdmin = () => {
    if (!!newAdmin?.name && !!newAdmin?.email) {
      setAllAdmins((state) => [
        { id: admins.length + 1, ...newAdmin, roles },
        ...state,
      ]);
      closeAddModal();
    } else {
      toast.error("Fill all the inputs!");
    }
  };

  return (
    <div>
      <PageHeadingWithAddButton
        title="Admins"
        handleAddBtn={() => setIsOpenAddModal(true)}
      />

      <div className={``}>
        <div
          className={`grid grid-cols-[400px_1fr] gap-3 border rounded-md p-2`}
        >
          <div className="">
            <div className="">
              <ul className="grid gap-1">
                {allAdmins?.map((admin, id) => (
                  <li
                    className="p-3 sm:p-4 hover:bg-gray-50 cursor-pointer rounded-md"
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      setAdminDetails(admin);
                    }}
                    key={id}
                  >
                    <ProfileList key={id} admin={admin} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="">
            {!adminDetails ? (
              <div className="">Select an admin</div>
            ) : (
              <div className="flex gap-2 p-3 sm:p-4">
                <div className="">
                  <FaUserCircle className="text-3xl" />
                </div>
                <div className="">
                  <p className="text-lg">{adminDetails?.name}</p>
                  <div className="">
                    {adminDetails?.roles?.map((role) => (
                      <Chips title={role} />
                    ))}
                  </div>
                </div>
              </div>
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
        btnClasses="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      >
        <div className="">
          <div className=" py-1">
            <Input
              customClasses=""
              placeHolder=""
              label="name"
              name="name"
              handleInput={handleInputs}
              value={newAdmin?.name}
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
