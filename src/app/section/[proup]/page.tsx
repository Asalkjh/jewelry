"use client";

import Container from "@/components/Container";
import ProductItem from "@/components/productItem";
import { IProducts } from "@/types/productsType";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface IProductGroupsProps {
  params: Promise<{ proup: string }>;
  searchParams: Promise<{}>;
}

function ProductGroups() {
  // const group = (await params).proup;
  const [group, setGroup] = useState<IProducts[]>([]);
  const params = useParams<{ proup: string }>();

  useEffect(() => {
    fetch("/assets/database/db.json").then((result) => {
      result.json().then((data) => {
        setGroup(data.products);
      });
    });
  }, []);
  const getGroup = group.filter((item) => item.group == params.proup);

  // const { data } = await axios(`http://localhost:8004/products?group=${group}`);
  // const result = (await data) as IProducts[];

  return (
    <Container>
      <div className="grid grid-cols-12 gap-3 mt-5">
        {getGroup.map((item) => (
          <Link key={item.id} className="col-span-3" href={`/store/${item.id}`}>
            <ProductItem key={item.id} {...item} />
          </Link>
        ))}
      </div>
    </Container>
  );
}

export default ProductGroups;
