"use client";

import CartItem from "@/components/cartItem";
import Container from "@/components/Container";
import TotalPrice from "@/components/totalPrice";
import { UseCotext } from "@/context/Appcontext";
import Link from "next/link";

function Cart() {
  const { cartItems } = UseCotext();

  return (
    <div className="container mx-auto">
      {cartItems.length == 0 ? (
        <div className="flex justify-center mt-2.5 font-bold !">
          There are no products in the shopping cart
        </div>
      ) : (
        cartItems.map((item) => <CartItem key={item.id} {...item} />)
      )}
      <TotalPrice />
    </div>
  );
}

export default Cart;
