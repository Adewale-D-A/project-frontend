import { motion } from "framer-motion";
import { SyntheticEvent, useCallback, useState } from "react";
import { ClickButtonMain } from "../../../components/buttons";
import { openSnackbar } from "../../../store/app_functions/snackbar";
import TextInput from "../../../components/inputs/text";
import NoResult from "../../../components/noResult";
import { student_users } from "../../../types/api/verificationHistory";
import { Search } from "@mui/icons-material";
import useAxios from "../../../services/base/axios/useAxios";
import { useAppDispatch } from "../../../store/hooks";
import { DoughnutChart } from "../../../components/charts/doughnut";
import { Switch } from "@mui/material";

export default function AttendanceAnalytics() {
  const axios = useAxios();
  const dispatch = useAppDispatch();

  const [searchMatNo, setSearchMatNo] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [dataset, setDataset] = useState<student_users>([]);

  const [openAnalytics, setOpenAnalytics] = useState(false);
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
                    <th>Check Analytics</th>
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
                          <Switch
                            checked={openAnalytics}
                            onChange={() => setOpenAnalytics(!openAnalytics)}
                            value={openAnalytics}
                            color="primary"
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <NoResult
                title="No student found"
                message="No student found in this in this search"
              />
            )}
          </div>
        </div>
      </section>
      {openAnalytics && (
        <section className=" w-full flex flex-col items-center">
          <div className=" w-full flex flex-col items-center gap-6 max-w-screen-xl px-5 md:px-10 shadow-lg  p-4">
            <div className=" w-full max-w-md aspect-square">
              <DoughnutChart
                data={{
                  labels: ["MISSED", "ATTENDED"],
                  datasets: [
                    {
                      label: "Attended Lecture Analytics",
                      data: [25, 75],
                      backgroundColor: [
                        "rgba(241, 194, 27, 0.89)",
                        "rgba(13, 110, 253, 0.73)",
                      ],
                      borderColor: [
                        "rgba(241, 194, 27, 1)",
                        "rgba(13, 110, 253, 1)",
                      ],
                      borderWidth: 1,
                    },
                  ],
                }}
              />
            </div>
          </div>
        </section>
      )}
    </motion.div>
  );
}
