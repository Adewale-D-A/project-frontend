import { motion } from "framer-motion";
import { SyntheticEvent, useCallback, useState } from "react";
import SingleCSVUpload from "../../../components/drag_n_drop/single_csv_upload";
import TextInput from "../../../components/inputs/text";
import { ClickButtonMain } from "../../../components/buttons";

export default function CourseRegistration() {
  const [uploadedFiles, setUploadFiles] = useState<{
    name: string;
    size: number;
    type: string;
  }>({} as any);

  const [email, setEmail] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [course, setCourse] = useState("");
  const [lecturerName, setLecturerName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRegistration = useCallback(async (e: SyntheticEvent) => {
    e.preventDefault();
  }, []);

  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.2 }}
      className="w-full flex flex-col items-center gap-16 py-28 md:py-36"
    >
      <section className=" w-full flex flex-col items-center">
        <div className=" w-full flex flex-col gap-4 max-w-screen-xl px-5 md:px-10">
          <SingleCSVUpload
            uploadedFiles={uploadedFiles}
            setUploadFiles={setUploadFiles}
          />
          <form
            onSubmit={handleRegistration}
            className=" w-full flex flex-col gap-4 max-w-screen-xl px-5 md:px-10"
          >
            <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-5">
              <TextInput
                inputType="text"
                value={courseCode}
                setValue={setCourseCode}
                placeholder="Course Code"
                label="Course Code"
                isRequired={true}
                id="course-code"
              />
              <TextInput
                inputType="text"
                value={course}
                setValue={setCourse}
                placeholder="Course Name"
                label="Course Name"
                isRequired={true}
                id="course-name"
              />
              <TextInput
                inputType="text"
                value={lecturerName}
                setValue={setLecturerName}
                placeholder="Lecturer's Name"
                label="Lecturer's Name"
                isRequired={true}
                id="text"
              />
              <TextInput
                inputType="email"
                value={email}
                setValue={setEmail}
                placeholder="Lecturer's email address"
                label="Lecturer's email address"
                isRequired={true}
                id="email"
              />
            </div>

            <div className=" mt-4">
              <ClickButtonMain
                isLoading={isSubmitting}
                type="submit"
                label="Add course"
              />
            </div>
          </form>
        </div>
      </section>
    </motion.div>
  );
}
