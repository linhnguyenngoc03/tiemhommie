import { setup } from "@/config/setup"
import { CardMedia, DialogTitle, Dialog, DialogContent } from "@mui/material"
import React from "react"
import Head from "next/head"
import RegisterCard from "@/component/auth/RegisterCard"
export default function Login() {
  return (
    <div>
      <Head>
        <title>Register</title>
      </Head>
      <CardMedia
        component="img"
        alt="green iguana"
        image="/assets/images/banner.jpg"
        style={{
          height: "100vh",
          position: "absolute"
        }}
      />
      <Dialog
        open={true}
        fullWidth
        sx={{
          maxWidth: "35rem",
          margin: "auto",
          "& .MuiPaper-root": {
            borderRadius: "1rem",
            padding: " 1rem 2rem"
          }
        }}
      >
        <DialogTitle
          sx={{
            display: {
              xs: "none",
              sm: "block",
              cursor: "pointer",
              letterSpacing: ".1rem"
            },
            fontSize: "1.5rem",
            textAlign: "center",
            fontWeight: "600",
            fontFamily: "Roboto Serif"
          }}
        >
          {setup.name}
        </DialogTitle>
        <DialogContent>
          <RegisterCard />
        </DialogContent>
      </Dialog>
    </div>
  )
}
