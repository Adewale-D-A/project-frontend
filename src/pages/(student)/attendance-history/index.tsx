import { motion } from "framer-motion";
import NoResult from "../../../components/noResult";
import useGetMyVerificationHistory from "../../../services/api/getAllMyVerificationHistory";
import formatDate, { formatTime } from "../../../utils/isoDateConverter";
import { Link } from "react-router-dom";
import { ClickButtonMain } from "../../../components/buttons";

export default function StudentAttendanceHistory() {
  const { data, isLoading, isFailed, setIsFailed, retryFunction } =
    useGetMyVerificationHistory();

  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.2 }}
      className="w-full flex flex-col items-center gap-16 py-28 md:py-36"
    >
      <section className=" w-full flex flex-col items-center">
        <div className=" w-full flex flex-col gap-4 max-w-screen-xl px-5 md:px-10">
          <div className="w-full flex justify-end">
            <div className="w-fit">
              <ClickButtonMain
                clickHandler={retryFunction}
                isLoading={isLoading}
                label="Verification History"
              />
            </div>
          </div>
          <div className=" p-4 w-full flex flex-col gap-5 shadow-lg rounded-lg overflow-x-auto">
            {data?.length > 0 ? (
              <table className=" w-full py-10 border rounded-md">
                <thead>
                  <tr className=" text-left bg-gray-200/15">
                    <th>S/N</th>
                    <th>Matric Number</th>
                    <th>Date/Time</th>
                  </tr>
                </thead>
                <tbody className="">
                  {data.map((request, index) => {
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
