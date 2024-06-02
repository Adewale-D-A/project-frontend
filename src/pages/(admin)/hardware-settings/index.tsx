import { MenuItem } from "@mui/material";
import { motion } from "framer-motion";
import { SyntheticEvent, useCallback, useState } from "react";
import SelectInput from "../../../components/inputs/select";
import { ClickButtonMain } from "../../../components/buttons";
import useAxios from "../../../services/base/axios/useAxios";
import { useAppDispatch } from "../../../store/hooks";
import { openSnackbar } from "../../../store/app_functions/snackbar";
import TextInput from "../../../components/inputs/text";

export default function HardwareSettings() {
  const axios = useAxios();
  const dispatch = useAppDispatch();
  const [mode, setMode] = useState("");
  const [deleteId, setDeleteId] = useState("");
  const [purgeStatus, setPurgeStatus] = useState("0");
  const [submittingMode, setSubmittingMode] = useState(false);

  const [removeUserId, setRemoveUserId] = useState("");
  const [isRemovingUser, setIsRemovingUser] = useState(false);

  const handleModeSubmit = useCallback(
    async (e: SyntheticEvent) => {
      setSubmittingMode(true);
      e.preventDefault();
      try {
        let response;
        response = await axios.post("/admins/set_mode", {
          mode_id: mode,
        });
        if (mode === "3") {
          response = await axios.post("/admins/set-id-to-delete", {
            userId: deleteId,
          });
        }
        if (mode === "4") {
          response = await axios.post("/admins/set-purge-state", {
            reply: purgeStatus,
          });
        }
        const { data, message } = response?.data;
        // const modeSet = data?.mode_id
        // console.log({ response });
        dispatch(openSnackbar({ message: message, isError: false }));
      } catch (error: any) {
        const errorMessage = error?.response?.data?.message;
        dispatch(openSnackbar({ message: errorMessage, isError: true }));
      } finally {
        setSubmittingMode(false);
      }
    },
    [mode, purgeStatus, deleteId]
  );

  const handleRemoveUserId = useCallback(
    async (e: SyntheticEvent) => {
      e.preventDefault();
      setIsRemovingUser(true);
      try {
        const response = await axios.post("/admins/set-id-to-delete", {
          userId: removeUserId,
        });
        const { data, message } = response?.data;
        dispatch(openSnackbar({ message: message, isError: false }));
      } catch (error: any) {
        const errorMessage = error?.response?.data?.message;
        dispatch(openSnackbar({ message: errorMessage, isError: true }));
      } finally {
        setIsRemovingUser(true);
      }
    },
    [removeUserId]
  );

  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.2 }}
      className="w-full flex flex-col items-center gap-16 py-28 md:py-36"
    >
      <section className=" w-full flex flex-col items-center">
        <div className=" w-full flex flex-col gap-6 max-w-screen-xl px-5 md:px-10">
          <form
            onSubmit={handleModeSubmit}
            className=" w-full grid grid-cols-1 md:grid-cols-2 p-4 gap-5 rounded-md shadow-lg"
          >
            <SelectInput
              label="Hardware Mode"
              value={mode}
              setValue={setMode}
              id="hardware-mode"
              isRequired={true}
            >
              {[
                {
                  value: "10",
                  label: "Lock device",
                },
                {
                  value: "1",
                  label: "Registration Mode",
                },
                {
                  value: "2",
                  label: "Verification Mode",
                },
                {
                  value: "3",
                  label: "Delete a user by ID Mode",
                },
                {
                  value: "4",
                  label: "Delete all users Mode",
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
            {mode === "3" && (
              <TextInput
                inputType="number"
                value={deleteId}
                setValue={setDeleteId}
                placeholder="Delete ID"
                label="Delete ID"
                isRequired={true}
                id="delete-id"
              />
            )}
            {mode === "4" && (
              <SelectInput
                label="Hardware Mode"
                value={purgeStatus}
                setValue={setPurgeStatus}
                id="hardware-mode"
                isRequired={true}
              >
                {[
                  {
                    value: "0",
                    label: "Do not delete all data",
                  },
                  {
                    value: "1",
                    label: "Delete all registered hardware data",
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
            )}
            <div className=" flex items-center">
              <ClickButtonMain
                isLoading={submittingMode}
                type="submit"
                label="save"
              />
            </div>
          </form>

          <form
            onSubmit={handleRemoveUserId}
            className=" w-full grid grid-cols-1 md:grid-cols-2 p-4 gap-5 rounded-md shadow-lg"
          >
            <TextInput
              inputType="number"
              value={removeUserId}
              setValue={setRemoveUserId}
              placeholder="Remove this user with hardware ID"
              label="Remove user"
              isRequired={true}
              id="remove user"
            />
            <div className=" flex items-center">
              <ClickButtonMain
                isLoading={isRemovingUser}
                type="submit"
                label="Set Id"
              />
            </div>
          </form>
        </div>
      </section>
    </motion.div>
  );
}
