import { setup } from "@/config/setup";
import {
  CardMedia,
  DialogTitle,
  Dialog,
  DialogContent,
} from "@mui/material";
import React from "react";
import Head from "next/head";
import InforCard from "@/component/login/InforCard";
export default function Information() {
  return (
    <div>
      <Head>
        <title>Information</title>
      </Head>
      <CardMedia
        component="img"
        alt="green iguana"
        image="/assets/images/banner.jpg"
        style={{
          height: "100vh",
          position: "absolute",
        }}
      />
      <Dialog open={true} maxWidth="xs" fullWidth sx={{
        "& .MuiButtonBase-root": {
          backgroundColor: setup.navigationColor
        },
      }}>
        <DialogTitle
          sx={{
            display: {
              xs: "none", sm: "block", cursor: "pointer",
              letterSpacing: '.1rem',
            },

            fontSize: "1.5rem",
            fontFamily: 'Roboto Serif'
          }}
        >
         Thông tin người dùng
        </DialogTitle>
        <DialogContent>
          <InforCard />
        </DialogContent>
      </Dialog>
    </div>
  );
}
