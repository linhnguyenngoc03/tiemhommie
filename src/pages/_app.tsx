// 1. import `NextUIProvider` component
import "../styles/global.scss";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/Theme";
import AuthProvider from "@/component/login/AuthContext";
import CartProvider from "@/component/customer-component/cart/CartContext";
import AlertPopup from "@/component/AlertPopup";
import { store } from "@/feature/ReduxStore";
import { Provider } from "react-redux";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }: any) {
  return (
    
    // 2. Use at the root of your app
    <Provider store={store}>
      <AuthProvider>
        <CartProvider>
      <NextSeo
        title="TiemHommie"
        description="Decoration and Gift"
        openGraph={{
          images: [
            {
              url: 'https://group-7-swp.vercel.app/assets/images/banner.jpg',
            },
          ],
        }}
        />
    <ThemeProvider theme={theme}>
      <AlertPopup>
        <Component {...pageProps} />
        </AlertPopup>
    </ThemeProvider>
        </CartProvider>
      </AuthProvider>
    </Provider>
  );
}

export default MyApp;
