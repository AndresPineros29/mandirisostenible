/* eslint-disable react/prop-types */
import { useState } from "react";
import { logotipo } from "../../assets/images";
import Services from "./Services";
import ServicesSm from "./ServicesSm";

// Import icons

import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

// Import Link
import { Link } from "react-router-dom";

const Navbar = ({ handleClickScroll }) => {
  // NavBar State
  const [active, setActive] = useState(false);
  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <nav className="z-20 fixed top-0 w-full bg-white">
      <section className="flex justify-between lg:justify-around items-center mx-10 my-5 xl:mx-52 xl:my-10">
        <Link to={"/"}>
          <div className="w-32 xl:w-72 my-3 select-none">
            <img
              draggable="false"
              src={logotipo}
              alt="logotipo"
              onClick={scrollToTop}
            />
          </div>
        </Link>

        <div className="hidden lg:flex items-center">
          <ul className="flex gap-10 text-lg font-[500]">
            <Link to={"/"}>
              <li
                className="select-none cursor-pointer hover:text-primary-green"
                onClick={scrollToTop}
              >
                INICIO
              </li>
            </Link>
            <div
              onMouseEnter={() => setActive(true)}
              onMouseLeave={() => setActive(false)}
            >
              <li
                className="select-none cursor-pointer hover:text-primary-green"
                onClick={handleClickScroll}
              >
                SERVICIOS
              </li>
              <Services active={active} setActive={setActive} />
            </div>
            <Link to={"/contacto"}>
              <li className="select-none cursor-pointer hover:text-primary-green">
                CONTACTO
              </li>
            </Link>
          </ul>
        </div>

        <div className="hidden lg:flex gap-5 text-primary-green">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/mandirisostenible/"
          >
            <BsInstagram size={30} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/profile.php?id=100094486896691"
          >
            <BsFacebook size={30} />
          </a>
        </div>

        <div className="z-30 lg:hidden" onClick={() => setActive(!active)}>
          <GiHamburgerMenu
            className={`lg:hidden text-green-500 ${
              active ? "hidden" : "block"
            }`}
            size={28}
          />
          <CgClose
            className={`lg:hidden text-green-500 ${
              active ? "block" : "hidden"
            }`}
            size={28}
          />
        </div>
      </section>
      <ServicesSm active={active} setActive={setActive} />
    </nav>
  );
};

export default Navbar;
