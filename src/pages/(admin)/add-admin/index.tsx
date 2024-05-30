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

export default function AddAdmin() {
  const axios = useAxios();
  const dispatch = useAppDispatch();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [privilege, setPrivilege] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRegistration = useCallback(
    async (e: SyntheticEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      try {
        const response = await axios.post("/admins/register-admins", {
          firstname,
          lastname,
          email,
          password,
          username,
          privilege,
        });
        console.log({ response });
        const { data, message } = response?.data;
        // const modeSet = data?.mode_id
        // console.log({ response });
        dispatch(openSnackbar({ message: message, isError: false }));
        setFirstname("");
        setLastname("");
        setEmail("");
        setPrivilege("");
        setUsername("");
        setPassword("");
      } catch (error: any) {
        const errorMessage = error?.response?.data?.message;
        dispatch(openSnackbar({ message: errorMessage, isError: true }));
      } finally {
        setIsSubmitting(false);
      }
    },
    [firstname, lastname, privilege, email, password, username]
  );

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
            <SelectInput
              label="Privilege"
              value={privilege}
              setValue={setPrivilege}
              id="title"
              isRequired={true}
            >
              <MenuItem
                sx={{ color: "primary.main" }}
                value={""}
                disabled={true}
              >
                select a admin role
              </MenuItem>
              {[
                {
                  id: 2,
                  label: "Student Registerer",
                  value: 6,
                },
                {
                  id: 3,
                  label: "Lecturer Registerer",
                  value: 5,
                },
                {
                  id: 4,
                  label: "Hardware Controller",
                  value: 4,
                },
              ].map((item) => (
                <MenuItem
                  sx={{ color: "primary.main" }}
                  key={item?.id}
                  value={item?.value}
                >
                  {item?.label}
                </MenuItem>
              ))}
            </SelectInput>
            <TextInput
              inputType="text"
              value={username}
              setValue={setUsername}
              placeholder="username"
              label="username"
              isRequired={true}
              id="username"
            />
            <TextInput
              inputType="email"
              value={email}
              setValue={setEmail}
              placeholder="email address"
              label="email address"
              isRequired={true}
              id="email"
            />
            <PasswordInput
              value={password}
              setValue={setPassword}
              placeholder="password"
              label="Password"
              isRequired={true}
              id="password"
            />
          </div>

          <div className=" mt-4">
            <ClickButtonMain
              isLoading={isSubmitting}
              type="submit"
              label="Register admin"
            />
          </div>
        </form>
      </section>
    </motion.div>
  );
}
