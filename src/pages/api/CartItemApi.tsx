export const addToCartApi = async (cartId: any, productId: any) => {
  const response = await fetch(
    `http://localhost:8080/api/cartItem/createCartItems`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        cartId: cartId,
        cartItemId: 0,
        productId: productId,
        quantity: 1,
      }),
    }
  );
  return response.ok;
};
export const deleteCartItemApi = async (cartItemId: any) => {
  const response = await fetch(
    `http://localhost:8080/api/cartItem/deleteCartItems?cartItemId=${cartItemId}`,
    {
      method: "DELETE",
    }
  );
  return response.ok;
};
export const updateCartItemsQuantityApi =async (cartItemId: any, quantity: any) => {
  const response = await fetch(`http://localhost:8080/api/cartItem/updateCartItems`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      cartItemId: cartItemId,
      cartId: 0,
      productId: 0,
      quantity: quantity
    })
  })
  return response.ok

}
