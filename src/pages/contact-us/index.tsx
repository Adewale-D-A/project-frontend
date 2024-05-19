import { motion } from "framer-motion";
import { SyntheticEvent, useCallback, useState } from "react";
import TextInput from "../../components/inputs/text";
import { ClickButtonMain } from "../../components/buttons";
import { Mail, Send } from "@mui/icons-material";
import { Divider } from "@mui/material";
import LinkButtonMain from "../../components/buttons/link_button_main";
import { useAppDispatch } from "../../store/hooks";
import { openSnackbar } from "../../store/app_functions/snackbar";

export default function ContactUs() {
  const dispath = useAppDispatch();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = useCallback(
    async (e: SyntheticEvent) => {
      e.preventDefault();
      dispath(
        openSnackbar({
          message:
            "Please send a direct email for now, form contact will be active soon.",
          isError: false,
        })
      );
    },
    [fullname, email, message]
  );

  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.2 }}
      className="w-full flex flex-col items-center gap-16 py-28 md:py-36"
    >
      <section className=" w-full flex flex-col items-center">
        <div className=" w-full flex flex-col gap-4 max-w-screen-xl px-5 md:px-10">
          <h1 className=" text-4xl font-bold">Contact us </h1>
          <p className="max-w-xl">Reach out to us using this form</p>
          <form onSubmit={handleSubmit} className=" w-full">
            <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-5">
              <TextInput
                inputType="text"
                value={fullname}
                setValue={setFullname}
                placeholder="Full name"
                label="Full name"
                isRequired={true}
                id="full-name"
              />
              <TextInput
                inputType="email"
                value={email}
                setValue={setEmail}
                placeholder="Email address"
                label="Email address"
                isRequired={true}
                id="email-address"
              />
            </div>
            <TextInput
              inputType="text"
              value={message}
              setValue={setMessage}
              placeholder="Compose a message..."
              label="Message"
              isRequired={true}
              id="message"
              multiline={true}
              rows={6}
            />
            <ClickButtonMain type="submt" label="send" endIcon={<Send />} />
          </form>

          <Divider />
          <p className=" text-center">or</p>

          <LinkButtonMain
            url="mailto:adewale.d.a@outlook.com"
            label="send a direct mail"
            endIcon={<Mail />}
          />
        </div>
      </section>
    </motion.div>
  );
}
