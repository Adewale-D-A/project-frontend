"use client";

import { Button, CircularProgress } from "@mui/material";
import { ReactNode, useCallback } from "react";

export const primaryBtnStyle2 = {
  textTransform: "lowercase",
  backgroundColor: "primary.light",
  color: "text.primary",
  border: "1px solid",
  borderColor: "primary.main",
  ":hover": {
    color: "primary.main",
    backgroundColor: "secondary.variant",
  },
};

interface Props {
  label: string;
  type?: string;
  clickHandler?: Function;
  isLoading?: boolean;
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  sx_props?: any;
  is_float?: boolean;
}

export const ClickButtonSecondary = ({
  label,
  type = "button",
  clickHandler,
  disabled,
  startIcon,
  endIcon,
  isLoading,
  sx_props,
  is_float,
}: Props) => {
  const handleClick = useCallback(() => {
    if (clickHandler) {
      clickHandler();
    }
  }, [clickHandler]);
  return (
    <Button
      href=""
      variant="contained"
      type={type}
      sx={
        is_float
          ? {
              ...primaryBtnStyle2,
              ...sx_props,
              position: "fixed",
              right: "40px",
              bottom: "40px",
              borderRadius: "50px",
            }
          : { ...primaryBtnStyle2, ...sx_props }
      }
      onClick={() => handleClick()}
      startIcon={startIcon ? startIcon : <></>}
      endIcon={endIcon ? endIcon : <></>}
      disabled={disabled}
    >
      {isLoading ? <CircularProgress color="secondary" /> : <>{label}</>}
    </Button>
  );
};
