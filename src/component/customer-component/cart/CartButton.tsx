import React, { useContext } from 'react'
import { IconButton, Badge } from '@mui/material';
import { useRouter } from 'next/router';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { CartContext } from './CartContext';
export default function CartButton() {
    const router = useRouter()
    const { cart } = useContext(CartContext)
  return (
    <IconButton className="navbar" color="inherit" sx={{
        margin: "0 1rem",
        transform: "scale(1.2)"
      }} onClick={() => {
        router.push("/customer/cart")
      }}>
      <Badge badgeContent={cart !== null ? cart.productAndCartItemList.length : 0} color="error">
        <LocalGroceryStoreIcon />
      </Badge>
    </IconButton>
  )
}
