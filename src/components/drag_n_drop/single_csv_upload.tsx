import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";
import Papa from "papaparse";
import { useAppDispatch } from "../../store/hooks";
import { openSnackbar } from "../../store/app_functions/snackbar";

export default function SingleCSVUpload({
  setCsvData,
  csvData,
}: {
  csvData: { matric_number: string; fullname: string }[];
  setCsvData: Function;
}) {
  const dispatch = useAppDispatch();

  const [uploadedFiles, setUploadFiles] = useState<{
    name: string;
    size: number;
    type: string;
  }>({} as any);
  const [fileType, setFileType] = useState();

  //remove an uploaded file
  const removeUplaod = useCallback(() => {
    setUploadFiles({} as any);
    setCsvData([]);
  }, []);

  //handle drag 'n drop objejct
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "text/csv": [".csv"],
    },
    onDrop: (acceptedFiles: any) => {
      if (acceptedFiles.length < 2) {
        //check the number of files uploaded

        if (acceptedFiles[0]?.size < 1000000) {
          //check the size of the first file uploaded
          if (
            //check the type of file uploaded
            acceptedFiles[0].type === "text/csv" ||
            acceptedFiles[0].type === "application/vnd.ms-excel"
          ) {
            try {
              const uploadedFile = acceptedFiles[0];
              Papa.parse(uploadedFile, {
                complete: (result: any) => {
                  const listData = result.data;
                  if (listData[0]?.matric_number && listData[0]?.fullname) {
                    const finalDataset = [] as {
                      matric_number: string;
                      fullname: string;
                    }[];
                    listData.forEach(
                      (element: {
                        matric_number: string;
                        fullname: string;
                      }) => {
                        if (element?.matric_number && element?.fullname) {
                          finalDataset.push(element);
                        }
                      }
                    );
                    setUploadFiles(uploadedFile);
                    setCsvData(finalDataset);
                  } else {
                    dispatch(
                      openSnackbar({
                        message:
                          "Invalid CSV file structure, please download sample csv file for guide",
                        isError: true,
                      })
                    );
                  }
                  console.log(result.data);
                },
                header: true,
              });
            } catch (error) {
              dispatch(
                openSnackbar({ message: "error parsing file", isError: true })
              );
            }
          } else {
            dispatch(
              openSnackbar({
                message: "uploaded file type is not supported",
                isError: true,
              })
            );
          }
        } else if (acceptedFiles[0]?.size) {
          dispatch(
            openSnackbar({
              message: "upload larger than 10MB is not accepted",
              isError: true,
            })
          );
        } else {
          dispatch(
            openSnackbar({
              message: "uploaded file type is not supported",
              isError: true,
            })
          );
        }
      } else {
        dispatch(
          openSnackbar({
            message: "multiple file upload is not accepted",
            isError: true,
          })
        );
      }
    },
  });

  return (
    <>
      {/* uplaod file body */}
      {csvData?.length > 0 ? (
        <div className=" p-4 w-full flex flex-col gap-5 shadow-lg rounded-lg overflow-x-auto">
          <table className=" w-full py-10 border rounded-md">
            <thead>
              <tr className=" text-left bg-gray-200/15">
                <th>S/N</th>
                <th>Matric Number</th>
                <th>Fullname</th>
              </tr>
            </thead>
            <tbody className="">
              {csvData.map((request, index) => {
                return (
                  <tr key={request?.matric_number} className=" border-b">
                    <td className=" text-gray-500">{index + 1}</td>
                    <td>
                      <div className="flex flex-col">
                        <span>{request?.matric_number}</span>
                      </div>
                    </td>
                    <td>
                      <div className="flex flex-col">
                        <span>{request?.fullname}</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className=" w-full">
          <div
            {...getRootProps()}
            className="w-full border shadow-md shadow-primary-500 rounded-lg hover:border-primary-500 transition-all cursor-pointer"
            onDragOver={(e: any) => {
              setFileType(e?.dataTransfer?.items[0]?.type);
              // setUploadNumber(e.dataTransfer.items.length);
            }}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <div className="">
                <div className="">
                  {fileType === "text/csv" ||
                  fileType === "application/vnd.ms-excel" ? (
                    <div className=" h-52 py-10 md:p-10 flex items-center justify-center gap-10 px-10 md:px-20 bg-primary-500 text-white">
                      <p className=" text-xl font-bold">
                        drop the .csv or .excel file here
                      </p>
                    </div>
                  ) : (
                    <div className=" h-52 py-10 md:p-10 flex items-center justify-center gap-10 px-10 md:px-20 bg-red-500 text-white">
                      <p className=" text-xl font-bold">
                        only .csv or .excel file type is accepted
                      </p>
                    </div>
                  )}{" "}
                </div>
              </div>
            ) : (
              <div className=" py-5 flex flex-col items-center justify-center gap-10 ">
                <div className="flex flex-col items-center border rounded-md p-3 text-gray-400 w-full gap-2 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-12 h-12 text-primary-500 mb-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.5 3.75a6 6 0 00-5.98 6.496A5.25 5.25 0 006.75 20.25H18a4.5 4.5 0 002.206-8.423 3.75 3.75 0 00-4.133-4.303A6.001 6.001 0 0010.5 3.75zm2.03 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v4.94a.75.75 0 001.5 0v-4.94l1.72 1.72a.75.75 0 101.06-1.06l-3-3z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <h4 className=" text-primary-500 font-bold mb-3">
                    Click to upload file(s)
                  </h4>
                  <p>Kindly attach Registered student's list</p>
                  <p>File Format: CSV or Excel (Max. 5mb)</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* upload preview */}

      {uploadedFiles?.name && (
        <div className="flex flex-col items-center text-gray-500 w-full max-w-52 gap-5 p-3 border border-gray-300 rounded-md">
          <div className="w-full flex items-end justify-end">
            <button
              type="button"
              onClick={() => removeUplaod()}
              title="remove upload"
              className=" p-2 bg-gray-600/30 rounded-full group hover:bg-red-500/30 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-700 group-hover:text-red-500 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-20 h-20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>
          <div className=" w-full p-2">
            <p className=" text-md text-center line-clamp-2 text-ellipsis w-full">
              {uploadedFiles?.name}
            </p>
            <p className=" text-sm text-primary-500 text-center line-clamp-2">
              {Math.ceil(uploadedFiles?.size / 1000000)} MB
            </p>
          </div>
        </div>
      )}
    </>
  );
}
