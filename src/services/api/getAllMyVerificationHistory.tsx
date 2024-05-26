import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import useAxios from "../base/axios/useAxios";
import { updateVerificationHistory } from "../../store/user/allVerificationHistory";

//axios instace interceptor for access token integration and refresh tokens
const useGetMyVerificationHistory = () => {
  const axios = useAxios();
  const dispatch = useAppDispatch();
  const { status, data } = useAppSelector(
    (state) => state?.myVerificationHistory.value
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  const getAllHistory = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`/students/verification-history`);
      console.log({ response });
      const data = response?.data?.data;

      dispatch(updateVerificationHistory(data));
      setIsLoading(false);
    } catch (error) {
      setIsFailed(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (status) {
      setIsLoading(false);
    } else {
      getAllHistory();
    }
  }, [status]);

  return {
    data: data,
    isLoading,
    isFailed,
    setIsFailed,
    retryFunction: getAllHistory,
  };
};

export default useGetMyVerificationHistory;
