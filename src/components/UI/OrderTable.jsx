import { ImBin } from "react-icons/im";
import { RiEditBoxFill } from "react-icons/ri";

const OrderTable = ({
  orders = [],
  openDeleteModal = () => {},
  openEditModal = () => {},
}) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Invoice No.
            </th>
            <th scope="col" className="px-6 py-3">
              Deliver To
            </th>
            <th scope="col" className="px-6 py-3">
              Total Price
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order) => (
            <tr
              key={order?.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <span>{order?.id}</span>
              </th>
              <td className="px-6 py-4">{order?.invoiceId}</td>
              <td className="px-6 py-4">{order?.deliverTo}</td>
              <td className="px-6 py-4">${order?.total}</td>
              <td className="px-6 py-4 text-right">
                <span
                  role="button"
                  tabIndex={0}
                  onClick={() => openEditModal(order)}
                  className="mx-1 font-medium hover:underline"
                >
                  <RiEditBoxFill className="inline-block text-lg text-blue-500" />
                </span>
                <span
                  role="button"
                  tabIndex={0}
                  onClick={() => openDeleteModal(order)}
                  className="mx-1 font-medium hover:underline"
                >
                  <ImBin className="inline-block text-lg text-red-500" />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
