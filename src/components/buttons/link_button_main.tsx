import { Button } from "@mui/material";
import { ReactNode } from "react";

export const primaryBtnStyle2 = {
  textTransform: "lowercase",
  backgroundColor: "primary.main",
  color: "text.primary",
  border: "1px solid",
  borderColor: "primary.main",
  ":hover": {
    color: "primary.main",
    backgroundColor: "primary.variant",
  },
};

interface Props {
  label: string;
  type?: string;
  url: string;
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  sx_props?: any;
  is_float?: boolean;
}

export default function LinkButtonMain({
  label,
  type = "button",
  url,
  disabled,
  startIcon,
  endIcon,
  sx_props,
  is_float,
}: Props) {
  return (
    <Button
      href={url}
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
      startIcon={startIcon ? startIcon : <></>}
      endIcon={endIcon ? endIcon : <></>}
      disabled={disabled}
    >
      {label}
    </Button>
  );
}
