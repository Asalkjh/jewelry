"use client";

import { useState } from "react";
import { IProducts } from "@/types/productsType";
import { useEffect } from "react";
import Link from "next/link";
import ProductItem from "./productItem";

function SearchStoreProducts() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<IProducts[]>([]);
  const [searchProduct, setSearchProduct] = useState<IProducts[]>([]);
  useEffect(() => {
    fetch("/assets/database/db.json").then((res) => {
      res.json().then((data) => {
        setProducts(data.products);
      });
    });
  }, []);
  const handleSearch = () => {
    setSearchProduct(() => {
      return products.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    });
  };

  return (
    <div>
      <div className="flex flex-col justify-center w-full mt-3 ">
        <input
          className="border px-7 rounded-2xl my-2.5  mx-auto max-sm:w-[200px] "
          onChange={(e) => setSearch(e.target.value)}
          placeholder="searach the product"
          type="text"
        />
        <button
          className="border px-2.5  w-[100px] rounded-2xl mx-auto hover:border-sky-700 hover:text-sky-700 max-sm:w-[70px]"
          onClick={handleSearch}
        >
          {" "}
          search{" "}
        </button>
      </div>
      <div className="  grid grid-cols-12 gap-3 ">
        {search.length == 0 ? (
          products.map((product) => (
            <Link className="col-span-3" key={product.id} href={`/store/${product.id}`}>
              <ProductItem {...product} />{" "}
            </Link>
          ))
        ) : searchProduct.length == 0 ? (
          <div className="col-span-12 mx-auto mt-2.5">
            <h4 className="font-bold text-2xl">
              The desired product was not found
            </h4>
          </div>
        ) : (
          searchProduct.map((item) => (
            <Link
              className=" col-span-3"
              key={item.id}
              href={`/store/${item.id}`}
            >
              <ProductItem {...item} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default SearchStoreProducts;
