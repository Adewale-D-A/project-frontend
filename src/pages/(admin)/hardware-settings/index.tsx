import { MenuItem } from "@mui/material";
import { motion } from "framer-motion";
import { SyntheticEvent, useCallback, useState } from "react";
import SelectInput from "../../../components/inputs/select";
import { ClickButtonMain } from "../../../components/buttons";
import useAxios from "../../../services/base/axios/useAxios";
import { useAppDispatch } from "../../../store/hooks";
import { openSnackbar } from "../../../store/app_functions/snackbar";
import TextInput from "../../../components/inputs/text";
import NoResult from "../../../components/noResult";
import { student_users } from "../../../types/api/verificationHistory";
import { Search } from "@mui/icons-material";
import { ClickButtonSecondary } from "../../../components/buttons/secondary_click_button";

export default function HardwareSettings() {
  const axios = useAxios();
  const dispatch = useAppDispatch();
  const [mode, setMode] = useState("");
  const [deleteId, setDeleteId] = useState("");
  const [searchMatNo, setSearchMatNo] = useState("");
  const [purgeStatus, setPurgeStatus] = useState("0");

  const [submittingMode, setSubmittingMode] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const [dataset, setDataset] = useState<student_users>([]);
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
        // if (mode === "3") {
        //   response = await axios.post("/admins/set-id-to-delete", {
        //     userId: deleteId,
        //   });
        // }
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

  const setUserToRemove = useCallback(
    async ({ hardware_user_id }: { hardware_user_id: number }) => {
      setIsRemovingUser(true);
      try {
        const response = await axios.post("/admins/set-id-to-delete", {
          userId: hardware_user_id,
        });
        const { data, message } = response?.data;
        dispatch(openSnackbar({ message: message, isError: false }));
      } catch (error: any) {
        const errorMessage = error?.response?.data?.message;
        dispatch(openSnackbar({ message: errorMessage, isError: true }));
      } finally {
        setIsRemovingUser(false);
      }
    },
    []
  );

  const searchUserByMatricNumber = useCallback(
    async (e: SyntheticEvent) => {
      e.preventDefault();
      setIsSearching(true);
      try {
        const response = await axios.get(
          `/admins/search-by-matric-number?matric_number=${searchMatNo}`
        );
        const { data, message } = response?.data;
        setDataset(data);
        dispatch(openSnackbar({ message: message, isError: false }));
      } catch (error: any) {
        const errorMessage = error?.response?.data?.message;
        dispatch(openSnackbar({ message: errorMessage, isError: true }));
      } finally {
        setIsSearching(false);
      }
    },
    [searchMatNo]
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
            {/* {mode === "3" && (
              <TextInput
                inputType="number"
                value={deleteId}
                setValue={setDeleteId}
                placeholder="Delete ID"
                label="Delete ID"
                isRequired={true}
                id="delete-id"
              />
            )} */}
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
        </div>
      </section>
      {mode === "3" && (
        <section className=" w-full flex flex-col items-center">
          <div className=" w-full flex flex-col gap-6 max-w-screen-xl px-5 md:px-10 shadow-lg  p-4">
            <form
              onSubmit={(e) => searchUserByMatricNumber(e)}
              className=" flex items-center gap-7"
            >
              <div className=" w-full max-w-xs">
                <TextInput
                  inputType="text"
                  value={searchMatNo}
                  setValue={setSearchMatNo}
                  placeholder="Search by matric number"
                  label="Search Matric Number"
                  isRequired={true}
                  id="search-matric-number"
                />
              </div>
              <ClickButtonMain
                isLoading={isSearching}
                type="submit"
                label="Search"
                endIcon={<Search />}
              />
            </form>
            <div className=" w-full grid grid-cols-1 gap-5 rounded-md">
              {dataset?.length > 0 ? (
                <table className=" w-full py-10 border rounded-md">
                  <thead>
                    <tr className=" text-left bg-gray-200/15 text-gray-500">
                      <th>S/N</th>
                      <th>Name</th>
                      <th>Matric Number</th>
                      <th>Registered Index</th>
                      <th>Hardware ID</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {dataset.map((request, index) => {
                      return (
                        <tr key={request?.student_id} className=" border-b">
                          <td className=" text-gray-500">{index + 1}</td>
                          <td>
                            <b>{`${request?.firstname} ${request?.lastname}`}</b>
                          </td>
                          <td>
                            <b>{request?.matric_number}</b>
                          </td>
                          <td>{request?.registered_index}</td>
                          <td>{request?.hardware_user_id}</td>
                          <td>
                            <ClickButtonSecondary
                              label="Set to remove user"
                              clickHandler={() =>
                                setUserToRemove({
                                  hardware_user_id: request?.hardware_user_id,
                                })
                              }
                              isLoading={isRemovingUser}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              ) : (
                <NoResult
                  title="No user found"
                  message="No user found in this in this search"
                />
              )}
            </div>
          </div>
        </section>
      )}
    </motion.div>
  );
}
