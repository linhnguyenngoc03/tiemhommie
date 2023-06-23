import React, { useEffect, useState } from "react";
import ProductTable from "@/component/admin-component/Product/ProductTable";
import AdminLayout from "@/layout/AdminLayout";

import { getProductListApi } from "@/pages/api/ProductApi";
import Loading from "@/component/Loading";
import { getCategoryListApi } from "@/pages/api/CategoryApi";
import { useAppSelector } from "@/feature/Hooks";
export default function Product() {
    const [productList, setProductList] = useState(null)
    const [categoryList, setCategoryList] = useState(null)
    const alert = useAppSelector(state => state.alert)
    useEffect(() => {
        const getProductList =async () => {
            const productList = await getProductListApi()
            setProductList(productList)
        }
        const getCategoryList =async () => {
          const categoryList = await getCategoryListApi()
          setCategoryList(categoryList)
        }
        getProductList()
        getCategoryList()
    }, [alert])
  return (
    <AdminLayout>
      {productList !== null && categoryList !== null ? <ProductTable productList={productList} categoryList={categoryList}/> : <Loading/>}
    </AdminLayout>
  );
}
