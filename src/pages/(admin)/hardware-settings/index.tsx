import { motion } from "framer-motion";

export default function HardwareSettings() {
  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.2 }}
      className="w-full flex flex-col items-center gap-16 py-28 md:py-36"
    >
      <section className=" w-full flex flex-col items-center">
        <div className=" w-full flex flex-col gap-4 max-w-screen-xl px-5 md:px-10"></div>
      </section>
    </motion.div>
  );
}
