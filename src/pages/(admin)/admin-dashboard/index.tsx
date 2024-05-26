import { motion } from "framer-motion";

import LinkButtonMain from "../../../components/buttons/link_button_main";
import { useAppSelector } from "../../../store/hooks";

export default function AdminDashboard() {
  const { user } = useAppSelector((state) => state?.userAuthentication?.value);

  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.2 }}
      className="w-full"
    >
      <div className="w-full flex flex-col gap-16 items-center ">
        <div className=" relative w-full mb-[500px] md:mb-10 ">
          <div>
            <div className={`bg-gradient w-full h-60 flex`}>
              <div className="bg-semi-circle-left bg-no-repeat bg-right bg-contain h-full w-full"></div>
              <div className="bg-semi-circle-right bg-no-repeat bg-right bg-contain h-full w-full opacity-30"></div>
            </div>
            <div className=" bg-white h-20 w-full"></div>
          </div>
          <div className=" absolute top-0 left-0 w-full h-full p-5 md:p-10 text-white">
            <div className="w-full flex flex-col items-center justify-center">
              <div className="max-w-screen-2xl w-full flex justify-between gap-5 items-center">
                <div>
                  <h3 className=" text-2xl md:text-3xl font-semibold">
                    Super Admin
                  </h3>
                  <p>{user?.email}</p>
                </div>
                <LinkButtonMain
                  url="/admin-student-registration"
                  label="register-students"
                />
              </div>
            </div>
            <div className=" flex justify-center mt-10">
              <div className=" max-w-screen-lg w-full grid grid-cols-1 md:grid-cols-3 justify-center gap-4 items-stretch flex-wrap">
                {[
                  {
                    id: 1,
                    label: "lecturers",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 2.25a.75.75 0 0 0 0 1.5H3v10.5a3 3 0 0 0 3 3h1.21l-1.172 3.513a.75.75 0 0 0 1.424.474l.329-.987h8.418l.33.987a.75.75 0 0 0 1.422-.474l-1.17-3.513H18a3 3 0 0 0 3-3V3.75h.75a.75.75 0 0 0 0-1.5H2.25Zm6.04 16.5.5-1.5h6.42l.5 1.5H8.29Zm7.46-12a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0v-6Zm-3 2.25a.75.75 0 0 0-1.5 0v3.75a.75.75 0 0 0 1.5 0V9Zm-3 2.25a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ),
                    value: 0,
                    subSection: [
                      {
                        id: 1.1,
                        value: 0,
                        label: "active",
                      },
                    ],
                  },
                  {
                    id: 2,
                    label: "Students",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
                          clipRule="evenodd"
                        />
                        <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                      </svg>
                    ),
                    value: 0,
                    subSection: [
                      {
                        id: 2.1,
                        value: 0,
                        label: "available",
                      },
                    ],
                  },
                  {
                    id: 3,
                    label: "mode",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                      </svg>
                    ),
                    value: 0,
                    subSection: [
                      {
                        id: 3.1,
                        value: 0,
                        label: "delete all state",
                      },
                      {
                        id: 3.2,
                        value: 0,
                        label: "delete Id",
                      },
                    ],
                  },
                ].map((item) => {
                  return (
                    <div
                      key={item?.id}
                      className=" bg-white rounded-md text-dark-500 p-5 shadow-lg border"
                    >
                      <div>
                        <div className=" flex items-center justify-between mb-5">
                          <span className=" text-gray-800">{item?.label}</span>{" "}
                          <span className=" p-2 bg-primary-500/40 text-primary-500 rounded-md">
                            {item?.icon}
                          </span>
                        </div>
                        <h4 className=" text-5xl font-semibold mb-3">
                          {item?.value}
                        </h4>
                        <div className=" flex justify-between w-full flex-wrap">
                          {item?.subSection?.map((subSection) => {
                            return (
                              <div
                                key={subSection?.id}
                                className=" text-xs text-gray-700"
                              >
                                <span className=" font-semibold">
                                  {subSection?.value}
                                </span>{" "}
                                <span>{subSection?.label}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
