import { useCallback } from "react";
import { Button } from "@mui/material";
import CheckMobile from "../../utils/checkMobile";
import { useAppDispatch } from "../../store/hooks";
import { openSnackbar } from "../../store/app_functions/snackbar";
// declare const window: any;

export default function StoreBadge() {
  const { isMobile, isIos } = CheckMobile();
  const dispatch = useAppDispatch();

  const PLayStore = useCallback(() => {
    dispatch(openSnackbar({ message: "Comming soon...", isError: false }));
    // window.location.href = process.env.REACT_APP_PLAY_STORE;
  }, []);

  const AppStore = useCallback(() => {
    dispatch(openSnackbar({ message: "Comming soon...", isError: false }));
    // window.location.href = process.env.REACT_APP_APP_STORE;
  }, []);

  return (
    <>
      {isMobile && (
        <div className="flex">
          {isIos ? (
            <Button
              className=" h-11 w-auto"
              title="apple app store"
              onClick={() => AppStore()}
            >
              <img
                src={"/app_store_badge.png"}
                alt="app store"
                title="app store"
                className=" h-full w-auto animate-bounce"
              />
            </Button>
          ) : (
            <Button
              className=" h-11 w-auto"
              title="google play store"
              onClick={() => PLayStore()}
            >
              <img
                src={"/google_play_badge.png"}
                alt="play store"
                title="google play store"
                className=" h-full w-auto animate-bounce"
              />
            </Button>
          )}
        </div>
      )}
    </>
  );
}

// export default StoreBadge;
