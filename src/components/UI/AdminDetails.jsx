import { FaUserCircle } from "react-icons/fa";
import { Chips } from "./Chips";
import { ImBin } from "react-icons/im";

const AdminDetails = ({ admin = null, handleRemove = () => {} }) => {
  return (
    <div className="flex gap-2 p-3 sm:p-4">
      <div className="">
        <FaUserCircle className="text-5xl" />
      </div>
      <div className="">
        <h1 className="text-xl font-medium capitalize">{admin?.name}</h1>
        <p className="text-sm my-1">{admin?.email}</p>
        <div className="my-1">
          {admin?.roles?.map((role, id) => (
            <Chips key={id} title={role} />
          ))}
        </div>

        <div className="">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            mollitia impedit facilis molestias vitae nulla adipisci dolorem,
            molestiae nesciunt aliquam fuga corrupti et tenetur necessitatibus
            hic aperiam, ea illo quae suscipit consequatur veritatis voluptate
            eos eligendi? Asperiores dolor ullam voluptatem, porro cum aliquam
            blanditiis beatae doloremque maxime laudantium nisi unde?
          </p>
        </div>
      </div>
      <div className="">
        <ImBin
          className="text-red-500 cursor-pointer"
          role="button"
          tabIndex={0}
          onClick={() => handleRemove(admin?.id)}
        />
      </div>
    </div>
  );
};

export default AdminDetails;
