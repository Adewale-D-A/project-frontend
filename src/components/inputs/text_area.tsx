import input_style_default from "../../layouts/themes/input_styles";
import { TextField } from "@mui/material";
import { ChangeEvent } from "react";

interface Props {
  value: string;
  setValue: Function;
  isError?: boolean;
  inputType: string;
  label: string;
  isRequired?: boolean;
  id: string;
  placeholder: string;
}

export default function TextAreaInput({
  value,
  setValue,
  isError,
  inputType,
  label,
  isRequired = false,
  id,
  placeholder,
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
      multiline
      rows="8"
      placeholder={placeholder}
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => handleInput(e)}
      margin="normal"
      variant="outlined"
      sx={input_style_default}
    />
  );
}
