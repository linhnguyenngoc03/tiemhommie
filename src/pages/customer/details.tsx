import { getProductByProductIdApi } from "@/pages/api/ProductApi";
import Loading from "@/component/Loading";
import DetailsCard from "@/component/customer-component/details/DetailsCard";
import UserLayout from "@/layout/CustomerLayout";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
export default function Details() {
  const router = useRouter()
  const { productId } = router.query as any
  const [product, setProduct] = useState<any>(null)
    useEffect(() => {
    const getProduct = async () => {
      const product = await getProductByProductIdApi(productId)
      setProduct(product)
    }
    getProduct()
  }, [])
  return (
    <UserLayout>
      {product !== null ? (<DetailsCard product={product}/>) : (<Loading/>)}
    </UserLayout>
  );
}
