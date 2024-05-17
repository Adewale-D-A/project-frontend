import { ReactNode, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { toggleMenuView } from "../../store/app_functions/navMenuFunctions";
import FullMenuView from "./fullView";
import { nav_menu } from "../../types/interfaces/app_functions_interface";
import { Link } from "react-router-dom";

function MainLayout({
  children,
  navDataset,
}: {
  children: ReactNode;
  navDataset: nav_menu;
}) {
  const dispatch = useAppDispatch();
  //get status of side menu from redux store
  const fullView = useAppSelector(
    (state) => state?.menuFunctions?.value?.fullMenuView
  );

  //toggle side bar menu using reux dispatcher
  const toggleMenu = useCallback(() => {
    dispatch(toggleMenuView());
  }, []);

  return (
    <div className=" flex w-full">
      <nav className="z-10 fixed left-0 top-0">
        <div className={`${fullView ? "fixed md:relative top-0 left-0" : ""}`}>
          <div className="flex">
            <FullMenuView navDataset={navDataset} /> {/* full view  */}
          </div>
        </div>
      </nav>
      <div className=" w-full absolute top-0 left-0 pl-0 md:pl-24">
        <div className="w-full webkit-sticky top-0 z-[8] bg-white shadow-md">
          <div className="flex border-b border-gray-200">
            {!fullView && (
              <button
                type="button"
                title="toggle-bar"
                onClick={() => toggleMenu()}
                className="py-5 bg-gray-400/20 h-fit px-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className=" w-8 h-8 text-gray-700 hover:text-primary_green-500 transition-all cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                  />
                </svg>
              </button>
            )}
            <div className="w-full flex justify-between p-5">
              <h6 className=" font-semibold text-lg text-gray-700 w-full">
                Dashboard
              </h6>
              <div className="flex items-center gap-5 w-full justify-end">
                <Link
                  to="#"
                  className="flex items-center justify-center w-8 h-8 aspect-square rounded-full overflow-hidden"
                >
                  <img
                    src="/logo192.png"
                    alt="avatar"
                    className="w-full object-cover"
                  />
                </Link>
              </div>
            </div>
          </div>
          {/* <div className=" flex gap-1 p-5 text-primary_green-500 text-xs">
          {breadCrumb.map((crumb) => {
            return (
              <Link
                to={crumb?.url}
                key={crumb?.label}
                className="flex items-center gap-1"
              >
                {crumb?.icon} <span>{crumb?.label}</span> {"/"}
              </Link>
            );
          })}
        </div> */}
        </div>
        <section className=" w-full h-full overflow-y-auto overflow-x-hidden pb-36">
          <div className={`w-full block`}>{children}</div>
        </section>
      </div>
    </div>
  );
}

export default MainLayout;
