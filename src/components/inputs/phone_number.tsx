import { ChangeEvent, useCallback } from "react";
import { MenuItem } from "@mui/material";
import country_codes from "../../assets/Countries.json";
import TextInput from "./text";
import SelectInput from "./select";

interface Props {
  countryValue: string;
  setCountryValue: Function;
  value: string;
  setValue: Function;
  label: string;
  isRequired?: boolean;
  placeholder: string;
}

export default function PhoneInput({
  countryValue = "+234+Nigeria",
  setCountryValue,
  value,
  setValue,
  label,
  isRequired = false,
  placeholder,
}: Props) {
  const handleCountryCode = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      setCountryValue(e.target.value);
    },
    []
  );
  return (
    <div className="w-full flex gap-2">
      <div className=" w-full max-w-44">
        <SelectInput
          id="country-code"
          label="country code"
          value={countryValue}
          setValue={setCountryValue}
        >
          {country_codes.map(({ name, dial_code, code, flag }) => {
            return (
              <MenuItem
                value={`${dial_code}+${name}`}
                key={name}
                sx={{ color: "primary.main" }}
              >
                {flag} - {name}, {dial_code}
              </MenuItem>
            );
          })}
        </SelectInput>
      </div>
      <div className="w-full ">
        <TextInput
          value={value}
          setValue={setValue}
          inputType="text"
          label={label}
          isRequired={isRequired}
          id="phone-number"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
