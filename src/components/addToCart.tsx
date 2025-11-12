"use client";

import { UseCotext } from "@/context/Appcontext";

interface IAddToCartProps {
  id: number;
}

function AddToCart({ id }: IAddToCartProps) {

  const {
    handleIncreaseProduct,
    cartItems,
    handleDescreaseProduct,
    handleRemoveProduct,
    handleGetProductQty,
  } = UseCotext();

  return (
    <div className="mx-auto">
      {handleGetProductQty(id) === 0 ? (
        <div>
          {" "}
          <button
            onClick={() => handleIncreaseProduct(id)}
            className="px-4 py-2 bg-black text-white rounded-2xl"
          >
            Add to cart
          </button>{" "}
        </div>
      ) : (
        <div>
          {" "}
          <button
            className="border rounded-full px-3 py-1.5 mx-1.5 "
            onClick={() => handleIncreaseProduct(id)}
          >
            +
          </button>
          {handleGetProductQty(id)}
          <button
            className="border rounded-full px-3.5 py-1.5 mx-1.5"
            onClick={() => handleDescreaseProduct(id)}
          >
            -
          </button>
          <button
            className="border rounded-full px-3 py-1.5 mx-1.5 "
            onClick={() => handleRemoveProduct(id)}
          >
            remove
          </button>
        </div>
      )}
    </div>
  );
}

export default AddToCart;
