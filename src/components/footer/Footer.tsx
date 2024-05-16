import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="grid grid-cols-2 gap-10 md:flex md:gap-5 bg-gray-50 items-center justify-between px-10 py-5 md:min-h-[5vh] mt-32"></section>
      <section className="footer-bg bg-right-top bg-no-repeat bg-contain bg-[#252525] text-white p-10 md:p-20">
        <footer className="text-white">
          <div className="flex flex-col justify-center w-full md:flex-row md:justify-between border-y border-[#A1A9AE] mt-20 py-20">
            <div className="flex flex-col gap-5 justify-center items-center">
              <img src={"/logo192.png"} alt="mia" className="w-32 h-auto" />
              <p className=" max-w-xs">
                Introducing a system that is self sufficient, portable and
                eco-friendly with an improved feature of serving multipurpose
                functions is the ideal way forward in breaking the norm or
                conventions.
              </p>
              <div className="mt-10">
                <Link
                  to="/user-guide"
                  type="button"
                  className="rounded-full border border-white text-white px-7 py-4  hover:bg-[#17594F] hover:border-none hover:cursor-pointer transition-all"
                >
                  View user guide
                </Link>
              </div>
            </div>
            <div className="flex gap-24 mt-9 md:mt-0 justify-center">
              <div className="flex flex-col gap-5">
                <span className="font-bold text-lg">The System</span>
                <div className="flex flex-col gap-5">
                  {[
                    { label: "About", url: "/about-our-system" },
                    { label: "User Guide", url: "/user-guide" },
                    { label: "The Team", url: "/the-team" },
                    { label: "Contact", url: "/contact-us" },
                  ].map((item, index) => {
                    return (
                      <Link to={item.url} key={index}>
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <span className="font-bold text-lg">Support</span>
                <div className="flex flex-col gap-5">
                  {[
                    { label: "Contact", url: "#" },
                    { label: "Feedback", url: "#" },
                    { label: "Features", url: "#" },
                    // { label: "Mentors", url: "#" },
                  ].map((item, index) => {
                    return (
                      <Link to={item.url} key={index}>
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 mb-5 flex flex-col gap-5 md:gap-0 md:flex-row justify-center md:justify-between text-sm">
            <p>
              <Link to={"#"}>
                Terms | Privacy | Cookie Policy | Cookie Setting
              </Link>
            </p>
            <div className="flex items-center gap-5">
              <span>The University</span>
              <div className="flex gap-4">
                {[
                  {
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="h-6 w-6"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16 8a8 8 0 0 1-7.022 7.94l1.902-7.098a3 3 0 0 0 .05-1.492A3 3 0 0 0 10.237 6h5.511A8 8 0 0 1 16 8M0 8a8 8 0 0 0 7.927 8l1.426-5.321a3 3 0 0 1-.723.255 3 3 0 0 1-1.743-.147 3 3 0 0 1-1.043-.7L.633 4.876A8 8 0 0 0 0 8m5.004-.167L1.108 3.936A8.003 8.003 0 0 1 15.418 5H8.066a3 3 0 0 0-1.252.243 2.99 2.99 0 0 0-1.81 2.59M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
                        />
                      </svg>
                    ),
                    url: "https://www.unilorin.edu.ng/",
                  },
                ].map((item) => {
                  return (
                    <Link to={item.url} key={item?.url} target="_blank">
                      {item?.icon}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
