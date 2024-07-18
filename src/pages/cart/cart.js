import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, getCartTotal, checkOut } from "@/redux/features/cartSlice";

export default function Cart() {
  const order = useSelector((state) => state.cart.value);
  const cartTotal = useSelector((state) => state.cart.cartTotal);
  const cartQuantity = useSelector((state) => state.cart.cartQuantity);
  console.log(order);
  const dispatch = useDispatch();



  return (
    <div className="overflow-x-auto min-h-screen font-mono py-4">
      <div className="container mx-auto px-4">
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-2 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Car
              </th>
              <th className="px-2 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-2 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-2 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total
              </th>
              <th className="px-2 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {order.map((car, id) => (
              <tr key={id}>
                <td className="px-2 md:px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="text-sm font-medium text-gray-900">{car.make_id}</div>
                  </div>
                </td>
                <td className="px-2 md:px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{car.price}</div>
                </td>
                <td className="px-2 md:px-6 py-4 whitespace-nowrap">
                  <input
                    type="number"
                    min="1"
                    value=""
                    // onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="text-sm w-16 h-8 border border-gray-300 rounded-md text-gray-900"
                  />
                </td>
                <td className="px-2 md:px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{car.quantity}</div>
                </td>
                <td className="px-2 md:px-6 py-4 whitespace-nowrap">
                  <button onClick={() => dispatch(removeFromCart(id))} className="text-red-600 hover:text-red-800 text-sm font-semibold">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
          
      </div>
    </div>
  );
}