import { motion } from "framer-motion";
import LinkButtonMain from "../../../components/buttons/link_button_main";

export default function StudentDashboard() {
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
              <div className="bg-semi-circle-right bg-no-repeat bg-right bg-containh-full w-full opacity-30"></div>
            </div>
            <div className=" bg-white h-20 w-full"></div>
          </div>
          <div className=" absolute top-0 left-0 w-full h-full p-5 md:p-10 text-white">
            <div className="w-full flex flex-col items-center justify-center">
              <div className="max-w-screen-2xl w-full flex justify-between gap-5 items-center">
                <div>
                  <h3 className=" text-2xl md:text-3xl font-semibold">
                    Student's Dashboard
                  </h3>
                  <p>18/30gc027@io.com</p>
                </div>
              </div>
            </div>
            <div className=" flex justify-center mt-10">
              <div className=" max-w-screen-lg w-full grid grid-cols-1 md:grid-cols-3 justify-center gap-4 items-stretch flex-wrap">
                {[
                  {
                    id: 1,
                    label: "registered courses",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
                      </svg>
                    ),
                    value: 3,
                    subSection: [
                      {
                        id: 1.1,
                        value: 2,
                        label: "active",
                      },
                    ],
                  },
                  {
                    id: 2,
                    label: "Total Attendance",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
                      </svg>
                    ),
                    value: 15,
                    subSection: [
                      {
                        id: 2.1,
                        value: 5,
                        label: "ELE 325",
                      },
                      {
                        id: 2.2,
                        value: 10,
                        label: "ELE 311",
                      },
                    ],
                  },
                  {
                    id: 3,
                    label: "Rating",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ),
                    value: 0.7,
                    subSection: [
                      {
                        id: 3.1,
                        value: 0.5,
                        label: "attendance rate",
                      },
                      {
                        id: 3.2,
                        value: 0.2,
                        label: "punctuality",
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
                          <span className=" p-2 bg-primary_green-500/40 text-primary-500 rounded-md">
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
