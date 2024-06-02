import { motion } from "framer-motion";
import { SyntheticEvent, useCallback, useState } from "react";
import useAxios from "../../../services/base/axios/useAxios";
import { useAppDispatch } from "../../../store/hooks";
import { openSnackbar } from "../../../store/app_functions/snackbar";
import { MenuItem } from "@mui/material";
import SelectInput from "../../../components/inputs/select";
import TextInput from "../../../components/inputs/text";
import { ClickButtonMain } from "../../../components/buttons";
import NoResult from "../../../components/noResult";
import { Link } from "react-router-dom";
import formatDate, { formatTime } from "../../../utils/isoDateConverter";

export default function AttendanceHistory() {
  const axios = useAxios();
  const dispatch = useAppDispatch();
  const [attendanceData, setAttendanceData] = useState<
    {
      id: number;
      user_table_id: number;
      matric_number: string;
      timestamp: string;
    }[]
  >([]);
  const [course, setCourse] = useState("");
  const [startDateTime, setStartDateTime] = useState("");
  const [endDateTime, setEndDateTime] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleModeSubmit = useCallback(
    async (e: SyntheticEvent) => {
      setIsSubmitting(true);
      e.preventDefault();
      try {
        const response = await axios.post("/lecturers/attendance-history", {
          course_code: course,
          start_date_time: new Date(startDateTime).toISOString(),
          end_date_time: new Date(endDateTime).toISOString(),
        });
        // console.log({ response });
        const { data, message } = response?.data;
        setAttendanceData(data);
        dispatch(openSnackbar({ message: message, isError: false }));
      } catch (error: any) {
        const errorMessage = error?.response?.data?.message;
        dispatch(openSnackbar({ message: errorMessage, isError: true }));
      } finally {
        setIsSubmitting(false);
      }
    },
    [course, startDateTime, endDateTime]
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
          <form
            onSubmit={handleModeSubmit}
            className=" w-full grid grid-cols-1 p-4 gap-5 rounded-md shadow-lg"
          >
            <SelectInput
              label="Course"
              value={course}
              setValue={setCourse}
              id="course-code"
              isRequired={true}
            >
              {[
                {
                  value: "ele360",
                  label: "ELE 350",
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
            <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className=" flex flex-col">
                <label htmlFor="start-date-time">Start date and time</label>
                <TextInput
                  inputType="datetime-local"
                  value={startDateTime}
                  setValue={setStartDateTime}
                  placeholder="Start date and time"
                  label=""
                  isRequired={true}
                  id="start-date-time"
                />
              </div>
              <div className=" flex flex-col">
                <label htmlFor="end-date-time">End date and time</label>
                <TextInput
                  inputType="datetime-local"
                  value={endDateTime}
                  setValue={setEndDateTime}
                  placeholder="End date and time"
                  label=""
                  isRequired={true}
                  id="end-date-time"
                />
              </div>
            </div>
            <ClickButtonMain
              label="Retrieve attendance"
              type="submit"
              is_float={true}
              isLoading={isSubmitting}
            />
          </form>
          <div className=" p-4 w-full flex flex-col gap-5 shadow-lg rounded-lg overflow-x-auto">
            {attendanceData?.length > 0 ? (
              <table className=" w-full py-10 border rounded-md">
                <thead>
                  <tr className=" text-left bg-gray-200/15">
                    <th>S/N</th>
                    <th>Matric Number</th>
                    <th>Date/Time</th>
                  </tr>
                </thead>
                <tbody className="">
                  {attendanceData.map((request, index) => {
                    return (
                      <tr key={request?.id} className=" border-b">
                        <td className=" text-gray-500">{index + 1}</td>
                        <td>
                          <div className="flex flex-col">
                            <span>{request?.matric_number}</span>
                          </div>
                        </td>
                        <td>
                          <div className="flex flex-col">
                            <span>
                              <b>{formatDate(request?.timestamp)}</b>
                            </span>
                            <span className=" text-xs text-gray-500">
                              {formatTime(request?.timestamp)}
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className=" flex items-center gap-3">
                            <Link to={`#`}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 hover:scale-125 transition-all hover:cursor-pointer"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                              </svg>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <NoResult />
            )}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
