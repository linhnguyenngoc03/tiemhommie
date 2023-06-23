import { setup } from "@/config/setup";
import {
  CardMedia,
  DialogTitle,
  Dialog,
  DialogContent,
} from "@mui/material";
import React, { useContext, useState } from "react";
import LoginCard from "@/component/login/LoginCard";
import RegisterCard from "@/component/login/RegisterCard";
import Head from "next/head";
export default function Login() {
  const [sign, setSign] = useState(false);

  return (
    <div>
      <Head>
        <title>Login</title>
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
        "& .MuiPaper-root" : {
          border: "3px solid #FEAFA2",
          borderRadius: "1rem"
        }
      }}>
        <DialogTitle
          sx={{
            display: {
              xs: "none", sm: "block", cursor: "pointer",
              letterSpacing: '.1rem',
            },
            fontSize: "1.5rem",
            fontFamily: 'Roboto Serif',
          }}
        >
          Welcome to {setup.name}
        </DialogTitle>
        <DialogContent>
          {sign === false ? <LoginCard setSign={setSign} /> : <RegisterCard setSign={setSign} />}
        </DialogContent>
      </Dialog>
    </div>
  );
}
