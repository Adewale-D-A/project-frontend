import { motion } from "framer-motion";
import { SyntheticEvent, useCallback, useState } from "react";
import { MenuItem } from "@mui/material";
import { ClickButtonMain } from "../../../components/buttons";
import TextInput from "../../../components/inputs/text";
import useAxios from "../../../services/base/axios/useAxios";
import { useAppDispatch } from "../../../store/hooks";
import { openSnackbar } from "../../../store/app_functions/snackbar";
import PasswordInput from "../../../components/inputs/password";
import SelectInput from "../../../components/inputs/select";

export default function AddLecturer() {
  const axios = useAxios();
  const dispatch = useAppDispatch();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [courses, setCourses] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRegistration = useCallback(
    async (e: SyntheticEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      try {
        const response = await axios.post("/admins/register-lecturers", {
          firstname,
          lastname,
          title,
          courses,
          email,
          password,
          username,
        });
        console.log({ response });
        const { data, message } = response?.data;
        // const modeSet = data?.mode_id
        // console.log({ response });
        dispatch(openSnackbar({ message: message, isError: false }));
        setFirstname("");
        setLastname("");
        setEmail("");
        setTitle("");
        setCourses("");
        setUsername("");
        setPassword("");
      } catch (error: any) {
        const errorMessage = error?.response?.data?.message;
        dispatch(
          openSnackbar({
            message: errorMessage
              ? errorMessage
              : "Ooops! Something went wrong, please try again later",
            isError: true,
          })
        );
      } finally {
        setIsSubmitting(false);
      }
    },
    [firstname, lastname, title, courses, email, password, username]
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
              label="Title"
              value={title}
              setValue={setTitle}
              id="title"
              isRequired={true}
            >
              <MenuItem
                sx={{ color: "primary.main" }}
                value={""}
                disabled={true}
              >
                select a title
              </MenuItem>
              {[
                {
                  id: 1,
                  label: "None",
                  value: "none",
                },
                {
                  id: 2,
                  label: "Doctor",
                  value: "doctor",
                },
                {
                  id: 3,
                  label: "Prof.",
                  value: "prof",
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
              value={courses}
              setValue={setCourses}
              placeholder="Seperate multiple course codes my a comma e.g ELE560,ELE556"
              label="Course codes"
              isRequired={true}
              id="text"
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
              label="Register lecturer"
            />
          </div>
        </form>
      </section>
    </motion.div>
  );
}
