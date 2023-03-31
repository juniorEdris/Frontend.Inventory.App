import { ImBin } from "react-icons/im";
import { RiEditBoxFill } from "react-icons/ri";

const ProductTable = ({
  products = [],
  handleProductDetails = () => {},
  openDeleteModal = () => {},
  openEditModal = () => {},
}) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Purchase Limit
            </th>
            <th scope="col" className="px-6 py-3">
              Stock
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
          {products?.map((product) => (
            <tr
              key={product?.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <span
                  className="cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onClick={() => handleProductDetails(product)}
                >
                  {product?.name}
                </span>
              </th>
              <td className="px-6 py-4">{product?.quantity}</td>
              <td className="px-6 py-4">{product?.stock}</td>
              <td className="px-6 py-4">${product?.price}</td>
              <td className="px-6 py-4 text-right">
                <span
                  role="button"
                  tabIndex={0}
                  onClick={()=>openEditModal(product)}
                  className="mx-1 font-medium hover:underline"
                >
                  <RiEditBoxFill className="inline-block text-lg text-blue-500" />
                </span>
                <span
                  role="button"
                  tabIndex={0}
                  onClick={()=> openDeleteModal(product)}
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

export default ProductTable;
