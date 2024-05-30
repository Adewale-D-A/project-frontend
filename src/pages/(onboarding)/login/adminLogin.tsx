import { motion } from "framer-motion";
import { SyntheticEvent, useCallback, useState } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { openSnackbar } from "../../../store/app_functions/snackbar";
import TextInput from "../../../components/inputs/text";
import PasswordInput from "../../../components/inputs/password";
import { ClickButtonMain } from "../../../components/buttons";
import { Link, useNavigate } from "react-router-dom";
import useAxios from "../../../services/base/axios/useAxios";
import { updateAuthentication } from "../../../store/user/auth";
import { Button, Divider } from "@mui/material";

export default function AdminLogin() {
  const axios = useAxios();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubit = useCallback(
    async (e: SyntheticEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      try {
        const response = await axios.post("/admins/login", {
          email,
          password,
        });
        const { data, message } = response?.data;
        console.log({ response });
        dispatch(
          updateAuthentication({
            access_token: data?.access_token,
            refresh_token: "",
            user: data?.user,
          })
        );
        dispatch(openSnackbar({ message: message, isError: false }));
        navigate("/admin/dashboard");
      } catch (error: any) {
        const errorMessage = error?.response?.data?.message;
        dispatch(openSnackbar({ message: errorMessage, isError: true }));
      } finally {
        setIsSubmitting(false);
      }
    },
    [email, password]
  );
  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.2 }}
      className="w-full "
    >
      <div className=" grid grid-cols-1 md:grid-cols-2 w-full items-stretch h-screen">
        <div className="w-full overflow-auto flex h-screen items-center justify-center">
          <div className="w-full max-w-screen-md flex flex-col gap-3 px-5 md:px-20 mt-12">
            <Link to={"/"} className="w-full flex justify-center">
              <img src="/logo192.png" alt="" className=" w-20 md:w-40 h-auto" />
            </Link>
            <h5 className=" text-2xl text-center">Admin User, Welcome Back</h5>
            <div className="w-full flex flex-col items-center justify-center gap-3">
              <form
                onSubmit={handleSubit}
                className="w-full flex flex-col items-center max-w-xl"
              >
                <TextInput
                  inputType="email"
                  value={email}
                  setValue={setEmail}
                  placeholder="your email address"
                  label="email address"
                  isRequired={true}
                  id="email"
                />
                <PasswordInput
                  value={password}
                  setValue={setPassword}
                  placeholder="enter your password"
                  label="password"
                  isRequired={true}
                  id="password"
                />
                <div className=" mt-4">
                  <ClickButtonMain
                    isLoading={isSubmitting}
                    type="submit"
                    label="login"
                  />
                </div>
              </form>
              <div className="w-full max-w-sm flex flex-col gap-2 justify-center items-center">
                <p className=" text-center">OR</p>
                <Divider
                  sx={{
                    color: "primary.main",
                    borderWidth: "2px",
                    borderColor: "primary.main",
                    width: "100%",
                  }}
                />
                <Button
                  fullWidth
                  variant="outlined"
                  to="/login"
                  component={Link}
                >
                  Student User
                </Button>
                <Button
                  fullWidth
                  variant="outlined"
                  to="/lecturer/login"
                  component={Link}
                >
                  Lecturer User
                </Button>
              </div>
            </div>{" "}
          </div>
        </div>
        <div className="w-1/2 fixed right-0 top-0  h-screen hidden md:block admin-bg bg-primary-500/70 bg-center bg-no-repeat bg-cover"></div>
      </div>
    </motion.div>
  );
}
