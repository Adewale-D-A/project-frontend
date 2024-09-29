import { motion } from "framer-motion";
import { ChangeEvent, SyntheticEvent, useCallback, useState } from "react";
import { Delete } from "@mui/icons-material";
import useAxios from "../../../services/base/axios/useAxios";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { openSnackbar } from "../../../store/app_functions/snackbar";
import TextInput from "../../../components/inputs/text";
import { ClickButtonMain } from "../../../components/buttons";
import PlusIcon from "../../../assets/icons/plus";
import { Divider, IconButton, MenuItem, TextField } from "@mui/material";
import input_style_default from "../../../layouts/themes/input_styles";
import SelectInput from "../../../components/inputs/select";

export default function CourseTimetable() {
  const axios = useAxios();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state?.userAuthentication?.value);
  const [course, setCourse] = useState("");
  const [timetable, setTimetable] = useState<
    {
      id: string;
      startId: string;
      endId: string;
      startDateTime: string;
      endDateTime: string;
    }[]
  >([
    {
      id: `random-1`,
      startId: `random-start-1`,
      endId: `random-end-1`,
      startDateTime: "",
      endDateTime: "",
    },
  ]);

  const [timetableName, setTimetableName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitTimetable = useCallback(
    async (e: SyntheticEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      try {
        const response = await axios.post("/lecturers/course-timetable", {
          timetable: timetable,
          course: course,
          timetableName: timetableName,
        });
        const { data, message } = response?.data;
        dispatch(openSnackbar({ message: message, isError: false }));
        setCourse("");
        setTimetableName("");
        setTimetable([
          {
            id: `random-1`,
            startId: `random-start-1`,
            endId: `random-end-1`,
            startDateTime: "",
            endDateTime: "",
          },
        ]);
      } catch (error: any) {
        const errorMessage = error?.response?.data?.message;
        dispatch(openSnackbar({ message: errorMessage, isError: true }));
      } finally {
        setIsSubmitting(false);
      }
    },
    [course, timetable, timetableName]
  );

  const handleDateTimeInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>, index: number) => {
      const { name, value } = e.target;
      setTimetable((prev) => {
        const deepCloned = [...prev];
        const originalData = deepCloned[index];
        deepCloned.splice(index, 1, {
          ...originalData,
          startDateTime: name === "start" ? value : originalData?.startDateTime,
          endDateTime: name === "end" ? value : originalData?.endDateTime,
        });
        return deepCloned;
      });
    },
    []
  );

  const addNewEntry = useCallback(() => {
    setTimetable((prev) => {
      const idGenerated = Math.random()
        .toString(36)
        .substring(2, 8 + 2);
      return [
        ...prev,
        {
          id: `${idGenerated}-${prev?.length + 1}`,
          startId: `${idGenerated}-start-${prev?.length + 1}`,
          endId: `${idGenerated}-end-${prev?.length + 1}`,
          startDateTime: "",
          endDateTime: "",
        },
      ];
    });
  }, []);

  const removeEntry = useCallback((index: number) => {
    setTimetable((prev) => {
      const deepCloned = [...prev];
      deepCloned.splice(index, 1);
      return deepCloned;
    });
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
          <h2 className=" text-4xl mb-10">Course Timetable</h2>
          <form onSubmit={submitTimetable} className=" flex flex-col gap-3">
            <div className=" flex items-center justify-center gap-5 flex-col md:flex-row mb-5">
              <div className=" w-full max-w-xs">
                <SelectInput
                  label="Course"
                  value={course}
                  setValue={setCourse}
                  id="course-code"
                  isRequired={true}
                >
                  {user?.courses?.length > 0 &&
                    user?.courses?.map((course) => (
                      <MenuItem
                        sx={{ color: "primary.main" }}
                        key={course}
                        value={course?.toLowerCase()}
                      >
                        {course}
                      </MenuItem>
                    ))}
                </SelectInput>
              </div>
              <div className=" w-full max-w-xs">
                <TextInput
                  inputType="text"
                  value={timetableName}
                  setValue={setTimetableName}
                  placeholder="Name this timetable"
                  label="Name timetable"
                  isRequired={true}
                  id="timetable-name"
                />
              </div>
            </div>
            {timetable.map((dateTime, index) => {
              return (
                <div key={dateTime?.id} className="w-full flex flex-col gap-3">
                  <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className=" flex flex-col">
                      <label htmlFor={dateTime?.startId}>
                        Start date and time
                      </label>
                      <TextField
                        required={true}
                        fullWidth={true}
                        error={false}
                        id={dateTime?.startId}
                        type={"datetime-local"}
                        name="start"
                        label={""}
                        placeholder={"Start date and time"}
                        value={dateTime?.startDateTime}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          handleDateTimeInput(e, index)
                        }
                        margin="normal"
                        variant="outlined"
                        sx={input_style_default}
                      />
                    </div>
                    <div className=" flex flex-col">
                      <label htmlFor={dateTime?.endId}>End date and time</label>
                      <div className="w-full flex items-center gap-3">
                        <TextField
                          required={true}
                          fullWidth={true}
                          error={false}
                          id={dateTime?.endId}
                          type={"datetime-local"}
                          label={""}
                          name="end"
                          placeholder={"Start date and time"}
                          value={dateTime?.endDateTime}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            handleDateTimeInput(e, index)
                          }
                          margin="normal"
                          variant="outlined"
                          sx={input_style_default}
                        />
                        <IconButton
                          onClick={() => removeEntry(index)}
                          sx={{ color: "primary.main" }}
                        >
                          <Delete />
                        </IconButton>
                      </div>
                    </div>
                  </div>
                  <Divider />
                </div>
              );
            })}
            <ClickButtonMain
              label="New date"
              type="button"
              is_float={false}
              isLoading={false}
              startIcon={<PlusIcon />}
              clickHandler={() => addNewEntry()}
            />
            <ClickButtonMain
              label="Submit Timetable"
              type="submit"
              is_float={true}
              isLoading={isSubmitting}
            />
          </form>
        </div>
      </section>
    </motion.div>
  );
}
