import React, { useState, useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";
import clsx from "clsx";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavLink = ({ title, id }) => (
    <LinkScroll
      onClick={() => setIsOpen(false)}
      to={id}
      offset={-100}
      spy
      smooth
      activeClass="nav-active"
      className="base-bold text-white uppercase transition-all duration-500 cursor-pointer hover:text-gray-300 max-lg:my-4 max-lg:h5 bg-black bg-opacity-70 px-4 py-2 rounded-lg hover:bg-opacity-90"
    >
      {title}
    </LinkScroll>
  );

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4",
        hasScrolled ? "py-2 bg-black backdrop-blur-[8px]" : "bg-black"
      )}
    >
      <div className="container flex h-14 items-center max-lg:px-5">
        <a className="lg:hidden flex-1 cursor-pointer z-2" href="https://www.royalenfield.com/in/en/home/">
          <img src="https://www.royalenfield.com/content/dam/royal-enfield/india/logos/logo.svg" width={115} height={55} alt="logo" />
        </a>

        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-black max-lg:bg-opacity-90 max-lg:opacity-0 transition-opacity duration-300",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none"
          )}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="Hero" id="Hero" />
                  <div className="dot" />
                  <NavLink title="MIY" id="MIY" />
                </li>

                <li className="nav-logo">
                  <LinkScroll
                    to="hero"
                    offset={-250}
                    spy
                    smooth
                    className={clsx(
                      "max-lg:hidden transition-transform duration-500 cursor-pointer",
                    )}
                  >
                    <img
                      src="https://www.royalenfield.com/content/dam/royal-enfield/india/logos/logo.svg"
                      width={160}
                      height={55}
                      alt="logo"
                    />
                  </LinkScroll>
                </li>

                <li className="nav-li">
                  <NavLink title="Motorcycle" id="Motorcycle" />
                  <div className="dot" />
                  <NavLink title="R!de" id="Ride" />
                </li>
              </ul>
            </nav>

            <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
              <img
                src="/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>
        </div>

        <button
          className="lg:hidden z-2 w-12 h-12 border-2 border-white/25 rounded-full flex justify-center items-center bg-black bg-opacity-50 hover:bg-opacity-75 transition-all duration-300"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          {isOpen ? (
            <FaTimes className="text-white" size={24} />
          ) : (
            <FaBars className="text-white" size={24} />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
