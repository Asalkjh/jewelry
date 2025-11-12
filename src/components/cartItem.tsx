"use client";

import AddToCart from "./addToCart";
import axios from "axios";
import { IProducts } from "@/types/productsType";
import { useEffect, useState } from "react";
import Link from "next/link";

interface ICartItem {
  id: number;
  qty: number;
}

function CartItem({ id, qty }: ICartItem) {
  const [products, setProducts] = useState<IProducts[]>([]);
  // useEffect(() => {
  //   axios(`http://localhost:8004/products/${id}`).then((result) => {
  //     setProduct(result.data);
  //   });
  // });

 
  
   useEffect(() => {
            fetch("/assets/database/db.json").then((res) => {
                res.json().then(data => {
                  setProducts(data.products)
                  
            })
        })
   }, [])
  
  const product=products.find(item=>item.id == id.toString())

  return (
    <div className="border  mt-2.5 rounded-2xl  flex justify-between flex-row-reverse ">
      <Link
        className="h-[100px] flex justify-between flex-row-reverse "
        href={`store/${id}`}
      >
        <img className="rounded-2xl" src={product?.image} alt="" />
        <div className="flex flex-row-reverse items-center ">
          <h3 className="font-bold mx-2.5"> {product?.title} </h3>
          <p> قیمت : {product?.price} </p>
        </div>
      </Link>
      <div className=" flex items-center">
        <AddToCart id={id} />
      </div>

      <div></div>
    </div>
  );
}

export default CartItem;
