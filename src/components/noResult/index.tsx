function NoResult({ title, message }: { title?: string; message?: string }) {
  return (
    <div className="w-full flex flex-col gap-3 items-center justify-center p-3 py-10">
      <div className=" p-1 shadow-sm shadow-primary-500 rounded-full h-12 w-12 text-primary-500 flex items-center justify-center bg-primary-500/30 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
      <h6 className=" font-semibold ">{title ? title : "No data found"}</h6>
      <p className=" text-sm text-gray-500">
        {message ? message : "You have no data found in the system"}
      </p>
    </div>
  );
}

export default NoResult;
