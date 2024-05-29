import { Minus, Plus, ShoppingCart } from "./Icons";
import { useState } from "react";
import { useCart } from "./CartContext";
import thumb1 from "../assets/image-product-1-thumbnail.jpg";

const Description = () => {
  const [count, setCount] = useState(0);
  const cost = 125;
  const name = "Fall Limited Edition Sneakers";
  const { addToCart } = useCart();

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) setCount(count - 1);
  };

  const handleAddToCart = () => {
    const item = {
      id: 1,
      name,
      cost,
      count,
      image: thumb1
    };
    if( count > 0)
        addToCart(item);
  };

  return (
    <div className="flex flex-col gap-4 md:gap-8 py-12 px-10">
      <h2 className="uppercase text-primary-orange-200 font-bold tracking-wider text-lg">
        Sneaker Company
      </h2>
      <h1 className="font-bold text-3xl md:text-6xl tracking-wide">
        Fall Limited Edition Sneakers
      </h1>
      <p className="text-neutral-blue-300 tracking-wider leading-7 max-w-xl">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>

      <div className="flex flex-row md:flex-col justify-between gap-3">
        <span className="flex items-center gap-4 md:gap-6 ">
          <p className="font-bold text-3xl">${cost.toFixed(2)}</p>
          <p className="rounded h-7 flex items-center bg-primary-orange-100 text-primary-orange-200 font-bold px-2">
            50%
          </p>
        </span>
        <p className="text-lg text-neutral-blue-200 font-bold line-through decoration-2">
          $250.00
        </p>
      </div>

      <div className="w-full flex flex-col gap-4 lg:flex-row">
        <div className="lg:grow-[2] flex justify-between rounded-lg bg-neutral-blue-100 p-4">
          <button onClick={() => decreaseCount()}>
            <Minus />
          </button>
          <p className="font-bold w-5 flex justify-center">{count}</p>
          <button onClick={() => increaseCount()}>
            <Plus />
          </button>
        </div>
        <button onClick={() => handleAddToCart()} className="lg:grow-[3] hover:opacity-75 flex justify-center gap-6 p-4 rounded-lg bg-primary-orange-200 text-white fill-white">
          <ShoppingCart />
          <p className="font-bold text-lg">Add to cart</p>
        </button>
      </div>
    </div>
  );
};

export default Description;
