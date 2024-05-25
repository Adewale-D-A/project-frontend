import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useEffect } from "react";
import { axiosInstance } from "..";
import { clearAuthentication } from "../../../store/user/auth";

//axios instace interceptor for access token integration and refresh tokens
const useAxios = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { access_token } = useAppSelector(
    (state) => state.userAuthentication.value
  );

  useEffect(() => {
    const requestIntercept = axiosInstance.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${access_token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
    const responseIntercept = axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 401) {
          const hadUnauthenticated = error?.response?.data?.message
            ?.toLowerCase()
            .includes("unauthenticated");
          if (hadUnauthenticated) {
            sessionStorage.removeItem(`${process.env.REACT_APP_SESSION_KEY}`);
            dispatch(clearAuthentication());
            navigate("/");
          }
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }
    );
    return () => {
      axiosInstance.interceptors.request.eject(requestIntercept);
      axiosInstance.interceptors.response.eject(responseIntercept);
    };
  }, []);
  return axiosInstance;
};

export default useAxios;
