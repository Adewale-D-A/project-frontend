import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.2 }}
      className="w-full flex flex-col items-center gap-16 py-28 md:py-36"
    >
      <section className=" w-full flex flex-col items-center">
        <div className=" w-full flex flex-col gap-4 max-w-screen-xl px-5 md:px-10">
          <h1 className=" text-4xl font-bold">About The System</h1>
          <div className="w-full max-w-xl flex flex-col gap-3">
            <p>
              Attendance marking is a crucial part of the grading system in a
              tertiary institution.
            </p>
            <p>
              The current method of marking attendance is doing so manually that
              is through the use of pen and paper.
            </p>
            <p>
              Introduction of this proposed attendance system into the
              institution processes will foster productivity
            </p>
          </div>
        </div>
      </section>
      {/* section 2 */}{" "}
      <section className=" w-full flex flex-col items-center">
        <div className="w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-5 justify-between  px-5 md:px-10">
          <div className=" flex flex-col gap-5">
            <span className=" text-sm text-secondary-500 p-3 bg-secondary-500/30 font-semibold w-fit rounded-lg">
              hardware
            </span>
            <h2 className=" font-bold text-3xl ">
              Fingerprint sensor, micro-controller and rechargeable battery
            </h2>
            <p className=" text-secondary-500">
              Circuit design of fingerprint sensor, ESP32 micro-controller and
              power module to ensure fingerprint images are captured, stored and
              can function as a standalone device without any other external
              dependencies.
            </p>
          </div>
          <div className="w-full overflow-hidden max-h-80 flex justify-center md:justify-end items-center rounded-lg shadow-lg shadow-primary-500">
            <img
              src={"/hardware.jpg"}
              alt="fingerprint system"
              title="fingerprint system"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
      {/* section 3  */}
      <section className=" w-full flex flex-col items-center">
        <div className="w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-5 justify-between  px-5 md:px-10">
          <div className="w-full overflow-hidden max-h-80 flex justify-center md:justify-start items-center rounded-lg shadow-lg shadow-primary-500">
            <img
              src={"/software.png"}
              alt="fingerprint system"
              title="fingerprint system"
              className="w-full object-cover"
            />
          </div>

          <div className=" flex flex-col gap-5">
            <span className=" text-sm text-secondary-500 p-3 bg-secondary-500/30 font-semibold w-fit rounded-lg ">
              software
            </span>

            <h2 className=" font-bold text-3xl ">
              Fingerprint sensor and micro-controller communication, Wifi
              Manager, HTTP request protocols
            </h2>
            <p className=" text-secondary-500">
              Software integrations such that hardware communicates with remote
              server in real-time to synchronize fingerprint verifications with
              the server for data logging and storage over HTTP protocols
              provided the fingerprint device if connected to a functioning
              network over WIFI.
            </p>
          </div>
        </div>
      </section>
      {/* section 4 */}
      <section className=" w-full flex flex-col items-center">
        <div className="w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-5 justify-between px-5 md:px-10">
          <div className=" flex flex-col gap-5">
            <span className=" text-sm text-secondary-500 p-3 bg-secondary-500/30 font-semibold w-fit rounded-lg">
              user interface
            </span>
            <h2 className=" font-bold text-3xl ">
              Admins, lecturers, students and lecturers-students dedicated user
              interfaces
            </h2>
            <p className=" text-secondary-500">
              Easy to use user interface for adminsitative management of
              hardware device, creating new lecturer's accounts. Lecturer's user
              interface for monitoring of registered students attendance data
              with integrated analytics. Students user interface to monitor
              attended lecturers and in-house AI chat partner. Lecturer-Student
              community forum for lecturer's to drop lecturer notes and get to
              know their students better
            </p>
          </div>
          <div className="w-full overflow-hidden max-h-80 flex justify-center md:justify-start items-start rounded-lg shadow-lg shadow-primary-500">
            <img
              src={"/user_interface.jpg"}
              alt="fingerprint system"
              title="fingerprint system"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
}
