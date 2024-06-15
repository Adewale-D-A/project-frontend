import { motion } from "framer-motion";
import { SyntheticEvent, useCallback, useState } from "react";
import SingleCSVUpload from "../../../components/drag_n_drop/single_csv_upload";
import TextInput from "../../../components/inputs/text";
import { ClickButtonMain } from "../../../components/buttons";
import useAxios from "../../../services/base/axios/useAxios";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { openSnackbar } from "../../../store/app_functions/snackbar";
import { Button, MenuItem } from "@mui/material";
import { Download } from "@mui/icons-material";
import SelectInput from "../../../components/inputs/select";

export default function CourseRegistration() {
  const axios = useAxios();
  const dispatch = useAppDispatch();
  const [csvData, setCsvData] = useState<
    { matric_number: string; fullname: string }[]
  >([]);
  const { user } = useAppSelector((state) => state?.userAuthentication?.value);

  const [courseCode, setCourseCode] = useState("");
  const [course, setCourse] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRegistration = useCallback(
    async (e: SyntheticEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      try {
        const response = await axios.post("/lecturers/register-course", {
          course_code: courseCode,
          students: csvData,
        });
        const { data, message } = response?.data;
        dispatch(openSnackbar({ message: message, isError: false }));
        setCourseCode("");
        setCourse("");
        setCsvData([]);
      } catch (error: any) {
        const errorMessage = error?.response?.data?.message;
        dispatch(openSnackbar({ message: errorMessage, isError: true }));
      } finally {
        setIsSubmitting(false);
      }
    },
    [courseCode, csvData]
  );

  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.2 }}
      className="w-full flex flex-col items-center gap-16 py-28 md:py-36"
    >
      <section className=" w-full flex flex-col items-center">
        <div className=" w-full flex flex-col gap-4 max-w-screen-xl px-5 md:px-10">
          <SingleCSVUpload csvData={csvData} setCsvData={setCsvData} />
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

              <SelectInput
                label="Course"
                value={course}
                setValue={setCourse}
                id="course-code"
                isRequired={true}
              >
                {user?.courses.map((course) => (
                  <MenuItem
                    sx={{ color: "primary.main" }}
                    key={course}
                    value={course?.toLocaleLowerCase()}
                  >
                    {course}
                  </MenuItem>
                ))}
              </SelectInput>
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

      <div className=" animate-bounce fixed bottom-10 right-10">
        <Button
          variant="contained"
          component="a"
          href={"/REGISTERED_STUDENTS_SAMPLE.csv"}
          download
          endIcon={<Download />}
        >
          Download sample
        </Button>
      </div>
    </motion.div>
  );
}
