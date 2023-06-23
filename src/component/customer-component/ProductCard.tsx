import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { setup } from "@/config/setup";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { IconButton, Tooltip, Zoom } from "@mui/material";
import { useRouter } from "next/router";
import { useAppDispatch } from "@/feature/Hooks";
import { setOpen } from "@/feature/Alert";
import { addToCartApi } from "@/pages/api/CartItemApi";
import { UserContext } from "../login/AuthContext";
import {CartContext} from "./cart/CartContext";
export default function ProductCard({ product }: any) {
  const formatNumber = (number: number) => {
    return number.toLocaleString('en-US')
  }
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { user } = React.useContext(UserContext);
  const { cart } = React.useContext(CartContext)
  const handleAddtoCart = async() => {
    if (user === null ) {
      dispatch(
        setOpen({
          open: true,
          message: "You must login to buy",
          severity: "error",
        })
      );
    } else {
      const response = await addToCartApi(cart.cart.cartId, product.productId);
      if (response) {
        dispatch(
          setOpen({
            open: true,
            message: "Adding success",
            severity: "success",
          })
        );
      } else {
        dispatch(
          setOpen({
            open: true,
            message: "Adding fail",
            severity: "error",
          })
        );
      }
    }
  }
  return (
    <Card
      sx={{
        maxWidth: 345,
        cursor: "pointer",
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        image={`/assets/images/${product.image}`}
        sx={{
          height: "13rem",
        }}
        onClick={() => {
          router.push(`/customer/details?productId=${product.productId}`);
        }}
      />
      <CardContent sx={{
        paddingBottom: "0rem"
      }}>
      <Tooltip TransitionComponent={Zoom} title={product.productName}>
        <Typography gutterBottom component="div" sx={{
          overflow: "hidden",
          height: "3.1rem",
          fontWeight: "600",
          fontSize: "1.1rem",
        }} onClick={() => {
          router.push(`/customer/details?productId=${product.productId}`);
        }}>
          {product.productName}
        </Typography>
        </Tooltip>
        <Typography variant="body1" color="text.secondary">
          {formatNumber(product.price)} VND
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: product.quantity > 0 ? setup.success : setup.error,
          }}
        >
          {product.quantity > 0 ? "Còn hàng" : "Hết hàng"}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          width: "95%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "auto",
          paddingTop: "0rem"
        }}
      >
        <Button sx={{
          color: "black"
        }}
        onClick={() => {
          router.push(`/customer/details?productId=${product.productId}`);
        }}>Chi tiết</Button>
        <IconButton size="large" onClick={handleAddtoCart}>
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
