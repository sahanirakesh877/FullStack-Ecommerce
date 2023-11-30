import React from "react";

import {  ToastContainer, toast } from 'react-toastify';
import { useSelector, useDispatch } from "react-redux";
import {
  remove,
  decreaseQuantity,
  increaseQuantity,
} from "../Redux/CartSlice.js";

import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const productpage = () => {
    navigate("/Products");
  };
  const cartItems = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(remove(productId));

    // Calculate the TotalPrice

    // Display a success toast notification
    toast.info(`${items.length-1} Remaining to the cart!`, {
      position: "top-right",
      autoClose: 2000, // Duration in milliseconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  const items = useSelector((state) => state.cart);
  const handleIncreaseQuantity = (productId) => {
    console.log("Increasing quantity for productId:", productId);
    dispatch(increaseQuantity(productId));
  };

  const handleDecreaseQuantity = (productId) => {
    console.log("Decreasing quantity for productId:", productId);

    dispatch(decreaseQuantity(productId));
  };

  return (
    <>
      <div className=" mx-auto container">
        <p className="text-center font-bold text-3xl text-red-300  mt-6">
          Shopping Cart
        </p>
        <div className="mt-2 w-[600px] mx-auto">
          <div className="flow-root">
            {cartItems.length === 0 ? (
              <p className="text-red-400 text-xl font-bold mt-3">
                {" "}
                Oops! Cart is empty
              </p>
            ) : (
              <ul role="list" className="divide-y divide-gray-200  ">
                {cartItems.map((a) => {
                  return (
                    <>
                      <li className="flex py-6">
                        <div className="h-32  w-40     rounded">
                          <img
                            src={a.img}
                            alt="loading"
                            className=" w-full  object-cover object-center"
                          />
                        </div>
                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>
                                <a href="#">{a.title}</a>
                              </h3>
                              <p className="ml-4">${a.newPrice}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">
                              {a.color}
                            </p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                          <div className="text-xl flex items-center justify-center gap-2">
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                              onClick={() => handleDecreaseQuantity(a.id)}
                            >
                              _
                            </button>
                            <p className="text-gray-500">{a.quantity}</p>
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                              onClick={() => handleIncreaseQuantity(a.id)}
                            >
                              +
                            </button>
                            </div>
                            <div className="flex">
                              <button
                                type="button"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                onClick={() => handleRemoveFromCart(a.id)}
                              >
                                Remove
                              </button>
                              <ToastContainer/>
                            </div>
                          </div>
                        </div>
                      </li>
                    </>
                  );
                })}

                {/* More products... */}
              </ul>
            )}
          </div>
        </div>
        {/* shipping details */}

        <div className="border-t lg:w-[600px] mx-auto border-gray-200 py-2 sm:px-6 w-auto ">
          <div className="flex justify-end text-base font-medium text-gray-900">
            <p>TotalPrice</p>
            {/* <p>${TotalPrice.toFixed(2)}</p> */}
            <p>$200</p>
          </div>
          <p className="mt-0.5 flex justify-end text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="flex items-center  justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Checkout
            </a>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              or
              <button
                onClick={productpage}
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Continue Shopping
                <span aria-hidden="true"> →</span>
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
