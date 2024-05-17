import input_style_default from "../../layouts/themes/input_styles";
import { TextField } from "@mui/material";
import { ChangeEvent, ReactNode } from "react";

interface Props {
  children: ReactNode;
  value: string;
  setValue: Function;
  isError?: boolean;
  label: string;
  isRequired?: boolean;
  id: string;
}

export default function SelectInput({
  children,
  value,
  setValue,
  isError,
  label,
  isRequired = false,
  id,
}: Props) {
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <TextField
      required={isRequired}
      fullWidth={true}
      error={isError}
      id={id}
      select
      label={label}
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => handleInput(e)}
      margin="normal"
      variant="outlined"
      sx={input_style_default}
    >
      {children}
    </TextField>
  );
}
