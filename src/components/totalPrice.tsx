"use client"

import { UseCotext } from "@/context/Appcontext";
import { IProducts } from "@/types/productsType";
import axios from "axios";
import { useEffect, useState } from "react";

function TotalPrice() {
    const { cartItems } = UseCotext();
    const [data, setData] = useState<IProducts[]>([]);

    useEffect(() => {
        fetch("/assets/database/db.json").then((res) => {
            res.json().then(data => {
                setData(data.products)
                 
            })
        })
    }, [])
    
    const handlePlaceOrder = () => {
        let palceOrder = document.getElementById("placeOrder")
        if (palceOrder) {
            palceOrder.style.top = "0"

        }

        setTimeout(() => {
            if (palceOrder) {
           palceOrder.style.top="-100px"
       }
   },3000)
       
}


    const handleTotalPrice =
        cartItems.reduce((total, item) => {
            const selectedProduct = data.find(product => product.id == item.id.toString())
            return total + (selectedProduct?.price || 0) * item.qty
        }, 0);
    
    
 

    return(
    <div>
    <div className="fixed bottom-0 right-[35%] h-[20%] border rounded-t-2xl w-[30%] p-2.5 flex flex-col justify-between ">
        <h4 className="text-lg font-bold">Total price: {handleTotalPrice} $ </h4>
        <button onClick={handlePlaceOrder} className="w-full py-4 rounded-2xl cursor-pointer border border-sky-700 hover:bg-sky-700 hover:text-white shadow-2xl ">Place Order</button>

        </div>
        <div id="placeOrder" className="w-[30%] h-[50px] bg-green-600 rounded-2xl fixed top-[-100px] left-[35%] p-2.5 duration-150 max-md:w-[70%] max-md:left-[15%]">
<h4 className="font-bold">{cartItems.length ==0 ? "There are no products in your shopping cart yet!" :"Your order has been placed !"}</h4>
      </div>
        </div>);
}

export default TotalPrice;
