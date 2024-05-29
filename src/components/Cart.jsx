import { useCart } from "./CartContext";
import { Delete, ShoppingCart } from "./Icons";
import { useState } from "react";

const Cart = () => {
  const [toggle, setToggle] = useState(false);
  const { cart } = useCart();

  return (
    <div className="flex items-center">
      <button
        role="button"
        onClick={() => setToggle(!toggle)}
        className="relative cursor-pointer hover:fill-neutral-blue-400 fill-neutral-blue-300"
      >
        <ShoppingCart />
        {cart.length > 0 && (
          <span className="absolute bottom-[60%] text-center rounded-full bg-primary-orange-200 w-6 h-4 text-[0.675rem] text-white font-bold">
            <p>{cart[0].count}</p>
          </span>
        )}
      </button>

      {toggle && (
        <div className="w-[95%] md:max-w-md min-h-[16rem] absolute flex flex-col top-[4.5rem] md:top-[6rem] left-[2.5%] md:right-1 md:left-auto bg-white rounded-lg shadow-lg z-10">
          <h3 className="w-full text-lg font-bold border-b-2 border-gray-100 p-5">
            Cart
          </h3>
          {cart.length == 0 ? (
            <div className="w-full grow flex justify-center items-center">
              <p className="text-neutral-blue-300 font-bold text-lg">
                Your cart is empty
              </p>
            </div>
          ) : (
            <div className="w-full grow flex flex-col justify-between gap-5 p-6">
              <ul>
                {cart.map((item) => (
                  <CartItem item={item} key={item.id} />
                ))}
              </ul>
              <button className="rounded-lg bg-primary-orange-200 w-full p-4 text-white font-bold">
                Checkout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const CartItem = ({ item }) => {
  const total = item.cost * item.count;
  const { removeFromCart } = useCart();
  return (
    <li className="w-full flex item-center justify-between gap-4">
      <img src={item.image} alt="shoes" className="w-16 h-16 rounded-md" />
      <div className="w-full flex flex-col justify-center items-start">
        <p className="text-neutral-blue-300">{item.name}</p>
        <span className="flex gap-3">
          <p className="text-neutral-blue-300">
            ${item.cost.toFixed(2)} x {item.count}
          </p>
          <p className="font-bold">${total.toFixed(2)}</p>
        </span>
      </div>
      <button onClick={() => removeFromCart(item.id)}>
        <Delete />
      </button>
    </li>
  );
};

export default Cart;
