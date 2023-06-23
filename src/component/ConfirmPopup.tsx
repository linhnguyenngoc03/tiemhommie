import React, { useState } from "react";
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
export default function ConfirmPopup({
  setOpenConfirmPopup,
  setAgree,
  openConfirmPopup,
}: any) {
  return (
    <Dialog
      open={openConfirmPopup}
      maxWidth="xs"
      onClose={() => {
        setOpenConfirmPopup(false);
      }}
    >
      <DialogTitle>Confirm Delete</DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          color="secondary"
          onClick={() => {
            setOpenConfirmPopup(false);
            setAgree(false);
          }}
        >
          Cancel
        </Button>
        <Button
          color="error"
          onClick={() => {
            setOpenConfirmPopup(false);
            setAgree(true);
          }}
        >
          Delete
        </Button>
      </DialogContent>
    </Dialog>
  );
}
