"use client";

import { IProducts } from "@/types/productsType";
import axios from "axios";

import Link from "next/link";
import { useEffect, useState } from "react";
import AddToCart from "./addToCart";

function ProposalProduct() {
  const [proposal, setProposal] = useState([] as IProducts[]);
  useEffect(() => {
    fetch("/assets/database/db.json").then((result) => {
      result.json().then(data=>{setProposal(data.products)})
    });
  }, []);

  const proposalProduct = proposal.filter((item) => item.proposal != false);

  return (
    <div className="container mx-auto mt-5">
      {proposalProduct.map((item) => (
        <Link className="shadow" key={item.id} href={`/store/${item.id}`}>
          <div className="grid grid-cols-12">
            <img className="col-span-3 shadow-2xl" src={item.image} alt="" />
            <div className="col-span-9 ml-2.5">
              <h2 className="text-2xl font-bold p-2.5">{item.title}</h2>
              <p className="p-2.5">{item.description}</p>
              <p className="p-2.5">${item.price}</p>
              <AddToCart id={parseInt(item.id)} />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProposalProduct;
