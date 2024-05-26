import { motion } from "framer-motion";
import { SyntheticEvent, useCallback, useState } from "react";
import { ClickButtonMain } from "../../../components/buttons";
import TextInput from "../../../components/inputs/text";
import useAxios from "../../../services/base/axios/useAxios";
import { useAppDispatch } from "../../../store/hooks";
import { openSnackbar } from "../../../store/app_functions/snackbar";
import PasswordInput from "../../../components/inputs/password";

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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRegistration = useCallback(
    async (e: SyntheticEvent) => {
      e.preventDefault();
      setIsSubmitting(false);
      try {
        const response = await axios.post("/admins/register-users", {
          firstname,
          lastname,
          matric_number: matricNumber,
          email,
          username,
          password,
          hardware_user_id: registrationId,
        });
        console.log({ response });
        const { data, message } = response?.data;
        // const modeSet = data?.mode_id
        // console.log({ response });
        dispatch(openSnackbar({ message: message, isError: false }));
      } catch (error: any) {
        const errorMessage = error?.response?.data?.message;
        dispatch(openSnackbar({ message: errorMessage, isError: true }));
      } finally {
        setIsSubmitting(false);
      }
    },
    [
      firstname,
      lastname,
      matricNumber,
      email,
      username,
      password,
      registrationId,
    ]
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
              isLoading={isSubmitting}
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
              label="Register"
            />
          </div>
        </form>
      </section>
    </motion.div>
  );
}
