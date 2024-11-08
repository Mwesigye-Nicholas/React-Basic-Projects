/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../cart-tile";

const Cart = () => {
  const [totalCart, setTotalCart] = useState(0);
  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  console.log("Total Cart:", totalCart);
  return (
    <div className="flex justify-center">
      {cart && cart.length ? (
        <div className="min-h-[80vh] grid grid-cols-2 max-w6xl mx-auto">
          <div className="flex flex-col justify-center items-center p-3">
            {cart.map((cartItem) => (
              <CartTile cartItem={cartItem} />
            ))}
          </div>
          <div className="w-[300px]">
            <div className=" flex flex-col justify-center items-end p-5 space-y-5 mt-14">
              <h1 className="font-bold text-red-100 text-lg">
                Your Cart Summary
              </h1>
              <p>
                <span className="text-gray-800 font-bold">Total Items: </span>
                <span>{cart.length}</span>
              </p>
              <p>
                <span className="text-gray-800 font-bold">Total Amount: </span>
                <span>{totalCart}</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          {" "}
          <h1 className="text-gray-800 mb-2 font-bold text-2xl">
            Your Cart is Empty
          </h1>
          <Link to={"/"}>
            <button className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};
export default Cart;
