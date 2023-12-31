import ProductList1 from "@/component/product/ProductList1"
import Layout1 from "@/component/theme/layout/Layout1"
import TopBanner from "@/component/theme/banner/top-banner"
import { UseGetCategoryProduct } from "../../package/function/category/use-get-product"

export async function getServerSideProps() {
  const response = await UseGetCategoryProduct()
  const categoryAndProduct = response.data
  const slider = ["slider1.jpg", "slider2.jpg", "slider3.jpg"]
  return {
    props: {
      slider,
      categoryAndProduct: categoryAndProduct ? categoryAndProduct : []
    }
  }
}

export default function Home({ categoryAndProduct, slider }) {
  return (
    <TopBanner slider={slider}>
      <Layout1>
        {categoryAndProduct.map((item, key) => (
          <ProductList1 categoryAndProduct={item} key={key} number={4} />
        ))}
      </Layout1>
    </TopBanner>
  )
}

