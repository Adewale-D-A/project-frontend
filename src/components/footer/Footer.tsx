import { useState } from "react";
import { Link } from "react-router-dom";
import LinkedInIcon from "../../assets/icons/linkedIn";

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
                    { label: "The Team", url: "/team" },
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
                    { label: "Contact", url: "/contact-us" },
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
              <Link
                to={"https://my-portfolio-eight-pi-71.vercel.app/"}
                target="_blank"
              >
                © 2024. AAD
              </Link>
            </p>
            <div className=" flex items-center gap-3 mt-6">
              <Link
                to="https://www.linkedin.com/in/adewale-d-azeez/"
                target="_blank"
                rel="noreferrer"
                className=" border rounded-full p-3 border-gray-600"
              >
                <LinkedInIcon />
              </Link>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
