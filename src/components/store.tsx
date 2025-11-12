"use client"

import { IProducts } from "@/types/productsType";
import { useEffect, useState } from "react";
import Link from "next/link";
import ProductItem from "./productItem";

function StoreProducts() {

    const[products,setProducts]=useState<IProducts[]>([])
     useEffect(() => {
        fetch("/assets/database/db.json").then((res) => {
            res.json().then(data => {
                console.log(data.products)
                setProducts(data.products)
        })
    })
},[])

    return (
        <div>
 <div className="  grid grid-cols-12 gap-3  ">
        {products.map((item) => (
          <Link
            className=" col-span-3"
            key={item.id}
            href={`/store/${item.id}`}
          >
            {" "}
            <ProductItem {...item} />{" "}
          </Link>
        ))}
      </div>
        </div>
    )
}

export default StoreProducts;