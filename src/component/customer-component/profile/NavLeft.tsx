import { Paper, Typography, MenuItem } from "@mui/material";
import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PersonIcon from "@mui/icons-material/Person";
export default function NavLeft() {
  return (
    <Paper
      sx={{
        padding: "1rem",
      }}
    >
      <Typography
        sx={{
          paddingBottom: "0.5rem",
          marginBottom: "0.5rem",
          borderBottom: "1px solid gray",
        }}
      >
        Dashboard
      </Typography>
      <MenuItem>
        <ShoppingBagIcon
          sx={{
            marginRight: "1rem",
          }}
        />
        Order
      </MenuItem>
      <MenuItem>
        <PersonIcon
          sx={{
            marginRight: "1rem",
          }}
        />
        Profile
      </MenuItem>
    </Paper>
  );
}
