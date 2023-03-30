import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ItemCountCards = ({
  count = 0,
  itemName = "",
  route = "/",
  Icon = null,
}) => {
  return (
    <div className="border border-primary text-primary rounded-md group/count-card transition-all duration-150">
      <div className="">
        <div className="flex items-center gap-2 justify-between p-3">
          <div className="">
            <h1 className="text-4xl font-medium">{count}</h1>
            <h1 className="capitalize text-2xl mt-3">{itemName}</h1>
          </div>
          <div className="text-5xl group-hover/count-card:text-6xl">{Icon}</div>
        </div>
        <div className="bg-primary hover:bg-primary-hover rounded-b-sm text-light">
          <Link
            to={route}
            className="flex items-center justify-center gap-2 py-1.5"
          >
            See More{" "}
            <BsFillArrowRightCircleFill className="inline-block text-sm" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemCountCards;
