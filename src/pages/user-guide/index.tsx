import { motion } from "framer-motion";
import DeviceModel from "../../components/device_model/deviceModel";
import { ArrowDownward } from "@mui/icons-material";
import scrollToView from "../../utils/scrollIntoView";
import { ClickButtonMain } from "../../components/buttons";

export default function UserGuide() {
  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.2 }}
      className="w-full flex flex-col items-center gap-16 py-28 md:py-36"
    >
      <section className=" w-full flex flex-col items-center">
        <div className=" h-screen w-full">
          <div className="fixed top-20 md:top-28 right-5">
            <ClickButtonMain
              type="button"
              clickHandler={() =>
                scrollToView({ scrollId: "lecturer-interface" })
              }
              label="User Guide"
              endIcon={<ArrowDownward className=" animate-bounce" />}
            />
          </div>
          <DeviceModel />
        </div>
        <div className=" w-full flex flex-col gap-4 max-w-screen-xl px-5 md:px-10">
          <h1 className=" text-4xl font-bold">System Guide </h1>
          <div className="w-full max-w-xl flex flex-col gap-3">
            <p>
              This page contains the manual on how to use the system for optimal
              efficiency
            </p>
          </div>
        </div>
      </section>
      <section className=" w-full flex flex-col items-center">
        <div className="w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-3 px-5 md:px-10">
          {[
            {
              id: "#lecturer-interface",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className=" h-24 w-24 animate-bounce"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.473.337a.5.5 0 0 0-.946 0L6.954 2H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h1.85l-1.323 3.837a.5.5 0 1 0 .946.326L4.908 11H7.5v2.5a.5.5 0 0 0 1 0V11h2.592l1.435 4.163a.5.5 0 0 0 .946-.326L12.15 11H14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H9.046z" />
                </svg>
              ),
              title: "Lecturer's Interface",
              description:
                "Monitoring, tracking, analytics and collation of attendance data on a single platform, with interactive experience to ensure seamless experience",
            },
            {
              id: "#student-interface",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-24 h-24 animate-pulse"
                >
                  <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                  <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                  <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                </svg>
              ),
              title: "Student's Interface",
              description:
                "Tracking attendance seamlessly with your personalize AI chat assitant",
            },
            {
              id: "#admin-interface",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-24 h-24 animate-spin"
                >
                  <path d="M17.004 10.407c.138.435-.216.842-.672.842h-3.465a.75.75 0 0 1-.65-.375l-1.732-3c-.229-.396-.053-.907.393-1.004a5.252 5.252 0 0 1 6.126 3.537ZM8.12 8.464c.307-.338.838-.235 1.066.16l1.732 3a.75.75 0 0 1 0 .75l-1.732 3c-.229.397-.76.5-1.067.161A5.23 5.23 0 0 1 6.75 12a5.23 5.23 0 0 1 1.37-3.536ZM10.878 17.13c-.447-.098-.623-.608-.394-1.004l1.733-3.002a.75.75 0 0 1 .65-.375h3.465c.457 0 .81.407.672.842a5.252 5.252 0 0 1-6.126 3.539Z" />
                  <path
                    fillRule="evenodd"
                    d="M21 12.75a.75.75 0 1 0 0-1.5h-.783a8.22 8.22 0 0 0-.237-1.357l.734-.267a.75.75 0 1 0-.513-1.41l-.735.268a8.24 8.24 0 0 0-.689-1.192l.6-.503a.75.75 0 1 0-.964-1.149l-.6.504a8.3 8.3 0 0 0-1.054-.885l.391-.678a.75.75 0 1 0-1.299-.75l-.39.676a8.188 8.188 0 0 0-1.295-.47l.136-.77a.75.75 0 0 0-1.477-.26l-.136.77a8.36 8.36 0 0 0-1.377 0l-.136-.77a.75.75 0 1 0-1.477.26l.136.77c-.448.121-.88.28-1.294.47l-.39-.676a.75.75 0 0 0-1.3.75l.392.678a8.29 8.29 0 0 0-1.054.885l-.6-.504a.75.75 0 1 0-.965 1.149l.6.503a8.243 8.243 0 0 0-.689 1.192L3.8 8.216a.75.75 0 1 0-.513 1.41l.735.267a8.222 8.222 0 0 0-.238 1.356h-.783a.75.75 0 0 0 0 1.5h.783c.042.464.122.917.238 1.356l-.735.268a.75.75 0 0 0 .513 1.41l.735-.268c.197.417.428.816.69 1.191l-.6.504a.75.75 0 0 0 .963 1.15l.601-.505c.326.323.679.62 1.054.885l-.392.68a.75.75 0 0 0 1.3.75l.39-.679c.414.192.847.35 1.294.471l-.136.77a.75.75 0 0 0 1.477.261l.137-.772a8.332 8.332 0 0 0 1.376 0l.136.772a.75.75 0 1 0 1.477-.26l-.136-.771a8.19 8.19 0 0 0 1.294-.47l.391.677a.75.75 0 0 0 1.3-.75l-.393-.679a8.29 8.29 0 0 0 1.054-.885l.601.504a.75.75 0 0 0 .964-1.15l-.6-.503c.261-.375.492-.774.69-1.191l.735.267a.75.75 0 1 0 .512-1.41l-.734-.267c.115-.439.195-.892.237-1.356h.784Zm-2.657-3.06a6.744 6.744 0 0 0-1.19-2.053 6.784 6.784 0 0 0-1.82-1.51A6.705 6.705 0 0 0 12 5.25a6.8 6.8 0 0 0-1.225.11 6.7 6.7 0 0 0-2.15.793 6.784 6.784 0 0 0-2.952 3.489.76.76 0 0 1-.036.098A6.74 6.74 0 0 0 5.251 12a6.74 6.74 0 0 0 3.366 5.842l.009.005a6.704 6.704 0 0 0 2.18.798l.022.003a6.792 6.792 0 0 0 2.368-.004 6.704 6.704 0 0 0 2.205-.811 6.785 6.785 0 0 0 1.762-1.484l.009-.01.009-.01a6.743 6.743 0 0 0 1.18-2.066c.253-.707.39-1.469.39-2.263a6.74 6.74 0 0 0-.408-2.309Z"
                    clipRule="evenodd"
                  />
                </svg>
              ),
              title: "Admin's Interface",
              description:
                "Managing onboarded lecturers, registering students and hardware device remote controlling and configuration",
            },
          ].map((item) => (
            <a
              href={item?.id}
              key={item?.id}
              className="flex-1 flex flex-col rounded-lg shadow-lg hover:shadow-primary-500 transition-all hover:scale-110 p-6  pb-10"
            >
              <div className="flex justify-center items-center h-36">
                {item.icon}
              </div>
              <div>
                <h5 className="font-bold text-xl my-4">{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>{" "}
      <section
        id="lecturer-interface"
        className=" w-full flex flex-col items-center"
      >
        <div className=" w-full flex flex-col gap-2 max-w-screen-xl px-5 md:px-10">
          <span className=" text-sm text-secondary-500 p-3 bg-secondary-500/30 font-semibold w-fit rounded-lg">
            lecturer's interface
          </span>
          <h2 className=" font-bold text-3xl ">
            Get student attendance analytics, data records history and much more
          </h2>
          <p className=" text-secondary-500">...</p>
        </div>
      </section>
      <section
        id="student-interface"
        className=" w-full flex flex-col items-center"
      >
        <div className=" w-full flex flex-col gap-2 max-w-screen-xl px-5 md:px-10">
          <span className=" text-sm text-secondary-500 p-3 bg-secondary-500/30 font-semibold w-fit rounded-lg">
            student's interface
          </span>
          <h2 className=" font-bold text-3xl ">
            Track your attendance records, get personal AI assitant
          </h2>
          <p className=" text-secondary-500">...</p>
        </div>
      </section>
      <section
        id="#admin-interface"
        className=" w-full flex flex-col items-center"
      >
        <div className=" w-full flex flex-col gap-2 max-w-screen-xl px-5 md:px-10">
          <span className=" text-sm text-secondary-500 p-3 bg-secondary-500/30 font-semibold w-fit rounded-lg">
            admin's interface
          </span>
          <h2 className=" font-bold text-3xl ">
            Manage hardware interactivity
          </h2>
          <p className=" text-secondary-500">...</p>
        </div>
      </section>
    </motion.div>
  );
}
