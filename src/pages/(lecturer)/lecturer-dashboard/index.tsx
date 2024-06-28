import { motion } from "framer-motion";
import LinkButtonMain from "../../../components/buttons/link_button_main";
import { useAppSelector } from "../../../store/hooks";

export default function LecturerDashboard() {
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
              <div className="bg-semi-circle-right bg-no-repeat bg-right bg-containh-full w-full opacity-30"></div>
            </div>
            <div className=" bg-white h-20 w-full"></div>
          </div>
          <div className=" absolute top-0 left-0 w-full h-full p-5 md:p-10 text-white">
            <div className="w-full flex flex-col items-center justify-center">
              <div className="max-w-screen-2xl w-full flex justify-between gap-5 items-center">
                <div>
                  <h3 className=" text-2xl md:text-3xl font-semibold">
                    Lecturer's Dashboard
                  </h3>
                  <p>{user?.email}</p>
                </div>
                <LinkButtonMain
                  url="/lecturer-course-registration"
                  label="register-course"
                />
              </div>
            </div>
            <div className=" flex justify-center mt-10">
              <div className=" max-w-screen-lg w-full grid grid-cols-1 md:grid-cols-3 justify-center gap-4 items-stretch flex-wrap">
                {[
                  {
                    id: 1,
                    label: "courses",
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
                    value: user?.courses?.length,
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
                    label: "Total Students",
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
                        label: "Level",
                      },
                      {
                        id: 2.2,
                        value: 0,
                        label: "Level",
                      },
                    ],
                  },
                  {
                    id: 3,
                    label: "Lectures",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06l-1.591-1.59a.75.75 0 0 1 0-1.061Zm12.728 0a.75.75 0 0 1 0 1.06l-1.591 1.592a.75.75 0 0 1-1.06-1.061l1.59-1.591a.75.75 0 0 1 1.061 0Zm-6.816 4.496a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68ZM3 10.5a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10.5Zm14.25 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75Zm-8.962 3.712a.75.75 0 0 1 0 1.061l-1.591 1.591a.75.75 0 1 1-1.061-1.06l1.591-1.592a.75.75 0 0 1 1.06 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ),
                    value: 0,
                    subSection: [
                      {
                        id: 3.1,
                        value: 0,
                        label: "average",
                      },
                      {
                        id: 3.2,
                        value: 0,
                        label: "total students",
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
