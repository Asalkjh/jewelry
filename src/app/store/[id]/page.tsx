"use client"

import { IProducts } from "@/types/productsType";
import axios from "axios";
import Container from "@/components/Container";
import AddToCart from "@/components/addToCart";
import { useEffect, useState,  } from "react";
import { useParams } from "next/navigation";

interface ISingleProductProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{}>;
}

function SingleProduct() {
  // const { data } = await axios(
  //   `http://localhost:8004/products/${(await params).id}`
  // );
  // const product = (await data) as IProducts;
  const [product, setProduct] = useState<IProducts[]>([]);
  const params=useParams<{id:string}>()

   useEffect(() => {
            fetch("/assets/database/db.json").then((res) => {
                res.json().then(data => {
                  setProduct(data.products)
                  // console.log(data.products)
                  // console.log(product)
            })
        })
   }, [])
  
  const singleProduct =product.find(item=> item.id == params.id )
  console.log(product)
  console.log(params)
  console.log(singleProduct)
  
     

  return (
    <Container>
      <div className="mx-auto flex flex-col justify-center w-[500px] mt-5 ">
        <h2 className="text-center font-bold text-2xl ">{singleProduct?.title} </h2>
        <p className="text-center"> $ {singleProduct?.price.toLocaleString()} </p>
        <AddToCart id={parseInt( params.id)} />
        <img className="mt-2.5" src={singleProduct?.image} alt="" />
      </div>
    </Container>
    
    
  );
}

export default SingleProduct;
