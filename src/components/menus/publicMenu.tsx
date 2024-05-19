import { useRef, useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const { pathname } = useLocation();
  //toggle mobile menu logic definition
  const hideShowNavbarRef = useRef<HTMLDivElement>(null) as any;
  //set the mobile menu display to none on page load
  useEffect(() => {
    hideShowNavbarRef.current.style.display = "none";
  }, []);
  //target html tags for toggle effect on mobile navbar menu onClick
  const CloseResponsiveNavBar = () => {
    hideShowNavbarRef.current.style.display = "none";
  };
  const OpenResponsiveNavBar = () => {
    hideShowNavbarRef.current.style.display = "";
  };
  //toggle mobile menu logic definition
  useEffect(() => {
    CloseResponsiveNavBar();
  }, [pathname]);

  return (
    <nav className=" flex justify-center w-screen rounded-b-md fixed top-0 z-10 backdrop-bg-filter">
      {/* //desktop view  */}
      <div className="w-full hidden md:flex justify-between items-center max-w-screen-xl px-5 md:px-10">
        <Link to="/" className="">
          <img
            src={"/logo192.png"}
            alt="university logo"
            title="university logo"
            className="w-24 h-auto"
          />
        </Link>
        <div className="flex items-center gap-6">
          {navItems.map((menus) => {
            return (
              <div key={menus?.label} className="group z-50 relative flex ">
                <Link to={menus?.url} className=" text-shadow-white">
                  {menus?.label}
                </Link>
                {menus?.hasSubMenu && (
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 group-hover:hidden block"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 group-hover:block hidden"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                )}
                {menus.hasSubMenu && (
                  <div className="w-[300px] z-30 hidden absolute top-0 left-0 pt-10 group-hover:flex flex-col gap-3">
                    <div className="w-full flex flex-col gap-1 bg-primary-500 rounded-lg text-white px-5 py-2">
                      {menus?.subMenu?.map((subMenu) => {
                        return (
                          <Link
                            key={subMenu?.label}
                            className="w-full flex items-center gap-4 hover:bg-gray-400/40 rounded-lg transition-all py-2 px-2"
                            to={subMenu?.url}
                            id="icon-menu"
                          >
                            {subMenu?.iconUrl ? (
                              <img
                                src={subMenu?.iconUrl}
                                alt={subMenu?.label}
                                title={subMenu?.label}
                                className=" w-8 h-auto"
                              />
                            ) : (
                              subMenu?.icon
                            )}
                            <span>{subMenu?.label}</span>{" "}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <Link
          to={"/login"}
          className="bg-primary-500 p-2 px-5 rounded-md w-fit text-white hover:bg-secondary-500 transition-all cursor-pointer flex items-center gap-3"
        >
          <span>login</span>{" "}
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
              d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"
            />
          </svg>
        </Link>
      </div>

      {/* mobile view  */}
      <div className="block md:hidden w-full py-3">
        <div className="flex w-full items-center justify-between px-5">
          <button
            type="button"
            className=" group text-white"
            title="open menu bar"
            onClick={() => OpenResponsiveNavBar()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8  shadow-md rounded-md shadow-primary-500 group-hover:scale-110 transition-all group-hover:text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
          <div className="flex items-center gap-8">
            <Link to="/" className="">
              <img
                src="/logo192.png"
                alt="home"
                title="home"
                className="h-8 w-auto"
              />
            </Link>
            <Link
              to={"/login"}
              className="bg-primary-500 p-2 px-5 rounded-md w-fit text-white hover:bg-secondary-500 transition-all cursor-pointer flex items-center gap-3"
            >
              <span>login</span>{" "}
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
                  d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div
          className="z-20 fixed top-0 left-0 w-full h-screen bg-[#000000e6] noise-bg  bg-repeat"
          ref={hideShowNavbarRef}
        >
          <div className="flex w-full justify-end">
            <button
              className=" bg-white p-2 group"
              title="close"
              type="button"
              onClick={() => CloseResponsiveNavBar()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 group-hover:rotate-180 transition-all"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="w-full flex flex-col gap-2 px-5 text-white mt-5">
            {navItems.map((menus) => {
              return (
                <div
                  key={menus?.label}
                  className=" flex items-center gap-4 relative group hover:bg-secondary-500/60 hover:pl-10 transition-all rounded-lg"
                >
                  <Link
                    className=" flex items-center gap-4 w-full  py-4 px-3"
                    to={menus?.url}
                    id="icon-menu"
                  >
                    {menus?.icon}
                    <span>{menus?.label}</span>{" "}
                    {menus?.hasSubMenu && (
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 group-hover:hidden block"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 group-hover:block hidden"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </div>
                    )}
                  </Link>

                  {menus.hasSubMenu && (
                    <div className="w-full z-30 hidden absolute top-0 left-0 pt-10 group-hover:flex flex-col gap-3">
                      <div className=" flex flex-col gap-1 bg-primary-500 rounded-lg text-white px-5 py-2">
                        {menus?.subMenu?.map((subMenu) => {
                          return (
                            <Link
                              key={subMenu?.label}
                              className=" flex items-center gap-4 w-full hover:bg-gray-400/40 rounded-lg transition-all py-2 px-2"
                              to={subMenu?.url}
                              id="icon-menu"
                            >
                              {subMenu?.icon}
                              <span>{subMenu?.label}</span>{" "}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

const navItems = [
  {
    label: "home",
    url: "/",
    iconUrl: "",
    icon: (
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
          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
    hasSubMenu: false,
    subMenu: [
      {
        label: "",
        url: "#",
        iconUrl: "",
        icon: "",
      },
    ],
  },
  {
    label: "about us",
    url: "/about-our-system",
    iconUrl: "",
    icon: (
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
          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
        />
      </svg>
    ),
    hasSubMenu: false,
    subMenu: [
      {
        label: "",
        url: "#",
        iconUrl: "",
        icon: "",
      },
    ],
  },
  {
    label: "the team",
    url: "/team",
    iconUrl: "",
    icon: (
      <svg
        className="w-6 h-6  text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 19"
      >
        <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
        <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z" />
      </svg>
    ),
    hasSubMenu: false,
    subMenu: [
      {
        label: "",
        url: "#",
        iconUrl: "",
        icon: "",
      },
    ],
  },
  {
    label: "contact us",
    url: "/contact-us",
    iconUrl: "",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className=" h-6 w-6"
        viewBox="0 0 16 16"
      >
        <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
        <path d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.707L6 1.293A1 1 0 0 0 5.293 1zm0 1h4.293L6 2.707A1 1 0 0 0 6.707 3H15v10h-.085a1.5 1.5 0 0 0-2.4-.63C11.885 11.223 10.554 10 8 10c-2.555 0-3.886 1.224-4.514 2.37a1.5 1.5 0 0 0-2.4.63H1z" />
      </svg>
    ),
    hasSubMenu: false,
    subMenu: [
      {
        label: "",
        url: "#",
        iconUrl: "",
        icon: "",
      },
    ],
  },
  {
    label: "user guide",
    url: "/user-guide",
    iconUrl: "",
    icon: (
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
          d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
    hasSubMenu: false,
    subMenu: [
      {
        label: "",
        url: "#",
        iconUrl: "",
        icon: "",
      },
    ],
  },
];
