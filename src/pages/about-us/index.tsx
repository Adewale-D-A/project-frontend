import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.2 }}
      className="w-full flex flex-col items-center gap-10 py-28 md:py-36"
    >
      <section className=" w-full max-w-screen-xl px-5 md:px-10">
        <h1 className=" text-4xl font-bold">About the system</h1>
        <p>
          Attendance marking is a crucial part of the grading system in a
          tertiary institution.
        </p>
        <p>
          The current method of marking attendance is doing so manually that is
          through the use of pen and paper.
        </p>
      </section>
    </motion.div>
  );
}
