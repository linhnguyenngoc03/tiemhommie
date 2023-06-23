import { Typography, OutlinedInput, Button } from "@mui/material";
import router from "next/router";
import React, { useContext, useState } from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PersonIcon from "@mui/icons-material/Person";
import AddHomeIcon from "@mui/icons-material/AddHome";
import { setup } from "@/config/setup";
import { UserContext } from "./AuthContext";
import { useForm } from "react-hook-form";
import Address from "./Address";
const button = "back to home";

export default function InforCard() {
  const { handleSubmit, register } = useForm();
  const { createUser } = useContext(UserContext);
  const [address, setAddress] = useState<any>("");
  const onSubmit = (data: any) =>
    createUser(`${data.address}, ${address}`, data.userName, data.phoneNumber);
  // const onSubmit = (data : any) => console.log(`${data.address}, ${ward.name}, ${district.name}, ${city.name}`)

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">* Tên khách hàng</label>
        <OutlinedInput
          size="small"
          endAdornment={<PersonIcon />}
          className="input-login name"
          {...register("userName", { required: true })}
        />
        <label htmlFor="phone">* Số điện thoại</label>
        <OutlinedInput
          size="small"
          className="phone"
          endAdornment={<LocalPhoneIcon />}
          sx={{
            marginTop: "0.5rem",
            width: "100%",
            marginBottom: "0.5rem",
          }}
          {...register("phoneNumber", { required: true })}
        />
        <Address setAddress={setAddress} />
        <label htmlFor="address">* Số nhà tên đường</label>
        <OutlinedInput
          placeholder="Địa chỉ"
          size="small"
          sx={{
            width: "100%",
            marginBottom: "1rem",
          }}
          endAdornment={<AddHomeIcon />}
          className="input-login address"
          {...register("address", { required: true })}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1.5rem",
          }}
        >
          <Typography
            sx={{
              color: "black",
              padding: "6px 8px",
              cursor: "pointer",
            }}
            onClick={() => {
              router.push("/");
            }}
          >
            {button.toUpperCase()}
          </Typography>
          <div>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: setup.navigationColor,
                color: "black",
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
