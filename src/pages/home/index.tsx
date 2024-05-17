import { motion } from "framer-motion";

import MetaTags from "../../components/metaTags";

export default function Home() {
  return (
    <>
      <MetaTags title={"home"} description={"Introduction to product"} />
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.2 }}
        className=" w-full flex flex-col gap-10"
      >
        <section className=" w-full">
          <div className="w-full h-screen fingerprprint-bg bg-cover bg-no-repeat bg-center bg-fixed flex items-center justify-center">
            <div className=" max-w-screen-xl w-full px-5 md:px-10 flex flex-col items-end justify-end text-white">
              <h1 className=" text-5xl md:text-7xl font-bold  max-w-md text-shadow">
                Fingerprint Attendance Management System
              </h1>
              <p>-a final year project</p>
            </div>
          </div>
        </section>
        <section className="text-white bg-[#252525] py-20 mt-20  flex justify-center md:px-20 px-10">
          <div className="max-w-[1500px] w-full ">
            <div className=" text-center flex justify-center items-center flex-col w-full mb-16">
              <h2 className="font-semibold text-4xl my-3">Problem statement</h2>
              <p className="max-w-2xl font-light">
                Our goal is to reduce the manual process of attendnace and to
                introduce automation into our Universities practices to foster
                productivity
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-10 items-stretch flex-wrap">
              {[
                {
                  bgImageClass: "one-bg",
                  title: "Eliminate Impersonation",
                  content:
                    "We discovered that the current system lacks security and our system plans to solve that.",
                },
                {
                  bgImageClass: "two-bg",
                  title: "Increase efficiency",
                  content:
                    "The time used in writing attendance and processing it to gather useful information can be spent on some other productive activities.",
                },
                {
                  bgImageClass: "three-bg",
                  title: "Produce digital data",
                  content:
                    "Data from students can be used in training AI models to predict students performance in relation to lecture attendance",
                },
              ].map((item, index) => {
                return (
                  <div
                    key={index}
                    className={` flex-1 flex justify-center flex-col rounded-lg shadow-lg p-6 pb-10 bg-left-top bg-no-repeat ${item.bgImageClass}`}
                  >
                    <h5 className="font-semibold text-xl my-4">{item.title}</h5>
                    <p className=" font-light">{item.content}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="flex justify-center md:px-20 px-10 mt-20 pb-5">
          <div className=" max-w-[1500px] w-full">
            {" "}
            <h2 className="text-center font-bold text-4xl my-10">
              Why Adopt this system
            </h2>
            <div className="flex flex-col md:flex-row justify-between gap-10 items-stretch flex-wrap">
              {[
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-24 h-24"
                    >
                      <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                    </svg>
                  ),

                  title: "User Friendly Interface",
                  content:
                    "Our system bring attendance tracking to a whole new level with analytic interface to lecturers to get insite into their students performance",
                },

                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-24 h-24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM8.547 4.505a8.25 8.25 0 1 0 11.672 8.214l-.46-.46a2.252 2.252 0 0 1-.422-.586l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.211.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.654-.261a2.25 2.25 0 0 1-1.384-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.279-2.132Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ),
                  title: "Remote Access",
                  content:
                    "Data is not tied to a single device but rather spread across secured network, enabling lecturers the access to their student's records",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-24 h-24"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5 7h3V4H5z" />
                      <path d="M1 2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 9H1V8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6H1V5H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 2zm11 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zm2 0a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zM3.5 10a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zM4 4h-.5a.5.5 0 0 0 0 1H4v1h-.5a.5.5 0 0 0 0 1H4a1 1 0 0 0 1 1v.5a.5.5 0 0 0 1 0V8h1v.5a.5.5 0 0 0 1 0V8a1 1 0 0 0 1-1h.5a.5.5 0 0 0 0-1H9V5h.5a.5.5 0 0 0 0-1H9a1 1 0 0 0-1-1v-.5a.5.5 0 0 0-1 0V3H6v-.5a.5.5 0 0 0-1 0V3a1 1 0 0 0-1 1m7 7.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5" />
                    </svg>
                  ),
                  title: "Portable fingerprint device",
                  content:
                    "A fingerprint capturing device that is portable and rechargeable which can last for up to 8 hours on a single charge",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-24 h-24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ),
                  title: "Fast data write",
                  content:
                    "Attendance captured with the device can be accessed immediately over the internet without the need of manual transfer of data",
                },
              ].map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex-1 flex flex-col rounded-lg shadow-lg p-6  pb-10"
                  >
                    <div className="flex justify-center items-center h-36">
                      {item.icon}
                    </div>
                    <div>
                      <h5 className="font-bold text-xl my-4">{item.title}</h5>
                      <p>{item.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}
