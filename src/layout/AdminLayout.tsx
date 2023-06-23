import NavigationLeft from "@/component/admin-component/NavigationLeft";
import AdminNavigationTop from "@/component/admin-component/NavigationTop";
import { setup } from "@/config/setup";
import { Grid, Container } from "@mui/material";
import Head from "next/head";
import React from "react";

export default function AdminLayout({ children }: any) {
  return (
    <div>
      <Head>
        <title>{setup.name}</title>
      </Head>
      <div style={{
        display: "grid",
        gridTemplateColumns: "20rem auto"
      }}>
        <div style={{
          width: "20rem",
          height: "100vh"
        }}>
        <NavigationLeft />
        </div>
        <div>
          <AdminNavigationTop />
          <Container
            maxWidth="xl"
            sx={{
              marginTop: "6rem",
            }}
          >
            {children}
          </Container>
        </div>
      </div>
    </div>
  );
}
