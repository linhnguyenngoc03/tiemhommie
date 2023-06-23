import { CircularProgress, Dialog } from "@mui/material";
import React from "react";

export default function Loading() {
  return (
    <Dialog
      open={true}
      sx={{
        "& .MuiPaper-root": {
          backgroundColor: "rgba(0,0,0,0)",
          overflowX: "hidden",
          overflowY: "hidden",
          boxShadow: "none",
        },
      }}
    >
      <CircularProgress/>
    </Dialog>
  );
}
