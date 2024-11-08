/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/slices/cart-slice";

const CartTile = ({ cartItem }) => {
    const dispatch = useDispatch();
    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(cartItem.id));
  };
  return (
    <div className="flex items-center p-5 justify-center bg-red-500 mt-2 mb-2 rounded-xl">
      <dir className="flex p-3">
        <img
          src={cartItem?.image}
          alt={cartItem?.title}
          className="h-28 rounded-lg "
        />
        <div className="ml-10 self-start space-y-5">
          <h1 className="text-xl font-bold text-white">{cartItem.title}</h1>
          <p className="text-white font-extrabold">{cartItem.price}</p>
        </div>
      </dir>
      <div>
        <button
          onClick={handleRemoveFromCart}
          className="bg-red-950 text-white border-2 rounded-lg font-bold p-4"
        >
          Remove From Cart
        </button>
      </div>
    </div>
  );
};
export default CartTile;
