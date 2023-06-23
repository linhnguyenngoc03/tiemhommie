import { UserContext } from "@/component/login/AuthContext";
import { setOpen } from "@/feature/Alert";
import { useAppDispatch, useAppSelector } from "@/feature/Hooks";
import { getCartProductByUserUidApi } from "@/pages/api/CartApi";
import { addToCartApi } from "@/pages/api/CartItemApi";
import { createContext, useContext, useEffect, useState } from "react";

const cartInit = {
  cart: null as any,
  getCart: () => {},
};

export const CartContext = createContext(cartInit);
export default function CartProvider({ children }: any) {
  const [currentCart, setCurrentCart] = useState<any>(null);
  const { userBackend } = useContext(UserContext);
  const alert = useAppSelector((state) => state.alert);
  const dispatch = useAppDispatch();
  const cart = currentCart;
  const getCart = async () => {
    const response = await getCartProductByUserUidApi();
    setCurrentCart(response);
  };
  useEffect(() => {
    userBackend === null ? setCurrentCart(null) : getCart();
  }, [userBackend, alert]);
  return (
    <CartContext.Provider
      value={{ cart, getCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
