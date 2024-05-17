import { ChangeEvent, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import input_style_default from "../../layouts/themes/input_styles";

interface Props {
  value: string;
  setValue: Function;
  isError?: boolean;
  label: string;
  isRequired?: boolean;
  id: string;
  placeholder: string;
}

export default function PasswordInput({
  value,
  setValue,
  isError,
  label,
  isRequired = false,
  id,
  placeholder,
}: Props) {
  const [showPassword, setShowPassword] = useState(false);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <TextField
      required={isRequired}
      fullWidth={true}
      error={isError}
      id={id}
      type={showPassword ? "text" : "password"}
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => handleInput(e)}
      margin="normal"
      variant="outlined"
      sx={input_style_default}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="Toggle password visibility"
              onClick={(e) => setShowPassword(!showPassword)}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
