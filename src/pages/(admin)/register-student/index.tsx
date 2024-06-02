import { motion } from "framer-motion";
import { SyntheticEvent, useCallback, useState } from "react";
import { ClickButtonMain } from "../../../components/buttons";
import TextInput from "../../../components/inputs/text";
import useAxios from "../../../services/base/axios/useAxios";
import { useAppDispatch } from "../../../store/hooks";
import { openSnackbar } from "../../../store/app_functions/snackbar";
import PasswordInput from "../../../components/inputs/password";
import SelectInput from "../../../components/inputs/select";
import { MenuItem } from "@mui/material";

export default function StudentRegistration() {
  const axios = useAxios();
  const dispatch = useAppDispatch();
  const [registrationId, setRegistrationId] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [matricNumber, setMatricNumber] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registeredIndex, setRegisteredIndex] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuggestingId, setIsSuggestingId] = useState(false);

  const handleRegistration = useCallback(
    async (e: SyntheticEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      if (password === confirmPassword) {
        try {
          const response = await axios.post("/admins/register-users", {
            firstname,
            lastname,
            matric_number: matricNumber,
            email,
            username,
            password,
            hardware_user_id: registrationId,
            registered_index: registeredIndex,
          });
          console.log({ response });
          const { data, message } = response?.data;
          // const modeSet = data?.mode_id
          // console.log({ response });
          dispatch(openSnackbar({ message: message, isError: false }));
          setFirstname("");
          setLastname("");
          setEmail("");
          setRegistrationId("");
          setMatricNumber("");
          setUsername("");
          setPassword("");
        } catch (error: any) {
          const errorMessage = error?.response?.data?.message;
          dispatch(openSnackbar({ message: errorMessage, isError: true }));
        } finally {
          setIsSubmitting(false);
        }
      } else {
        dispatch(
          openSnackbar({ message: "Passwords do not match", isError: true })
        );
      }
    },
    [
      firstname,
      lastname,
      matricNumber,
      email,
      username,
      password,
      confirmPassword,
      registrationId,
      registeredIndex,
    ]
  );

  const fetchIdSuggestion = useCallback(async () => {
    setIsSuggestingId(true);
    try {
      const response = await axios.get("/hardware/suggested-id");
      const { data, message } = response?.data;
      setRegistrationId(`${data?.previous_id}`);
      dispatch(openSnackbar({ message: message, isError: false }));
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message;
      dispatch(
        openSnackbar({
          message: errorMessage
            ? errorMessage
            : "Ooop! Somethigng went wrong, please try again later",
          isError: true,
        })
      );
    } finally {
      setIsSuggestingId(false);
    }
  }, []);

  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.2 }}
      className="w-full flex flex-col items-center gap-16 py-28 md:py-36"
    >
      <section className=" w-full flex flex-col items-center">
        <form
          onSubmit={handleRegistration}
          className=" w-full flex flex-col gap-4 max-w-screen-xl px-5 md:px-10"
        >
          <div className=" w-full flex items-center gap-7">
            <div className=" w-full max-w-md">
              <TextInput
                inputType="text"
                value={registrationId}
                setValue={setRegistrationId}
                placeholder="Registration ID"
                label="Registration ID"
                isRequired={true}
                id="ragistration-id"
              />
            </div>

            <ClickButtonMain
              clickHandler={fetchIdSuggestion}
              isLoading={isSuggestingId}
              type="button"
              label="Fetch ID"
            />
          </div>
          <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-5">
            <TextInput
              inputType="text"
              value={firstname}
              setValue={setFirstname}
              placeholder="First Name"
              label="First Name"
              isRequired={true}
              id="firstname"
            />
            <TextInput
              inputType="text"
              value={lastname}
              setValue={setLastname}
              placeholder="Last Name"
              label="Last Name"
              isRequired={true}
              id="lastname"
            />
            <TextInput
              inputType="text"
              value={matricNumber}
              setValue={setMatricNumber}
              placeholder="Matric Number"
              label="Matric Number"
              isRequired={true}
              id="text"
            />
            <TextInput
              inputType="email"
              value={email}
              setValue={setEmail}
              placeholder="student email address"
              label="email address"
              isRequired={true}
              id="email"
            />
            <TextInput
              inputType="text"
              value={username}
              setValue={setUsername}
              placeholder="username"
              label="username"
              isRequired={true}
              id="username"
            />

            <SelectInput
              label="Fingerprint Index"
              value={registeredIndex}
              setValue={setRegisteredIndex}
              id="fingerprint-index"
              isRequired={true}
            >
              {[
                {
                  value: "right-thumb",
                  label: "Right Thumb",
                },
                {
                  value: "right-index",
                  label: "Right Index",
                },
                {
                  value: "right-middlefinger",
                  label: "Right Middlefinger",
                },
                {
                  value: "right-ringfinger",
                  label: "Right Ringfinger",
                },
                {
                  value: "right-smallfinger",
                  label: "Right Smallfinger",
                },
                {
                  value: "left-thumb",
                  label: "Left Thumb",
                },
                {
                  value: "left-index",
                  label: "Left Index",
                },
                {
                  value: "left-middlefinger",
                  label: "Left Middlefinger",
                },
                {
                  value: "left-ringfinger",
                  label: "Left Ringfinger",
                },
                {
                  value: "left-smallfinger",
                  label: "Left Smallfinger",
                },
              ].map((option) => (
                <MenuItem
                  sx={{ color: "primary.main" }}
                  key={option?.value}
                  value={option?.value}
                >
                  {option?.label}
                </MenuItem>
              ))}
            </SelectInput>
            <PasswordInput
              value={password}
              setValue={setPassword}
              placeholder="password"
              label="Password"
              isRequired={true}
              id="password"
            />
            <PasswordInput
              value={confirmPassword}
              setValue={setConfirmPassword}
              placeholder="confirm password"
              label="Confirm password"
              isRequired={true}
              id="confirm-password"
            />
          </div>

          <div className=" mt-4">
            <ClickButtonMain
              isLoading={isSubmitting}
              type="submit"
              label="Register"
            />
          </div>
        </form>
      </section>
    </motion.div>
  );
}
