import { motion } from "framer-motion";
import { SyntheticEvent, useCallback, useState } from "react";
import { ClickButtonMain } from "../../../components/buttons";
import TextInput from "../../../components/inputs/text";

export default function StudentRegistration() {
  const [registrationId, setRegistrationId] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [matricNumber, setMatricNumber] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRegistration = useCallback(async (e: SyntheticEvent) => {
    e.preventDefault();
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
