import { motion } from "framer-motion";
import teamBio from "../../assets/TeamBio.json";
import TeamBioCard from "../../components/teams";

export default function Team() {
  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.2 }}
      className="w-full flex flex-col items-center gap-16 py-28 md:py-36"
    >
      <section className=" w-full flex flex-col items-center">
        <div className=" w-full flex flex-col gap-4 max-w-screen-xl px-5 md:px-10">
          <h1 className=" text-4xl font-bold">The Project Team </h1>
          <div className="w-full max-w-xl flex flex-col gap-3">
            <p>
              This is a project work and it wouldn't have been possible without
              the guidance of our project supervisor, other lecturers and
              technical staffs of University of Ilorin.
            </p>
          </div>
        </div>
      </section>
      <section className=" w-full flex flex-col items-center">
        <div className="w-full max-w-screen-xl px-5 md:px-10">
          <h3 className=" text-2xl md:text-4xl font-bold max-w-4xl">
            The team
          </h3>
          <div className=" w-full flex items-center justify-center">
            <div className="w-full max-w-md shadow-md rounded-md">
              {[
                {
                  name: "Prof. Nazmat T. Surajudeen-Bakinde",
                  position: "Project Supervisor",
                  shortBio: "",
                  longBio: "",
                  imgSrc: "/Prof_Nazmat_1.jpg",
                  linkedIn:
                    "https://www.linkedin.com/in/nazmat-surajudeen-bakinde-58728226/",
                },
              ].map?.((item, index: number) => {
                return <TeamBioCard key={item?.name} item={item} />;
              })}
            </div>
          </div>
          <div className="w-full mt-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 items-stretch justify-center gap-6">
            {teamBio.map?.((item, index: number) => {
              return <TeamBioCard key={item?.name} item={item} />;
            })}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
