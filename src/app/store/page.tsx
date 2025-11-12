import Container from "@/components/Container";
import { IProductList, IProducts } from "@/types/productsType";
import axios from "axios";
import ProductItem from "@/components/productItem";
import Link from "next/link";
import Search from "@/components/search";
import Paginatoin from "@/components/pagination";
import StoreProducts from "@/components/store";
import SearchStoreProducts from "@/components/searchStoreProducts";

interface IStoreProps {
  params: Promise<{}>;
  searchParams: Promise<{ page: string; per_page: string; title: string }>;
}

async function Store({ searchParams }: IStoreProps) {
  // const page = (await searchParams).page ?? "1";
  // const per_page = (await searchParams).per_page ?? "4";
  // const title = (await searchParams).title ?? "";

  // console.log(title);

  // const { data } = await axios(
  //   `http://localhost:8004/products?_page=${page}&_per_page=${per_page}&title=${title}`
  // );
  // const products = (await data) as IProductList;

  


  return (
    <Container>
      {/* <Search />
      <div className="  grid grid-cols-12 gap-3  ">
        {products.data.map((item) => (
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
      <div className="px-[200px] max-xl:px-[100px] max-lg:px-[50px] max-md:px-[0px]">
        <Paginatoin pageCount={products.pages} />
      </div> */}
      {/* <StoreProducts /> */}
      <SearchStoreProducts/>
    </Container>
  );
}

export default Store;
