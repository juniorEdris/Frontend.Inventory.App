import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { Chips } from "./Chips";

const ProfileList = ({ admin }) => {
  return (
    <div className="flex items-center space-x-4" key={admin?.id}>
      <div className="flex-shrink-0">
        <img
          className="w-8 h-8 rounded-full"
          src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
          alt="Neil image"
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-medium text-gray-900 truncate dark:text-white">
          {admin?.name}
        </p>
        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
          {admin?.email}
        </p>

        {admin?.roles.length && (
          <div className="my-[5px]">
            {admin?.roles?.map((role, id) => (
              <Chips id={id} title={role} />
            ))}
          </div>
        )}
      </div>
      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white opacity-0 hover:opacity-100">
        <BsFillArrowRightSquareFill />
      </div>
    </div>
  );
};

export default ProfileList;
