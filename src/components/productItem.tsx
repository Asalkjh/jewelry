import { IProducts } from "@/types/productsType";

function ProductItem({ title, image, price }: IProducts) {
  return (
    <div className="mt-2.5 rounded-2xl ">
      <img src={image} alt="" />
      <h3 className="font-bold"> {title} </h3>
      <p>$ {price.toLocaleString()} </p>
    </div>
  );
}

export default ProductItem;
