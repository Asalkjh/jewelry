"use client";

import { run } from "node:test";
import { createContext, useContext, useEffect, useState } from "react";
import { json } from "stream/consumers";

interface IAppContextProvider {
  children: React.ReactNode;
}

interface ICartItem {
  id: number;
  qty: number;
}

interface IAppContext {
  cartItems: ICartItem[];
  handleIncreaseProduct: (id: number) => void;
  handleDescreaseProduct: (id: number) => void;
  handleRemoveProduct: (id: number) => void;
  handleGetProductQty: (id: number) => number | undefined;
}

export const AppContext = createContext({} as IAppContext);

export const UseCotext = () => {
  return useContext(AppContext);
};

export function AppContextProvider({ children }: IAppContextProvider) {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  useEffect(() => {
    const isCart = localStorage.getItem("cartItem");
    console.log(isCart);
    if (isCart) {
      setCartItems(JSON.parse(isCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleIncreaseProduct = (id: number) => {
    setCartItems((prev) => {
      let currentItem = prev.find((item) => item.id == id);

      if (currentItem == null) {
        return [...prev, { id: id, qty: 1 }];
      } else {
        return prev.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handleDescreaseProduct = (id: number) => {
    setCartItems((prev) => {
      let isLastOne = prev.find((item) => item.id == id)?.qty == 1;
      if (isLastOne) {
        return prev.filter((item) => item.id != id);
      } else {
        return prev.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handleRemoveProduct = (id: number) => {
    setCartItems((prev) => {
      return prev.filter((item) => item.id != id);
    });
  };

  const handleGetProductQty = (id: number) => {
    return cartItems.find((item) => item.id == id)?.qty ?? 0;
  };

  return (
    <>
      <AppContext.Provider
        value={{
          cartItems,
          handleIncreaseProduct,
          handleDescreaseProduct,
          handleRemoveProduct,
          handleGetProductQty,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
}
