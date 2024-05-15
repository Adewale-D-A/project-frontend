"use client";

import { useCallback } from "react";
import { Snackbar, SnackbarContent, IconButton } from "@mui/material";
import { Close, CheckCircle } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { closeSnackBar } from "../../store/app_functions/snackbar";

export const CustomSnackbar = () => {
  const dispatch = useAppDispatch();
  const { show, message, isError } = useAppSelector(
    (state) => state.snackbar.value
  );

  const close = useCallback(() => {
    dispatch(closeSnackBar());
  }, []);

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      open={show}
      autoHideDuration={6000}
      onClose={() => close()} //perform an action on close
    >
      <SnackbarContent
        sx={isError ? { bgcolor: "error.main" } : { bgcolor: "primary.main" }}
        message={
          <span className="flex justify-center items-center">
            <CheckCircle />
            {message}
          </span>
        }
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={() => close()}
          >
            <Close style={{ color: "#ffffff" }} />
          </IconButton>,
        ]}
      />
    </Snackbar>
  );
};

export default CustomSnackbar;
