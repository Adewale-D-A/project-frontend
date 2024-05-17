import input_style_default from "../../layouts/themes/input_styles";
import { TextField } from "@mui/material";
import { ChangeEvent } from "react";

interface Props {
  value: string | number;
  setValue: Function;
  isError?: boolean;
  inputType: string;
  label: string;
  isRequired?: boolean;
  id: string;
  placeholder: string;
  multiline?: boolean;
  rows?: number;
}

export default function TextInput({
  value,
  setValue,
  isError,
  inputType,
  label,
  isRequired = false,
  id,
  placeholder,
  multiline = false,
  rows = 1,
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
      type={inputType}
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => handleInput(e)}
      margin="normal"
      variant="outlined"
      multiline={multiline}
      rows={rows}
      sx={input_style_default}
    />
  );
}
